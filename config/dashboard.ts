import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    
  ],
  sidebarNav: [
    {
      title: "ホーム",
      href: "/",
      icon: "home",
    },
    {
      title: "検索",
      href: "/dashboard",
      icon: "search",
    },
    {
      title: "マイページ",
      href: "/dashboard",
      icon: "mypage",
    },
    {
      title: "投稿",
      href: "/dashboard",
      icon: "post",
    }
  ]
}