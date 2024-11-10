"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // signOut の呼び出し
    signOut({ redirect: false }).then(() => {
      // ログアウト後にリダイレクト
      router.push("/");
    });
  }, [router]);

  return (
    <div className="container flex flex-col justify-center h-screen items-center w-screen">
      <p className="text-lg">ログアウト中...</p>
    </div>
  );
}