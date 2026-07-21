import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-shell">
      <div className="admin-topbar">
        <Link href="/admin" className="logo">
          TSP <span>ADMIN</span>
        </Link>
        <div className="admin-topbar-actions">
          <Link href="/" target="_blank">
            Ver site
          </Link>
          <LogoutButton />
        </div>
      </div>
      {children}
    </div>
  );
}
