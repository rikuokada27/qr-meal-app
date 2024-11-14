import Editor from "@/components/editor";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { notFound, redirect } from "next/navigation";

interface EditorProps {
  params: { postId: string }
}

// 日本語ジャンルから英語ジャンルにマッピング
const genreMapping: Record<string, "CHINESE" | "JAPANESE" | "WESTERN" | "ITALIAN" | "FRENCH" | "SEAFOOD" | "BBQ" | "SUSHI" | "OTHER"> = {
  "中華": "CHINESE",
  "日本食": "JAPANESE",
  "洋食": "WESTERN",
  "イタリアン": "ITALIAN",
  "フレンチ": "FRENCH",
  "海鮮": "SEAFOOD",
  "焼肉": "BBQ",
  "寿司": "SUSHI",
  "その他": "OTHER",
};

async function getPostForUser(postId: string, userId: string) {
  const post = await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    }
  });
  return post;
}

export default async function EditorPage({ params }: EditorProps) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
    return;
  }

  const post = await getPostForUser(params.postId, user.id);
  if (!post) {
    notFound();
    return;
  }

  return (
    <Editor
      post={{
        id: post.id,
        title: post.title,
        published: post.published,
        address: post.address || "", // アドレスを渡す
        genre: post.genre || undefined, // genreがnullまたは空の場合はundefinedを指定
      }}
    />
  );
}