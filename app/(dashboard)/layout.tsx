import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="min-h-svh bg-neutral-100">
      <div className="p-4 sm:p-6 md:p-8">{children}</div>
    </main>
  );
}
