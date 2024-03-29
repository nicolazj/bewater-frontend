import { Sidebar } from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100vh] grid grid-cols-[280px,_1fr] gap-4">
      <Sidebar />
      <div className="overflow-y-auto">{children}</div>
    </div>
  );
}
