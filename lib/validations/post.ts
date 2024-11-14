import { z } from "zod";

export const postPatchSchema = z.object({
  title: z
    .string()
    .min(1)
    .max(128, { message: "記事のタイトルは128文字以内で入力してください。" }),
  address: z.string().optional(),  // address の型を明示的に string に
  genre: z.enum(["CHINESE", "JAPANESE", "WESTERN", "ITALIAN", "FRENCH", "SEAFOOD", "BBQ", "SUSHI", "OTHER"], {
    required_error: "ジャンルを選択してください。",
  }),
});

export type postPatchSchemaType = z.infer<typeof postPatchSchema>;