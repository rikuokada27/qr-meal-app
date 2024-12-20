import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { Genre } from "@prisma/client"; // Prisma の Genre 型をインポート

// Genreの型をデータベースに一致させます
const postCreateSchema = z.object({
  title: z.string(),
  address: z.string().optional(),
  genre: z.enum(["中華", "日本食", "洋食", "イタリアン", "フレンチ", "海鮮", "焼肉", "寿司", "その他"]).optional(),
});

// 日本語のジャンルをPrismaのGenre enumにマッピング
const genreMapping: Record<string, Genre> = {
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

export async function GET(req: NextRequest) {
  try {
    // 認証が必要な場合は以下を有効にしてください
    /*
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json("Unauthorized", { status: 403 });
    }
    */

    const { searchParams } = new URL(req.url);
    const genre = searchParams.get("genre") as Genre | null;
    const order = searchParams.get("order") === "asc" ? "asc" : "desc";
    const prefecture = searchParams.get("prefecture") as string | null;

    // 投稿の取得
    const posts = await db.post.findMany({
      where: {
        ...(genre ? { genre } : {}),
        ...(prefecture ? { address: { contains: prefecture } } : {}), // 住所に都道府県が含まれるかをフィルタ
      },
      orderBy: {
        createdAt: order,
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json("Unauthorized", { status: 403 });
    }

    const { user } = session;

    const json = await req.json();
    const body = postCreateSchema.parse(json);
    const { title, address, genre } = body;

    // genreの値を英語のenumに変換
    const mappedGenre = genre ? genreMapping[genre] : null;

    const post = await db.post.create({
      data: {
        title,
        address,
        genre: mappedGenre, // mappedGenreはGenre型にキャスト済み
        authorId: user.id,
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json(post);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(err.issues, { status: 422 });
    }

    return NextResponse.json(null, { status: 500 });
  }
}