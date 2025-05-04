import { Sidebar } from '@/components/layout/sidebar';
import { Player } from '@/components/layout/player';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-black">
      <div className="flex h-[calc(100%-80px)]">
        <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50 bg-black">
          <Sidebar />
        </div>
        <main className="md:pl-60 w-full h-full overflow-auto">
          {children}
        </main>
      </div>
      <div className="fixed bottom-0 w-full h-20 z-50">
        <Player />
      </div>
    </div>
  );
}