"use client";

import { Post } from "@prisma/client";
import { format } from "date-fns";
import Link from "next/link";
import PostOperations from "./post-operations";

interface PostItemProps {
  post: Pick<Post, "id" | "title" | "published" | "createdAt" | "genre" | "address">;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b last:border-b-0">
      <div className="grid gap-1">
        <Link href={`/editor/${post.id}`} className="font-semibold hover:underline">
          {post.title}
        </Link>

        {/* ジャンルの表示 */}
        {post.genre && (
          <p className="text-sm text-gray-600">
            ジャンル: {mapGenreToJapanese(post.genre as NonNullable<Post["genre"]>)}
          </p>
        )}

        {/* 住所の表示 */}
        {post.address && (
          <p className="text-sm text-gray-600">
            住所: {post.address}
          </p>
        )}

        <div>
          <p className="text-sm text-muted-foreground">
            {format(new Date(post.createdAt), "yyyy-MM-dd")}
          </p>
        </div>
      </div>

      <PostOperations post={post} />
    </div>
  );
}

// ジャンルの英語コードを日本語にマッピングする関数
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