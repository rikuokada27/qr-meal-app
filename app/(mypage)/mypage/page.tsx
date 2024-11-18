"use client";

import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard-shell";
import PostItem from "@/components/post-item";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "@/hooks/use-toast";
import { Genre } from "@prisma/client";

interface Post {
  id: string;
  title: string;
  genre: Genre | null;
  address: string | null;
  published: boolean;
  createdAt: Date;
  isFavorite?: boolean; // お気に入り判定を追加
}

export default function MyPage() {
  const { data: session } = useSession();
  const [favoritePosts, setFavoritePosts] = useState<Post[]>([]);
  const [myPosts, setMyPosts] = useState<Post[]>([]);
  const [loadingFavorites, setLoadingFavorites] = useState(true);
  const [loadingMyPosts, setLoadingMyPosts] = useState(true);
  const [activeTab, setActiveTab] = useState<"favorites" | "myPosts">("favorites");

  const fetchFavorites = async () => {
    setLoadingFavorites(true);
    try {
      const response = await fetch("/api/user/favorites", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("お気に入り投稿の取得に失敗しました。");
      }

      const data = await response.json();
      const formattedFavorites = data.favorites.map((post: any) => ({
        id: post.id,
        title: post.title,
        genre: post.genre as Genre | null,
        address: post.address,
        published: post.published,
        createdAt: new Date(post.createdAt),
        isFavorite: true, // 明示的に true を設定
      }));
      setFavoritePosts(formattedFavorites || []);
    } catch (error: any) {
      console.error("Error fetching favorites:", error);
      toast({
        title: "お気に入り取得エラー",
        description: error.message || "お気に入りの取得に失敗しました。",
      });
    } finally {
      setLoadingFavorites(false);
    }
  };

  const fetchMyPosts = async () => {
    setLoadingMyPosts(true);
    try {
      const response = await fetch("/api/myposts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("自分の投稿の取得に失敗しました。");
      }

      const data = await response.json();
      const formattedPosts = data.posts.map((post: any) => ({
        id: post.id,
        title: post.title,
        genre: post.genre as Genre | null,
        address: post.address,
        published: post.published,
        createdAt: new Date(post.createdAt),
      }));
      setMyPosts(formattedPosts || []);
    } catch (error: any) {
      console.error("Error fetching my posts:", error);
      toast({
        title: "投稿取得エラー",
        description: error.message || "投稿の取得に失敗しました。",
      });
    } finally {
      setLoadingMyPosts(false);
    }
  };

  useEffect(() => {
    if (!session) {
      toast({
        title: "エラー",
        description: "ログインしてください。",
      });
      return;
    }

    fetchFavorites();
    fetchMyPosts();
  }, [session]);

  if (!session) {
    return (
      <DashBoardShell className="pt-6 max-w-4xl mx-auto">
        <DashBoardHeader heading="マイページ" text="ログインしてください。">
          <></>
        </DashBoardHeader>
      </DashBoardShell>
    );
  }

  return (
    <DashBoardShell className="pt-6 max-w-4xl mx-auto">
      <DashBoardHeader
        heading="マイページ"
        text={`こんにちは、${session.user?.name || "ユーザー"}さん`}
      >
        <></>
      </DashBoardHeader>
      <div className="space-y-8">
        {/* タブ切り替え */}
        <div className="flex space-x-4 mb-4">
          <button
            className={`py-2 px-4 ${activeTab === "favorites" ? "bg-gray-200 font-bold" : "bg-white"}`}
            onClick={() => setActiveTab("favorites")}
          >
            お気に入り投稿
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "myPosts" ? "bg-gray-200 font-bold" : "bg-white"}`}
            onClick={() => setActiveTab("myPosts")}
          >
            自分の投稿
          </button>
        </div>

        {/* 表示切り替え */}
        {activeTab === "favorites" ? (
          <section>
            {loadingFavorites ? (
              <p>読み込み中...</p>
            ) : favoritePosts.length > 0 ? (
              <div className="divide-y border rounded-md">
                {favoritePosts.map((post) => (
                  <PostItem
                    key={post.id}
                    post={{
                      id: post.id,
                      title: post.title,
                      genre: post.genre,
                      address: post.address,
                      published: post.published,
                      createdAt: post.createdAt,
                      isFavorite: post.isFavorite ?? true,
                    }}
                  />
                ))}
              </div>
            ) : (
              <p>お気に入り投稿はありません。</p>
            )}
          </section>
        ) : (
          <section>
            {loadingMyPosts ? (
              <p>読み込み中...</p>
            ) : myPosts.length > 0 ? (
              <div className="divide-y border rounded-md">
                {myPosts.map((post) => (
                  <PostItem
                    key={post.id}
                    post={{
                      id: post.id,
                      title: post.title,
                      genre: post.genre,
                      address: post.address,
                      published: post.published,
                      createdAt: post.createdAt,
                      isFavorite: false,
                    }}
                  />
                ))}
              </div>
            ) : (
              <p>投稿がありません。</p>
            )}
          </section>
        )}
      </div>
    </DashBoardShell>
  );
}