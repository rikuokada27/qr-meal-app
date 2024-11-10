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
      <Link href="/" className="flex justify-center space-x-2">
        <Icons.qr className="h-7 w-7 mb-1" />
        <span className="font-bold sm:inline-block">QRコード 居酒屋</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><path fill="#45413c" d="M2.96 45.5a9.5 1.5 0 1 0 19 0a9.5 1.5 0 1 0-19 0Zm25.5.02a9 1.42 0 1 0 18 0a9 1.42 0 1 0-18 0Z" opacity=".15"/><path fill="#fff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M40.16 5.92a1.01 1.01 0 1 0 2.02 0a1.01 1.01 0 1 0-2.02 0Zm-37.75 6.2a.88.88 0 1 0 1.76 0a.88.88 0 1 0-1.76 0Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M8.38 2.9v-.53m1.12.99l.38-.37m.09 1.5h.53m-1 1.12l.38.38m-1.5.09v.53m-1.13-1l-.37.38m-.09-1.5h-.54m1-1.13l-.37-.37m26.11.71V2.28m-.71.71h1.42"/><path fill="#fff" stroke="#45413c" stroke-linejoin="round" d="M21.23 3.55a.26.26 0 0 1 .21.08a.29.29 0 0 1 .07.22L21 7.19a.26.26 0 0 1-.23.21a.25.25 0 0 1-.26-.17L19.4 4.08a.25.25 0 0 1 0-.22a.28.28 0 0 1 .19-.12ZM27 5a.28.28 0 0 1 .12.18a.27.27 0 0 1-.08.22l-2.48 2.29a.25.25 0 0 1-.31 0a.26.26 0 0 1-.11-.3l1-3.17a.26.26 0 0 1 .15-.16a.24.24 0 0 1 .22 0Zm-12.26.75a.25.25 0 0 0 0 .4l2.44 2.34a.26.26 0 0 0 .42-.26l-1-3.17a.22.22 0 0 0-.15-.16a.25.25 0 0 0-.22 0ZM11 10.33a.25.25 0 0 0 .21.34l3.36.39a.25.25 0 0 0 .27-.16a.25.25 0 0 0-.1-.3L12 8.7a.25.25 0 0 0-.37.11Z"/><path fill="#e5feff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="m8.1 23.86l-.6 2.44l-2.17-.53a1.12 1.12 0 0 0-1.33.82l-.79 3.23A2.25 2.25 0 0 0 4 32.16l1.73 1.26l-.73 3l-2.71-2.07a4.47 4.47 0 0 1-1.66-4.64l1.1-4.53a2.79 2.79 0 0 1 3.38-2.05Z"/><path fill="#ffe500" d="M19.49 41.88a2.87 2.87 0 0 1-.49-2.43l3.57-14.66l-13.88-3.38l-3.57 14.67A2.85 2.85 0 0 1 3.54 38Z"/><path fill="#fff48c" d="m11.66 40l4.1-16.84l6.79 1.66L19 39.45a2.86 2.86 0 0 0 .51 2.43Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M19.49 41.88a2.87 2.87 0 0 1-.49-2.43l3.57-14.66l-13.88-3.38l-3.57 14.67A2.85 2.85 0 0 1 3.54 38Z"/><path fill="#ebcb00" d="M17.77 30.24a.84.84 0 1 0 1-.61a.83.83 0 0 0-1 .61Zm-8.71-4.42a.55.55 0 0 0 .41.67a.56.56 0 0 0 .68-.41a.56.56 0 0 0-1.09-.26Z"/><path fill="#45413c" d="M22.15 26.44h-.3A2.2 2.2 0 0 1 21 26l-.47 1.94a.75.75 0 0 1-.9.55a.75.75 0 0 1-.55-.9l.46-1.88a2.76 2.76 0 0 1-.9-.07a2.69 2.69 0 0 1-.56-.21L17.25 29a1.34 1.34 0 0 1-2.61-.63l.85-3.47a3.86 3.86 0 0 1-1.88-1.09a2.93 2.93 0 0 1-3.48-.85a2.08 2.08 0 0 1-1.59.24l-.25-.08l.4-1.66l13.86 3.38Z" opacity=".15"/><path fill="#fff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M7.26 19.62a2.08 2.08 0 0 1 2.52-1.53a2.26 2.26 0 0 1 .49.19a3 3 0 0 1 3.11-1.15a2.38 2.38 0 0 1 .55.19a3.86 3.86 0 0 1 6.38 1.5h0a3 3 0 0 1 2.24 2.46a2.35 2.35 0 0 1 .52 0a2.08 2.08 0 1 1-1 4.05a2.11 2.11 0 0 1-.82-.41l-.47 1.93a.75.75 0 0 1-.9.55a.75.75 0 0 1-.55-.9l.46-1.88a2.83 2.83 0 0 1-1.46-.27l-.87 3.53a1.34 1.34 0 1 1-2.6-.63l.85-3.47a3.79 3.79 0 0 1-1.88-1.09a3 3 0 0 1-1.89.17a2.92 2.92 0 0 1-1.59-1a2.13 2.13 0 0 1-1.59.25a2.09 2.09 0 0 1-1.5-2.49Z"/><path fill="#ebcb00" d="M8.29 33.69a.84.84 0 1 0 1-.62a.85.85 0 0 0-1 .62Zm6.4 3.31a.55.55 0 0 0 .41.67a.55.55 0 0 0 .67-.41a.56.56 0 1 0-1.08-.26Zm3.46-3.59a.55.55 0 0 0 .41.67a.55.55 0 0 0 .67-.41a.56.56 0 1 0-1.08-.26ZM11.45 29a.56.56 0 1 0 .68-.41a.57.57 0 0 0-.68.41Z"/><path fill="#fff" stroke="#45413c" d="M13.83 32.74a1.11 1.11 0 1 0 2.16.53a7.09 7.09 0 0 0-.4-2.3a.2.2 0 0 0-.15-.14a.19.19 0 0 0-.2.06a7.22 7.22 0 0 0-1.41 1.85Z"/><path fill="#e5feff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M2.06 38.93A1.25 1.25 0 0 0 3 40.44l15.94 3.88a1.26 1.26 0 0 0 .6-2.44L3.55 38a1.25 1.25 0 0 0-1.49.93Zm37.5-24.34l.72 2.41l2.14-.64a1.11 1.11 0 0 1 1.39.75l.95 3.19a2.23 2.23 0 0 1-.76 2.37L42.37 24l.87 3l2.65-2.2a4.47 4.47 0 0 0 1.42-4.71L46 15.59a2.8 2.8 0 0 0-3.48-1.88Z"/><path fill="#ffe500" d="M29.09 33.15a2.9 2.9 0 0 0 .39-2.44l-4.31-14.47l13.67-4.07l4.31 14.47a2.83 2.83 0 0 0 1.67 1.84Z"/><path fill="#fff48c" d="m36.81 30.86l-4.94-16.61l-6.7 2l4.31 14.47a2.89 2.89 0 0 1-.4 2.45Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M29.09 33.15a2.9 2.9 0 0 0 .39-2.44l-4.31-14.47l13.67-4.07l4.31 14.47a2.83 2.83 0 0 0 1.67 1.84Z"/><path fill="#ebcb00" d="M30.22 21.45a.84.84 0 0 1-.56 1a.84.84 0 1 1-.48-1.61a.84.84 0 0 1 1.04.61Zm8.48-4.86a.56.56 0 0 1-.38.7a.55.55 0 0 1-.69-.38a.55.55 0 0 1 .37-.69a.56.56 0 0 1 .7.37Z"/><path fill="#45413c" d="m25.66 17.87l.29-.06a2.1 2.1 0 0 0 .8-.45l.57 1.91a.74.74 0 1 0 1.42-.43L28.19 17a2.78 2.78 0 0 0 .9-.11a2.48 2.48 0 0 0 .55-.24l1 3.49a1.34 1.34 0 1 0 2.57-.76l-1-3.43a3.9 3.9 0 0 0 1.82-1.18a2.91 2.91 0 0 0 3.43-1a2.15 2.15 0 0 0 1.6.17l.25-.11l-.49-1.63l-13.65 4.04Z" opacity=".15"/><path fill="#fff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M40.18 10.31a2.08 2.08 0 0 0-2.59-1.4a2.58 2.58 0 0 0-.48.21a3 3 0 0 0-3.17-1a2.27 2.27 0 0 0-.53.22a3.86 3.86 0 0 0-6.3 1.81h0A3 3 0 0 0 25 12.73a2.43 2.43 0 0 0-.52.08a2.09 2.09 0 0 0 1.19 4a2 2 0 0 0 .8-.46l.53 1.92a.74.74 0 1 0 1.42-.43L27.89 16a2.79 2.79 0 0 0 .9-.12a2.45 2.45 0 0 0 .55-.23l1 3.49a1.34 1.34 0 0 0 2.66-.78l-1-3.42a3.85 3.85 0 0 0 1.82-1.18a2.91 2.91 0 0 0 3.44-1a2 2 0 0 0 1.59.17a2.08 2.08 0 0 0 1.33-2.62Z"/><path fill="#ebcb00" d="M39.86 24.42a.84.84 0 1 1-1-.57a.84.84 0 0 1 1 .57ZM33.64 28a.56.56 0 0 1-1.08.32a.57.57 0 0 1 .38-.7a.56.56 0 0 1 .7.38ZM30 24.63a.56.56 0 1 1-.69-.38a.55.55 0 0 1 .69.38Zm6.47-4.75a.57.57 0 0 1-.38.7a.56.56 0 1 1 .38-.7Z"/><path fill="#fff" stroke="#45413c" d="M34.28 23.75a1.11 1.11 0 0 1-2.13.63a7.06 7.06 0 0 1 .28-2.31a.21.21 0 0 1 .14-.15a.2.2 0 0 1 .21 0a7.2 7.2 0 0 1 1.5 1.83Z"/><path fill="#e5feff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M46.34 29.33a1.24 1.24 0 0 1-.81 1.56L29.8 35.57a1.26 1.26 0 0 1-.71-2.41l15.72-4.68a1.23 1.23 0 0 1 1.53.85Z"/></svg>
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