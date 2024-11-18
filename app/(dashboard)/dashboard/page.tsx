import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard-shell";
import PostCreateButton from "@/components/post-create-button";
import PostItem from "@/components/post-item";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  // 現在のユーザーがお気に入りにしている投稿IDのリストを取得
  const favoritePosts = await db.favorite.findMany({
    where: { userId: user.id },
    select: { postId: true },
  });
  const favoritePostIds = new Set(favoritePosts.map(fav => fav.postId));

  const posts = await db.post.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
      genre: true,
      address: true,
    },
    orderBy: {
      updatedAt: "desc"
    }
  })

  // 各投稿に isFavorite フィールドを追加
  const postsWithFavorites = posts.map(post => ({
    ...post,
    isFavorite: favoritePostIds.has(post.id),
  }))

  return (
    <DashBoardShell className="pt-6 max-w-4xl mx-auto">
      <DashBoardHeader heading="お店の投稿" text="お店の投稿と管理">
        <PostCreateButton />
      </DashBoardHeader>
      <div>
        {postsWithFavorites.length ? (
          <div className="divide-y border rounded-md">
            {postsWithFavorites.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="ml-2">投稿がありません。</div>
        )}
      </div>
    </DashBoardShell>
  )
}