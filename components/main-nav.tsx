"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import { ReactNode, useState } from "react";
// import MobileNav from "./mobile-nav";
import { Icon as Icons } from "./icon"; // アイコンをインポート
import { useSession, signIn, signOut } from "next-auth/react"; // セッション管理用
import { cn } from "@/lib/utils"; // クラス名結合ユーティリティ（必要に応じて）

interface MainNavProps {
  items: NavItem[];
  children?: ReactNode;
}

export default function MainNav({ items }: MainNavProps) {
  // const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center justify-between md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold sm:inline-block">QR Meal</span>
      </Link>
      <nav className="flex gap-6">
        {items?.map((item) => {
          const Icon = item.icon ? Icons[item.icon] : null;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center text-xs font-medium hover:text-foreground/80"
            >
              {Icon && <Icon className="h-6 w-6 mb-1" />} {/* アイコンを表示 */}
              <span>{item.title}</span>
            </Link>
          );
        })}
        {/* 認証状態に応じて「ログイン」または「ログアウト」を表示 */}
        {status === "loading" ? null : session ? (
          <button
            onClick={() => signOut()}
            className={cn(
              "flex flex-col items-center text-xs font-medium hover:text-foreground/80",
              "focus:outline-none"
            )}
          >
            <Icons.logout className="h-6 w-6 mb-1" />
            <span>ログアウト</span>
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className={cn(
              "flex flex-col items-center text-xs font-medium hover:text-foreground/80",
              "focus:outline-none"
            )}
          >
            <Icons.login className="h-6 w-6 mb-1" />
            <span>ログイン</span>
          </button>
        )}
      </nav>
      {/* モバイルメニューのボタン（必要に応じてコメントを外す） */}
      {/* 
      <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <span>
          メニュー
        </span>
      </button>
      {showMobileMenu && <MobileNav items={items} />} 
      */}
    </div>
  );
}