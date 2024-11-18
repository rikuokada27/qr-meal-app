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
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[50rem] pt-6">
            このアプリケーションは「QRコードで注文できる」居酒屋を検索できるサービスです。
            ユーザーは自由にお店を投稿・共有することができます。
          </p>
          <div className="space-x-4 pt-6">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6">
        <div className="text-center space-y-4 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7 pt-6 pb-6">
            「QRコード居酒屋」を利用することで下記のような機能を利用できます。
          </p>
        </div>

        <div className="mx-auto grid sm:grid-cols-2 gap-4 max-w-[64rem]">
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 100 100"><path id="gisSearchMap0" fill="currentColor" fill-opacity="1" fill-rule="nonzero" stroke="none" stroke-dasharray="none" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke-opacity="1" stroke-width="8.268" d="M36.277 13.297c-6.698 0-12.185 5.471-12.185 12.15c0 2.588.825 4.994 2.224 6.971l8.473 11.494c1.187 1.55 1.978 1.256 2.965-.082l9.348-12.75a6.87 6.87 0 0 0 .464-1.074c.577-1.41.897-2.95.897-4.559c0-6.679-5.487-12.15-12.186-12.15zm0 5.693c3.607 0 6.477 2.86 6.477 6.457s-2.87 6.46-6.477 6.46s-6.476-2.863-6.476-6.46c0-3.596 2.87-6.457 6.476-6.457z" color="currentColor" color-interpolation="sRGB" color-rendering="auto" display="inline" vector-effect="none" visibility="visible"/><path id="gisSearchMap1" fill="currentColor" fill-opacity="1" fill-rule="nonzero" stroke="none" stroke-dasharray="none" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke-opacity="1" stroke-width="8.268" d="M37.18.178c-9.53 0-19.061 3.623-26.309 10.87c-14.495 14.496-14.495 38.123 0 52.618C24.44 77.234 45.97 78.032 60.557 66.193l3.576 3.577a3.956 5.958 45 0 0 .646 3.613L90.73 99.334a3.956 5.958 45 0 0 7.01-1.416a3.956 5.958 45 0 0 1.416-7.01l-25.95-25.951a3.956 5.958 45 0 0-3.616-.646l-3.576-3.577c11.839-14.587 11.043-36.117-2.526-49.685C56.241 3.8 46.71.178 37.18.178zm0 8.217c7.397 0 14.795 2.834 20.463 8.501a28.875 28.875 0 0 1 0 40.924a28.875 28.875 0 0 1-40.924 0a28.875 28.875 0 0 1 0-40.924c5.667-5.667 13.064-8.501 20.46-8.501z" color="currentColor" color-interpolation="sRGB" color-rendering="auto" display="inline" vector-effect="none" visibility="visible"/><path id="gisSearchMap2" fill="currentColor" fill-opacity="1" fill-rule="nonzero" stroke="none" stroke-dasharray="none" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke-opacity="1" stroke-width="8.268" d="M29.727 52.003L19.439 55.38a25.527 25.527 0 0 0 16.102 7.119z" color="currentColor" color-interpolation="sRGB" color-rendering="auto" display="inline" vector-effect="none" visibility="visible"/><path id="gisSearchMap3" fill="currentColor" fill-opacity="1" fill-rule="nonzero" stroke="none" stroke-dasharray="none" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke-opacity="1" stroke-width="8.268" d="m62.492 41.253l-25.476 8.36l6.705 12.1a25.637 25.637 0 0 0 9.828-5.054a25.543 25.543 0 0 0 8.943-15.406z" color="currentColor" color-interpolation="sRGB" color-rendering="auto" display="inline" vector-effect="none" visibility="visible"/><path id="gisSearchMap4" fill="currentColor" fill-opacity="1" fill-rule="nonzero" stroke="none" stroke-dasharray="none" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke-opacity="1" stroke-width="8.268" d="M11.674 34.38a25.53 25.53 0 0 0 2.94 14.65l9.52-3.123z" color="currentColor" color-interpolation="sRGB" color-rendering="auto" display="inline" vector-effect="none" visibility="visible"/><path id="gisSearchMap5" fill="currentColor" fill-opacity="1" fill-rule="nonzero" stroke="none" stroke-dasharray="none" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke-opacity="1" stroke-width="8.268" d="m60.002 25.146l-5.303 10.732l7.916-2.596a25.486 25.486 0 0 0-2.613-8.136z" color="currentColor" color-interpolation="sRGB" color-rendering="auto" display="inline" vector-effect="none" visibility="visible"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">お店を検索</h3>
                <p className="text-sm text-muted-foreground">
                ページ下部の「検索」ボタンから、お店を検索してみましょう。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M8 3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.75 4.5a.75.75 0 0 1 .75.75V10h1.75a.75.75 0 0 1 0 1.5H11.5v1.75a.75.75 0 0 1-1.5 0V11.5H8.25a.75.75 0 0 1 0-1.5H10V8.25a.75.75 0 0 1 .75-.75M5 7c1.493 0 2.834.655 3.75 1.693v.057h-.5a2 2 0 0 0-.97 3.75H.5A.5.5 0 0 1 0 12a5 5 0 0 1 5-5" clip-rule="evenodd"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">ユーザー登録</h3>
                <p className="text-sm text-muted-foreground">
                  ユーザー登録して投稿・お気に入り機能を利用しよう。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h8q.425 0 .713.288T14 4q0 .425-.288.713T13 5H5v14h14v-8q0-.425.288-.713T20 10q.425 0 .713.288T21 11v8q0 .825-.588 1.413T19 21H5Zm4-4q-.425 0-.713-.288T8 16q0-.425.288-.713T9 15h6q.425 0 .713.288T16 16q0 .425-.288.713T15 17H9Zm0-3q-.425 0-.713-.288T8 13q0-.425.288-.713T9 12h6q.425 0 .713.288T16 13q0 .425-.288.713T15 14H9Zm0-3q-.425 0-.713-.288T8 10q0-.425.288-.713T9 9h6q.425 0 .713.288T16 10q0 .425-.288.713T15 11H9Zm9-2q-.425 0-.713-.288T17 8V7h-1q-.425 0-.713-.288T15 6q0-.425.288-.713T16 5h1V4q0-.425.288-.713T18 3q.425 0 .713.288T19 4v1h1q.425 0 .713.288T21 6q0 .425-.288.713T20 7h-1v1q0 .425-.288.713T18 9Z"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">お店を投稿</h3>
                <p className="text-sm text-muted-foreground">
                ページ下部の「投稿」ボタンから、お店を投稿してみましょう。
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 1025 1024"><path fill="currentColor" d="M896.678 896v128h-96l-128-64l-128 64h-96V896h-320q-53 0-90.5-37.5T.678 768V256q0-26 19-45t45-19h960v576q0 53-37.5 90.5t-90.5 37.5zm-147-276l-77-172l-77 172l-179 24l132 130l-34 186l158-92l158 92l-34-186l132-130zm-159-512q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84h-480zm-544-64q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84h-480z"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">お気に入り登録</h3>
                <p className="text-sm text-muted-foreground">
                  ☆ボタンを押して、好きなお店を「お気に入り登録」しよう。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            お問い合わせ
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7 pt-6">
            もしもwebサービスが気に入った場合は下記QiitaからDMでご連絡ください。
            <br />
            お仕事のご連絡をお待ちしております。
          </p>
          <Link
            href={siteConfig.links.qiita}
            className="underline underline-offset-4 pt-4"
            target="blank"
            rel="noreferrer"
          >
            お仕事はQiitaまで
          </Link>
        </div>
      </section>
    </>
  )
}