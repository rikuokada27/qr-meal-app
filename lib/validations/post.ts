import { z } from "zod";
import { prefectures } from "@/lib/prefectures";

export const postPatchSchema = z.object({
  title: z
    .string()
    .min(1)
    .max(128, { message: "記事のタイトルは128文字以内で入力してください。" }),
    address: z.string().min(1, { message: "住所は必須です。" }).refine((address) => {
      // 住所に少なくとも一つの都道府県が含まれているかを確認
      return prefectures.some((prefecture) => address.includes(prefecture));
    }, { message: "住所には都道府県を含めてください。" }),
  genre: z.enum(["CHINESE", "JAPANESE", "WESTERN", "ITALIAN", "FRENCH", "SEAFOOD", "BBQ", "SUSHI", "OTHER"], {
    required_error: "ジャンルを選択してください。",
  }),
});

export type postPatchSchemaType = z.infer<typeof postPatchSchema>;