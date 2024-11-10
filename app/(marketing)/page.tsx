import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 48 48"><path fill="#45413c" d="M2.96 45.5a9.5 1.5 0 1 0 19 0a9.5 1.5 0 1 0-19 0Zm25.5.02a9 1.42 0 1 0 18 0a9 1.42 0 1 0-18 0Z" opacity=".15"/><path fill="#fff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M40.16 5.92a1.01 1.01 0 1 0 2.02 0a1.01 1.01 0 1 0-2.02 0Zm-37.75 6.2a.88.88 0 1 0 1.76 0a.88.88 0 1 0-1.76 0Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M8.38 2.9v-.53m1.12.99l.38-.37m.09 1.5h.53m-1 1.12l.38.38m-1.5.09v.53m-1.13-1l-.37.38m-.09-1.5h-.54m1-1.13l-.37-.37m26.11.71V2.28m-.71.71h1.42"/><path fill="#fff" stroke="#45413c" stroke-linejoin="round" d="M21.23 3.55a.26.26 0 0 1 .21.08a.29.29 0 0 1 .07.22L21 7.19a.26.26 0 0 1-.23.21a.25.25 0 0 1-.26-.17L19.4 4.08a.25.25 0 0 1 0-.22a.28.28 0 0 1 .19-.12ZM27 5a.28.28 0 0 1 .12.18a.27.27 0 0 1-.08.22l-2.48 2.29a.25.25 0 0 1-.31 0a.26.26 0 0 1-.11-.3l1-3.17a.26.26 0 0 1 .15-.16a.24.24 0 0 1 .22 0Zm-12.26.75a.25.25 0 0 0 0 .4l2.44 2.34a.26.26 0 0 0 .42-.26l-1-3.17a.22.22 0 0 0-.15-.16a.25.25 0 0 0-.22 0ZM11 10.33a.25.25 0 0 0 .21.34l3.36.39a.25.25 0 0 0 .27-.16a.25.25 0 0 0-.1-.3L12 8.7a.25.25 0 0 0-.37.11Z"/><path fill="#e5feff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="m8.1 23.86l-.6 2.44l-2.17-.53a1.12 1.12 0 0 0-1.33.82l-.79 3.23A2.25 2.25 0 0 0 4 32.16l1.73 1.26l-.73 3l-2.71-2.07a4.47 4.47 0 0 1-1.66-4.64l1.1-4.53a2.79 2.79 0 0 1 3.38-2.05Z"/><path fill="#ffe500" d="M19.49 41.88a2.87 2.87 0 0 1-.49-2.43l3.57-14.66l-13.88-3.38l-3.57 14.67A2.85 2.85 0 0 1 3.54 38Z"/><path fill="#fff48c" d="m11.66 40l4.1-16.84l6.79 1.66L19 39.45a2.86 2.86 0 0 0 .51 2.43Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M19.49 41.88a2.87 2.87 0 0 1-.49-2.43l3.57-14.66l-13.88-3.38l-3.57 14.67A2.85 2.85 0 0 1 3.54 38Z"/><path fill="#ebcb00" d="M17.77 30.24a.84.84 0 1 0 1-.61a.83.83 0 0 0-1 .61Zm-8.71-4.42a.55.55 0 0 0 .41.67a.56.56 0 0 0 .68-.41a.56.56 0 0 0-1.09-.26Z"/><path fill="#45413c" d="M22.15 26.44h-.3A2.2 2.2 0 0 1 21 26l-.47 1.94a.75.75 0 0 1-.9.55a.75.75 0 0 1-.55-.9l.46-1.88a2.76 2.76 0 0 1-.9-.07a2.69 2.69 0 0 1-.56-.21L17.25 29a1.34 1.34 0 0 1-2.61-.63l.85-3.47a3.86 3.86 0 0 1-1.88-1.09a2.93 2.93 0 0 1-3.48-.85a2.08 2.08 0 0 1-1.59.24l-.25-.08l.4-1.66l13.86 3.38Z" opacity=".15"/><path fill="#fff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M7.26 19.62a2.08 2.08 0 0 1 2.52-1.53a2.26 2.26 0 0 1 .49.19a3 3 0 0 1 3.11-1.15a2.38 2.38 0 0 1 .55.19a3.86 3.86 0 0 1 6.38 1.5h0a3 3 0 0 1 2.24 2.46a2.35 2.35 0 0 1 .52 0a2.08 2.08 0 1 1-1 4.05a2.11 2.11 0 0 1-.82-.41l-.47 1.93a.75.75 0 0 1-.9.55a.75.75 0 0 1-.55-.9l.46-1.88a2.83 2.83 0 0 1-1.46-.27l-.87 3.53a1.34 1.34 0 1 1-2.6-.63l.85-3.47a3.79 3.79 0 0 1-1.88-1.09a3 3 0 0 1-1.89.17a2.92 2.92 0 0 1-1.59-1a2.13 2.13 0 0 1-1.59.25a2.09 2.09 0 0 1-1.5-2.49Z"/><path fill="#ebcb00" d="M8.29 33.69a.84.84 0 1 0 1-.62a.85.85 0 0 0-1 .62Zm6.4 3.31a.55.55 0 0 0 .41.67a.55.55 0 0 0 .67-.41a.56.56 0 1 0-1.08-.26Zm3.46-3.59a.55.55 0 0 0 .41.67a.55.55 0 0 0 .67-.41a.56.56 0 1 0-1.08-.26ZM11.45 29a.56.56 0 1 0 .68-.41a.57.57 0 0 0-.68.41Z"/><path fill="#fff" stroke="#45413c" d="M13.83 32.74a1.11 1.11 0 1 0 2.16.53a7.09 7.09 0 0 0-.4-2.3a.2.2 0 0 0-.15-.14a.19.19 0 0 0-.2.06a7.22 7.22 0 0 0-1.41 1.85Z"/><path fill="#e5feff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M2.06 38.93A1.25 1.25 0 0 0 3 40.44l15.94 3.88a1.26 1.26 0 0 0 .6-2.44L3.55 38a1.25 1.25 0 0 0-1.49.93Zm37.5-24.34l.72 2.41l2.14-.64a1.11 1.11 0 0 1 1.39.75l.95 3.19a2.23 2.23 0 0 1-.76 2.37L42.37 24l.87 3l2.65-2.2a4.47 4.47 0 0 0 1.42-4.71L46 15.59a2.8 2.8 0 0 0-3.48-1.88Z"/><path fill="#ffe500" d="M29.09 33.15a2.9 2.9 0 0 0 .39-2.44l-4.31-14.47l13.67-4.07l4.31 14.47a2.83 2.83 0 0 0 1.67 1.84Z"/><path fill="#fff48c" d="m36.81 30.86l-4.94-16.61l-6.7 2l4.31 14.47a2.89 2.89 0 0 1-.4 2.45Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M29.09 33.15a2.9 2.9 0 0 0 .39-2.44l-4.31-14.47l13.67-4.07l4.31 14.47a2.83 2.83 0 0 0 1.67 1.84Z"/><path fill="#ebcb00" d="M30.22 21.45a.84.84 0 0 1-.56 1a.84.84 0 1 1-.48-1.61a.84.84 0 0 1 1.04.61Zm8.48-4.86a.56.56 0 0 1-.38.7a.55.55 0 0 1-.69-.38a.55.55 0 0 1 .37-.69a.56.56 0 0 1 .7.37Z"/><path fill="#45413c" d="m25.66 17.87l.29-.06a2.1 2.1 0 0 0 .8-.45l.57 1.91a.74.74 0 1 0 1.42-.43L28.19 17a2.78 2.78 0 0 0 .9-.11a2.48 2.48 0 0 0 .55-.24l1 3.49a1.34 1.34 0 1 0 2.57-.76l-1-3.43a3.9 3.9 0 0 0 1.82-1.18a2.91 2.91 0 0 0 3.43-1a2.15 2.15 0 0 0 1.6.17l.25-.11l-.49-1.63l-13.65 4.04Z" opacity=".15"/><path fill="#fff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M40.18 10.31a2.08 2.08 0 0 0-2.59-1.4a2.58 2.58 0 0 0-.48.21a3 3 0 0 0-3.17-1a2.27 2.27 0 0 0-.53.22a3.86 3.86 0 0 0-6.3 1.81h0A3 3 0 0 0 25 12.73a2.43 2.43 0 0 0-.52.08a2.09 2.09 0 0 0 1.19 4a2 2 0 0 0 .8-.46l.53 1.92a.74.74 0 1 0 1.42-.43L27.89 16a2.79 2.79 0 0 0 .9-.12a2.45 2.45 0 0 0 .55-.23l1 3.49a1.34 1.34 0 0 0 2.66-.78l-1-3.42a3.85 3.85 0 0 0 1.82-1.18a2.91 2.91 0 0 0 3.44-1a2 2 0 0 0 1.59.17a2.08 2.08 0 0 0 1.33-2.62Z"/><path fill="#ebcb00" d="M39.86 24.42a.84.84 0 1 1-1-.57a.84.84 0 0 1 1 .57ZM33.64 28a.56.56 0 0 1-1.08.32a.57.57 0 0 1 .38-.7a.56.56 0 0 1 .7.38ZM30 24.63a.56.56 0 1 1-.69-.38a.55.55 0 0 1 .69.38Zm6.47-4.75a.57.57 0 0 1-.38.7a.56.56 0 1 1 .38-.7Z"/><path fill="#fff" stroke="#45413c" d="M34.28 23.75a1.11 1.11 0 0 1-2.13.63a7.06 7.06 0 0 1 .28-2.31a.21.21 0 0 1 .14-.15a.2.2 0 0 1 .21 0a7.2 7.2 0 0 1 1.5 1.83Z"/><path fill="#e5feff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M46.34 29.33a1.24 1.24 0 0 1-.81 1.56L29.8 35.57a1.26 1.26 0 0 1-.71-2.41l15.72-4.68a1.23 1.23 0 0 1 1.53.85Z"/></svg>
            QRコード 居酒屋
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはNext.js AppRouterで作られたものです。
            ユーザーは自由に投稿をポストすることができます。
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6">
        <div className="text-center space-y-4 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトはモダンな技術スタックを使って作られたwebアプリケーションです。Next.jsAppRouterやcontentlayerを利用してマークダウン形式でブログ投稿ができます。
          </p>
        </div>

        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" width="45"
                height="45"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="45"
                height="45"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854S17.573 13.146 16 13.146zm-7.99 8.526l-.63-.156C2.692 20.328 0 18.318 0 15.995s2.693-4.333 7.38-5.521l.63-.156l.177.625a31.42 31.42 0 0 0 1.818 4.771l.135.281l-.135.286a31.047 31.047 0 0 0-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063a33.28 33.28 0 0 1 1.578-4.063a32.958 32.958 0 0 1-1.578-4.063zm16.901 9.74l-.177-.625a31.163 31.163 0 0 0-1.818-4.766l-.135-.286l.135-.286a31.047 31.047 0 0 0 1.818-4.771l.177-.62l.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677a32.524 32.524 0 0 1 1.578 4.063c3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063a33.663 33.663 0 0 1-1.578 4.063zM7.078 11.927l-.177-.625C5.583 6.656 5.984 3.323 8 2.161c1.979-1.141 5.151.208 8.479 3.625l.453.464l-.453.464a31.458 31.458 0 0 0-3.229 3.958l-.182.255l-.313.026a31.612 31.612 0 0 0-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229c-1.323.766-1.557 3.422-.646 7.005a33.343 33.343 0 0 1 4.313-.672a32.828 32.828 0 0 1 2.734-3.391c-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0c-1.901 0-4.344-1.427-6.875-4.031l-.453-.464l.453-.464a31.458 31.458 0 0 0 3.229-3.958l.177-.255l.313-.031a30.668 30.668 0 0 0 5.052-.813l.63-.156l.177.625c1.318 4.646.917 7.974-1.099 9.135a3.095 3.095 0 0 1-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229c1.323-.766 1.563-3.422.646-7.005a32.644 32.644 0 0 1-4.313.667a32.886 32.886 0 0 1-2.734 3.396zm7.99-13.802l-.63-.161a31.993 31.993 0 0 0-5.052-.813l-.313-.026l-.177-.255a31.458 31.458 0 0 0-3.229-3.958l-.453-.464l.453-.464c3.328-3.417 6.5-4.766 8.479-3.625c2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276a33.22 33.22 0 0 1 4.313.672c.917-3.583.677-6.24-.646-7.005c-1.318-.76-3.797.406-6.401 2.943a34.067 34.067 0 0 1 2.734 3.391zM9.609 30.234c-.563.01-1.12-.13-1.609-.411c-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625l.63.156c1.542.391 3.24.661 5.047.813l.313.031l.177.255a31.458 31.458 0 0 0 3.229 3.958l.453.464l-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005c1.318.75 3.792-.406 6.401-2.943a32.886 32.886 0 0 1-2.734-3.396a32.517 32.517 0 0 1-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026l-.182-.26a39.947 39.947 0 0 1-1.797-2.828a39.917 39.917 0 0 1-1.557-2.969l-.135-.286l.135-.286a40.498 40.498 0 0 1 3.354-5.797l.182-.26l.313-.026a39.962 39.962 0 0 1 6.708 0l.313.026l.182.26a40.077 40.077 0 0 1 3.354 5.797l.135.286l-.135.286a39.62 39.62 0 0 1-3.354 5.797l-.182.26l-.313.026a40.483 40.483 0 0 1-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0a39.03 39.03 0 0 0 2.927-5.063a37.53 37.53 0 0 0-2.932-5.063a37.881 37.881 0 0 0-5.854 0a37.302 37.302 0 0 0-2.932 5.063a38.624 38.624 0 0 0 2.932 5.063z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">React</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                width="45"
                height="45"
                viewBox="0 0 256 256"
              >
                <path
                  d="M256 128.044c-.024 70.657-57.299 127.932-127.956 127.956ZM128 0c51.977 0 96.719 30.98 116.765 75.483L75.483 244.765a127.791 127.791 0 0 1-20.636-11.715L159.897 128H128l-90.51 90.51C14.327 195.345 0 163.345 0 128C0 57.308 57.308 0 128 0Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">PlanetScale</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              width="45"
              height="45"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
              />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">TailwindCSS</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div><div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" width="45"
                height="45"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">OAuth</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" width="45"
                height="45"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Stripe</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto md:max-w-[58rem] text-center">
            <p className="text-muted-foreground sm:text-lg sm:leading-7">
              QR Mealはログインするとブログ投稿ができるようになります。
            </p>
          </div>
      </section>

      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            Contact Me
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            もしもwebサービスが気に入った場合は下記XからDMでご連絡ください。
            <br />
            お仕事のご連絡をお待ちしております。
          </p>
          <Link
            href={siteConfig.links.x}
            className="underline underline-offset-4"
            target="blank"
            rel="noreferrer"
          >
            お仕事はXまで
          </Link>
        </div>
      </section>
    </>
  )
}