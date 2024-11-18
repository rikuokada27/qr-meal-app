import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // Prisma クライアントのインポート
import { getCurrentUser } from "@/lib/session"; // ユーザー情報を取得する関数

export async function GET() {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const posts = await db.post.findMany({
      where: {
        authorId: user.id, // ログイン中のユーザーの投稿を取得
      },
      select: {
        id: true,
        title: true,
        genre: true,
        address: true,
        published: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc", // 投稿を作成日順でソート
      },
    });

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user posts:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}