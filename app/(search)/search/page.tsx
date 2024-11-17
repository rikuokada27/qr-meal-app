"use client";

import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard-shell";
import PostItem from "@/components/post-item";
import { Genre } from "@prisma/client";
import { useState, useEffect } from "react";
import { prefectures } from "@/lib/prefectures"; // 都道府県リストをインポート

interface Post {
  id: string;
  title: string;
  published: boolean;
  createdAt: Date;
  prefecture?: string; // 必要に応じて追加
  genre: Genre | null;     // 追加: ジャンル
  address: string | null;  // 追加: 住所
}

export default function SearchPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [genreFilter, setGenreFilter] = useState<Genre | "">("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [prefectureFilter, setPrefectureFilter] = useState<string | "">("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
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
        const formattedData = data.map((post: any) => ({
          ...post,
          createdAt: new Date(post.createdAt), // createdAt を Date に変換
        }));
        setPosts(formattedData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, [genreFilter, sortOrder, prefectureFilter]);

  return (
    <DashBoardShell className="pt-6 max-w-4xl mx-auto">
      <DashBoardHeader heading="記事投稿" text="記事の投稿と管理">
        <></> {/* 必須の children を追加 */}
      </DashBoardHeader>
      <div className="flex flex-wrap">
        {/* ジャンル選択セレクトボックス */}
        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value as Genre | "")}
          className="border rounded-md p-2 mb-4"
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
          className="border rounded-md p-2 mb-4 ml-4"
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
          className="border rounded-md p-2 mb-4 ml-4"
        >
          <option value="desc">日付順（新しい順）</option>
          <option value="asc">日付順（古い順）</option>
        </select>
      </div>
      {posts.length ? (
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