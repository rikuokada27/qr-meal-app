"use client"

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Icon } from "./icon";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation"; // 追加: useRouterのインポート

export default function UserAuthForm() {
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);

  // 追加: メール入力の状態
  const [email, setEmail] = useState<string>("");
  // 追加: メールサインインのローディング状態
  const [isEmailLoading, setIsEmailLoading] = useState<boolean>(false);
  // 追加: メールサインインのエラーメッセージ
  const [emailError, setEmailError] = useState<string | null>(null);
  // 追加: メールサインインの成功状態
  const [emailSuccess, setEmailSuccess] = useState<boolean>(false);

  const router = useRouter(); // 追加: useRouterの初期化

  // 追加: メールサインインのハンドラー
  const handleEmailSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsEmailLoading(true);
    setEmailError(null);
    setEmailSuccess(false);

    try {
      // 'email' プロバイダーを使用してサインインを試みる
      const res = await signIn("email", { email, redirect: false });
      if (res?.error) {
        setEmailError(res.error);
      } else {
        setEmailSuccess(true);
        // 追加（オプション）: 成功後に別ページへリダイレクト
        // router.push("/check-email");
      }
    } catch (error) {
      console.error("Email sign-in error:", error);
      setEmailError("メールサインインに失敗しました。");
    } finally {
      setIsEmailLoading(false);
    }
  };

  return (
    <div className="grid gap-6">
      {/* 追加: メールサインインフォーム */}
      <form onSubmit={handleEmailSignIn} className="grid gap-2"> {/* 変更: onSubmit ハンドラーの追加 */}
        <div className="grid gap-1">
          <Label htmlFor="email">メールアドレス</Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            value={email} // 追加: 値のバインディング
            onChange={(e) => setEmail(e.target.value)} // 追加: 入力のハンドリング
            required // 追加: 必須入力
          />
        </div>
        {/* 追加: エラーメッセージの表示 */}
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        {/* 追加: 成功メッセージの表示 */}
        {emailSuccess && (
          <p className="text-green-500 text-sm">
            メールを確認してください。ログインリンクが送信されました。
          </p>
        )}
        {/* 変更: ボタンのローディング状態と無効化 */}
        <button
          type="submit"
          className={cn(buttonVariants(), isEmailLoading && "opacity-50 cursor-not-allowed")} // 変更: ローディング状態のクラス追加
          disabled={isEmailLoading} // 追加: ローディング中はボタンを無効化
        >
          {isEmailLoading ? (
            <Icon.spinner className="mr-2 animate-spin" /> // 追加: ローディングスピナー
          ) : (
            "メールアドレスでログイン"
          )}
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"/>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground px-2 bg-background">または</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          className={cn(buttonVariants({ variant: "outline" }))}
          onClick={() => {
            setIsGithubLoading(true);
            signIn("github");
          }}
          disabled={isGithubLoading} // 追加: ローディング中はボタンを無効化
        >
          {isGithubLoading ? <Icon.spinner className="mr-2 animate-spin" /> : <Icon.github className="mr-2" />}
          Github
        </button>

        <button
          className={cn(buttonVariants({ variant: "outline" }))}
          onClick={() => {
            setIsGoogleLoading(true);
            signIn("google");
          }}
          disabled={isGoogleLoading} // 追加: ローディング中はボタンを無効化
        >
          {isGoogleLoading ? <Icon.spinner className="mr-2 animate-spin" /> : <Icon.google className="mr-2" />}
          Google
        </button>
      </div>
    </div>
  )
}