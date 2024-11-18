import { getServerSession } from "next-auth/next"; // App Router 用に修正
import { authOptions } from "@/lib/auth"; // authOptions を正しくインポート

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user || null;
}