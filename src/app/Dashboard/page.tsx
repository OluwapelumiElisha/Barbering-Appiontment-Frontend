"use client";

// import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { currentUser, isClient, isBarber } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/Login");
    } else if (isClient) {
      router.push("/Dashboard/User");
    } else if (isBarber) {
      router.push("/Dashboard/Barber");
    }
  }, []);

  return <p>Redirecting...</p>;
}

export default Dashboard
