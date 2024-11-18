"use client"; // クライアントコンポーネントとして明示

import { Post } from "@prisma/client";
import { format } from "date-fns";
import Link from "next/link";
import PostOperations from "./post-operations";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

interface PostItemProps {
  post: Pick<Post, "id" | "title" | "published" | "createdAt" | "genre" | "address"> & {
    isFavorite: boolean;
  };
}

export default function PostItem({ post }: PostItemProps) {
  const { data: session } = useSession();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(post.isFavorite ?? false); // 初期値を安全に設定
  const [loading, setLoading] = useState(false);

  const toggleFavorite = async () => {
    if (!session) {
      toast({
        title: "エラー",
        description: "ログインが必要です。",
      });
      return;
    }

    setLoading(true);
    setIsFavorite(!isFavorite);

    try {
      const response = await fetch("/api/favorites", {
        method: isFavorite ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId: post.id }),
      });

      if (!response.ok) {
        throw new Error(isFavorite ? "お気に入り解除に失敗しました" : "お気に入り追加に失敗しました");
      }

      const data = await response.json();
      toast({
        title: isFavorite ? "お気に入りを解除しました" : "お気に入りに追加しました",
        description: data.message,
      });
    } catch (error) {
      console.error("Error toggling favorite:", error);
      toast({
        title: "エラー",
        description: error instanceof Error ? error.message : "お気に入りの更新に失敗しました。",
      });
      setIsFavorite(!isFavorite); // 状態を元に戻す
    } finally {
      setLoading(false);
    }
  };

  const formattedDate =
    typeof post.createdAt === "string" || post.createdAt instanceof Date
      ? format(new Date(post.createdAt), "yyyy-MM-dd")
      : "日付不明";

  return (
    <div className="flex items-center justify-between p-4 border-b last:border-b-0">
      <div className="grid gap-1">
        <Link href={`/editor/${post.id}`} className="font-semibold hover:underline">
          {post.title}
        </Link>

        {post.genre && <p className="text-sm text-gray-600">ジャンル: {mapGenreToJapanese(post.genre)}</p>}

        {post.address && <p className="text-sm text-gray-600">住所: {post.address}</p>}

        <div>
          <p className="text-sm text-muted-foreground">{formattedDate}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={toggleFavorite}
          disabled={loading}
          className={`text-2xl focus:outline-none transition-colors duration-200 ${
            isFavorite ? "text-yellow-500" : "text-gray-400 hover:text-yellow-500"
          }`}
          aria-label={isFavorite ? "お気に入りを解除しました" : "お気に入りに追加しました"}
          aria-live="polite"
        >
          {isFavorite ? "★" : "☆"}
        </button>

        <PostOperations post={post} />
      </div>
    </div>
  );
}

function mapGenreToJapanese(genre: NonNullable<Post["genre"]>): string {
  const genreMapping: Record<string, string> = {
    CHINESE: "中華",
    JAPANESE: "日本食",
    WESTERN: "洋食",
    ITALIAN: "イタリアン",
    FRENCH: "フレンチ",
    SEAFOOD: "海鮮",
    BBQ: "焼肉",
    SUSHI: "寿司",
    OTHER: "その他",
  };

  return genreMapping[genre] || "その他";
}