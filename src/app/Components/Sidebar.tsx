"use client"
import { useState } from "react";
import { Home, Book, MessageCircle, DollarSign, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Dashboard", icon: <Home />, link: "/Dashboard" },
    { name: "Courses", icon: <Book />, link: "/Dashboard/Services" },
    { name: "Communication", icon: <MessageCircle />, link: "/dashboard/messages" },
    { name: "Revenue", icon: <DollarSign />, link: "/dashboard/revenue" },
    { name: "Settings", icon: <Settings />, link: "/dashboard/settings" },
  ];

  return (
    <aside className={`h-screen ${open ? "w-60" : "w-20"} bg-gray-900 text-white transition-all`}>
      <div className="flex items-center justify-between p-4">
        <h2 className={`${open ? "block" : "hidden"} text-xl font-bold`}>Byway</h2>
        <button onClick={() => setOpen(!open)}>☰</button>
      </div>
      <ul className="mt-4">
        {menus.map((menu, index) => (
          <li key={index} className="flex items-center gap-4 p-3 hover:bg-gray-700">
            <span className="text-lg">{menu.icon}</span>
            <Link href={menu.link} className={`${open ? "block" : "hidden"} text-sm`}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-4 left-4 flex items-center">
        <Image src="/profile.jpg" width={30} height={30} className="rounded-full" alt="User" />
        {open && <span className="ml-2 text-sm">Hi, John</span>}
      </div>
    </aside>
  );
};

export default Sidebar;
