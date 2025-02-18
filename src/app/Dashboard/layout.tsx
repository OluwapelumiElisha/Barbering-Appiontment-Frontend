"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import {
  FiGrid, FiBook, FiMessageCircle, FiDollarSign, FiSettings, FiUser, FiMenu, FiX
} from "react-icons/fi";
import Image from "next/image";

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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed md:relative w-64 bg-gray-900 text-white transition-all duration-300 ${menuOpen ? "left-0" : "-left-64"} md:left-0 z-50 h-full flex flex-col`}>
        {/* Sidebar Header with Toggle Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <h2 className="text-xl font-bold ml-8">Byway</h2>
          {/* <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button> */}
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex-1">
          <ul>
            <li>
              <Link href="/Dashboard" className="flex items-center px-6 py-3 hover:bg-gray-700">
                <FiGrid className="mr-3" /> Dashboard
              </Link>
            </li>
            <li>
              <Link href="/Dashboard/Courses" className="flex items-center px-6 py-3 text-blue-400 hover:bg-gray-700">
                <FiBook className="mr-3" /> Courses
              </Link>
            </li>
            <li>
              <Link href="/Dashboard/Communication" className="flex items-center px-6 py-3 hover:bg-gray-700">
                <FiMessageCircle className="mr-3" /> Communication
              </Link>
            </li>
            <li>
              <Link href="/Dashboard/Revenue" className="flex items-center px-6 py-3 hover:bg-gray-700">
                <FiDollarSign className="mr-3" /> Revenue
              </Link>
            </li>
            <li>
              <Link href="/Dashboard/Setting" className="flex items-center px-6 py-3 hover:bg-gray-700">
                <FiSettings className="mr-3" /> Setting
              </Link>
            </li>
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="px-6 py-4 border-t border-gray-700 flex items-center">
          <Image
            src={currentUser?.profilePic || "/default-profile-pic.jpg"}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-700"
            width={100}
            height={100}
          />
          <span className="ml-3">Hi, {currentUser?.name || "John"}</span>
        </div>
      </aside>

      {/* Mobile Menu Button (One Icon for Open/Close) */}
      <button className="md:hidden fixed top-3.5 left-2 z-50 bg-gray-900 text-white p-2 rounded-full" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
