"use client";

// import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { currentUser, isClient, isBarber, logout } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      router.push("/Login");
    }
  }, [currentUser, router]);

  return (
    <div className="flex h-screen">
      {/* Mobile Menu Toggle */}
      <button className="md:hidden p-4" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`absolute md:relative md:block w-60 bg-gray-900 text-white p-6 transition-all ${menuOpen ? "block" : "hidden md:block"}`}>
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li><Link href="/dashboard" className="block py-2 hover:bg-gray-700">Home</Link></li>

          {/* Show links based on role */}
          {isClient && (
            <>
              <li><Link href="/dashboard/client/appointments" className="block py-2 hover:bg-gray-700">My Appointments</Link></li>
              <li><Link href="/dashboard/client/services" className="block py-2 hover:bg-gray-700">Services</Link></li>
              <li><Link href="/dashboard/client/reviews" className="block py-2 hover:bg-gray-700">My Reviews</Link></li>
              <li><Link href="/dashboard/client/profile" className="block py-2 hover:bg-gray-700">Profile</Link></li>
            </>
          )}

          {isBarber && (
            <>
              <li><Link href="/dashboard/barber/appointments" className="block py-2 hover:bg-gray-700">Manage Appointments</Link></li>
              <li><Link href="/dashboard/barber/schedule" className="block py-2 hover:bg-gray-700">My Schedule</Link></li>
              <li><Link href="/dashboard/barber/reviews" className="block py-2 hover:bg-gray-700">Client Reviews</Link></li>
              <li><Link href="/dashboard/barber/profile" className="block py-2 hover:bg-gray-700">Profile</Link></li>
            </>
          )}
        </ul>
        <button className="mt-6 bg-red-500 px-4 py-2 rounded-lg w-full" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
