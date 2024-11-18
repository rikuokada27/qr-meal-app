import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/session"; // パスを調整
import { db } from "@/lib/db"; // Prismaクライアントのインポート

export async function GET() {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const favorites = await db.favorite.findMany({
      where: { userId: user.id },
      include: {
        post: {
          select: {
            id: true,
            title: true,
            genre: true,
            address: true,
            published: true,
            createdAt: true,
          },
        },
      },
    });

    if (!favorites || favorites.length === 0) {
      return NextResponse.json({ favorites: [] }, { status: 200 });
    }

    const formattedFavorites = favorites.map((favorite) => ({
      id: favorite.post.id,
      title: favorite.post.title,
      genre: favorite.post.genre,
      address: favorite.post.address,
      published: favorite.post.published,
      createdAt: favorite.post.createdAt,
    }));

    return NextResponse.json({ favorites: formattedFavorites }, { status: 200 });
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}