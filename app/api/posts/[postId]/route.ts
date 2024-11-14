import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { postPatchSchema } from "@/lib/validations/post";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Genre } from "@prisma/client"; // PrismaのGenre enumをインポート

const routeContextSchema = z.object({
  params: z.object({
    postId: z.string(),
  }),
});

export async function PATCH(
  req: NextRequest,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    console.log("Incoming Request"); // ここでリクエストの確認
    const { params } = routeContextSchema.parse(context);

    if (!(await verifyCurrentUserHasAccessToPost(params.postId))) {
      return NextResponse.json(null, { status: 403 });
    }

    const json = await req.json();
    const body = postPatchSchema.parse(json);

    console.log("Request Body:", body); // 送信されたデータを確認

    // クライアントから送信された genre をそのまま使用
    const genre = body.genre as Genre | null; // PrismaのGenre型にキャスト

    const updatedPost = await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title: body.title,
        address: body.address,
        genre: genre, // genre をそのまま使用
      },
    });

    console.log("Updated Post:", updatedPost); // 更新後のデータを確認
    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    console.error("Error in PATCH:", error); // エラー内容をログに出力
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.issues, { status: 422 });
    } else {
      return NextResponse.json(null, { status: 500 });
    }
  }
}

export async function DELETE(
  req: NextRequest,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const { params } = routeContextSchema.parse(context);

    if (!(await verifyCurrentUserHasAccessToPost(params.postId))) {
      return NextResponse.json(null, { status: 403 });
    }

    await db.post.delete({
      where: {
        id: params.postId,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.issues, { status: 422 });
    } else {
      return NextResponse.json(null, { status: 500 });
    }
  }
}

async function verifyCurrentUserHasAccessToPost(postId: string) {
  const session = await getServerSession(authOptions);
  const count = await db.post.count({
    where: {
      id: postId,
      authorId: session?.user.id,
    },
  });

  return count > 0;
}