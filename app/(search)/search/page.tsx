"use client";

import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard-shell";
import PostItem from "@/components/post-item";
import { Genre } from "@prisma/client";
import { useState, useEffect } from "react";
import { prefectures } from "@/lib/prefectures"; // 都道府県リストをインポート
import { useSession } from "next-auth/react";
import { toast } from "@/hooks/use-toast"; // トースト通知を使用する場合

interface Post {
  id: string;
  title: string;
  published: boolean;
  createdAt: Date;
  genre: Genre | null;
  address: string | null;
  isFavorite: boolean; // 追加: お気に入り状態
}

export default function SearchPage() {
  const { data: session } = useSession(); // ユーザーのセッション情報を取得
  const [posts, setPosts] = useState<Post[]>([]);
  const [genreFilter, setGenreFilter] = useState<Genre | "">("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [prefectureFilter, setPrefectureFilter] = useState<string | "">("");
  const [loading, setLoading] = useState(false); // データフェッチの状態管理

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // 投稿を取得
        const queryParams = new URLSearchParams({
          genre: genreFilter,
          order: sortOrder,
          prefecture: prefectureFilter,
        });

        const response = await fetch(`/api/posts?${queryParams.toString()}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        const formattedPosts = data.map((post: any) => ({
          ...post,
          createdAt: new Date(post.createdAt), // createdAt を Date に変換
        }));

        let postsWithFavorites: Post[] = formattedPosts.map((post: any) => ({
          ...post,
          isFavorite: false, // 初期値として false を設定
        }));

        // ユーザーがログインしている場合、お気に入り情報を取得
        if (session) {
          const favoritesResponse = await fetch("/api/favorites", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!favoritesResponse.ok) {
            throw new Error("Failed to fetch favorites");
          }

          const favoritesData = await favoritesResponse.json();
          const favoritePostIds: Set<string> = new Set(favoritesData.favorites);

          // 各投稿に isFavorite フィールドを追加
          postsWithFavorites = formattedPosts.map((post: any) => ({
            ...post,
            isFavorite: favoritePostIds.has(post.id),
          }));
        }

        setPosts(postsWithFavorites);
      } catch (error: any) {
        console.error("Error fetching posts:", error);
        toast({
          title: "エラー",
          description: "投稿の取得に失敗しました。再度お試しください。",
        });
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [genreFilter, sortOrder, prefectureFilter, session]); // セッションが変わったときも再フェッチ

  return (
    <DashBoardShell className="pt-6 max-w-4xl mx-auto">
      <DashBoardHeader heading="お店を検索" text="検索とお気に入り登録">
        <></> {/* 必須の children を追加 */}
      </DashBoardHeader>
      <div className="flex flex-wrap gap-4 mb-4">
        {/* ジャンル選択セレクトボックス */}
        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value as Genre | "")}
          className="border rounded-md p-2"
        >
          <option value="">すべてのジャンル</option>
          <option value="CHINESE">中華</option>
          <option value="JAPANESE">日本食</option>
          <option value="WESTERN">洋食</option>
          <option value="ITALIAN">イタリアン</option>
          <option value="FRENCH">フレンチ</option>
          <option value="SEAFOOD">海鮮</option>
          <option value="BBQ">焼肉</option>
          <option value="SUSHI">寿司</option>
          <option value="OTHER">その他</option>
        </select>

        {/* 都道府県選択セレクトボックス */}
        <select
          value={prefectureFilter}
          onChange={(e) => setPrefectureFilter(e.target.value as string | "")}
          className="border rounded-md p-2"
        >
          <option value="">すべての都道府県</option>
          {prefectures.map((prefecture) => (
            <option key={prefecture} value={prefecture}>
              {prefecture}
            </option>
          ))}
        </select>

        {/* ソート順選択セレクトボックス */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          className="border rounded-md p-2"
        >
          <option value="desc">日付順（新しい順）</option>
          <option value="asc">日付順（古い順）</option>
        </select>
      </div>
      {loading ? (
        <div className="ml-2">読み込み中...</div>
      ) : posts.length ? (
        <div className="divide-y border rounded-md">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="ml-2">投稿がありません。</div>
      )}
    </DashBoardShell>
  );
}