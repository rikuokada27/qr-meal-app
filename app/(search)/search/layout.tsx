import Providers from "@/components/providers"; // 作成した Providers コンポーネントをインポート
import DashboardNav from "@/components/dashboard-nav";
import MainNav from "@/components/main-nav"
import { dashboardConfig } from "@/config/dashboard";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <div className="flex min-h-screen flex-col">
        {/* ヘッダー */}
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="container py-4 h-16">
            <MainNav items={dashboardConfig.mainNav} />
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="flex-1 container mb-16">
          {children}
        </main>

        {/* サイドバーを固定表示 */}
        <aside className="fixed bottom-0 w-full bg-background border-t h-16">
          <div className="container py-4 flex items-center justify-center">
            <DashboardNav items={dashboardConfig.sidebarNav} />
          </div>
        </aside>
      </div>
    </Providers>
  );
}