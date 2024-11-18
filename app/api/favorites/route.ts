import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/session"; // パスを適宜調整
import { db } from "@/lib/db"; // Prismaクライアントのインポート

// POST /api/favorites - お気に入りに追加
export async function POST(request: Request) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { postId } = await request.json();

  if (!postId) {
    return NextResponse.json({ message: "postId is required" }, { status: 400 });
  }

  try {
    await db.favorite.create({
      data: {
        userId: user.id,
        postId,
      },
    });

    return NextResponse.json({ status: 201 });
  } catch (error: any) {
    if (error.code === "P2002") { // Prismaの一意制約エラー
      return NextResponse.json({ message: "Post is already in favorites" }, { status: 409 });
    }
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

// DELETE /api/favorites - お気に入りから削除
export async function DELETE(request: Request) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { postId } = await request.json();

  if (!postId) {
    return NextResponse.json({ message: "postId is required" }, { status: 400 });
  }

  try {
    await db.favorite.delete({
      where: {
        userId_postId: {
          userId: user.id,
          postId,
        },
      },
    });

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    if (error.code === "P2025") { // Prismaのレコード未発見エラー
      return NextResponse.json({ message: "Favorite not found" }, { status: 404 });
    }
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

// GET /api/favorites - ユーザーのお気に入り投稿を取得
export async function GET(request: Request) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const favorites = await db.favorite.findMany({
      where: { userId: user.id },
      select: { postId: true },
    });

    const favoritePostIds = favorites.map(fav => fav.postId);
    return NextResponse.json({ favorites: favoritePostIds }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}