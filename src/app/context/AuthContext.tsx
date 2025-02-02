"use client"; // Ensure it's a Client Component

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { UserRequest } from "../Shared/API/Request";

// Define User Type
interface User {
  _id: string;
  name: string;
  email: string;
  phoneNumber: number;
  profilePic: string;
  role: "client" | "barber";
}

// Define Context Type
interface AuthContextType {
  currentUser: User | null;
  isClient: boolean;
  isBarber: boolean;
  login: (token: string) => void;
  logout: () => void;
}

// Create Context
const AuthContext = createContext<AuthContextType | null>(null);

// Auth Provider Component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(
    () => typeof window !== "undefined" ? localStorage.getItem("token") : null
  );
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch user when token changes
  useEffect(() => {

    if (!authToken) {
    //   console.log("❌ [AuthContext] No token found. Redirecting to Login.");
      setLoading(false);
      router.replace("/Login");
      return;
    }

    const getCurrentUser = async () => {
      try {
        // console.log("🛠️ [AuthContext] Fetching user from API...");
        const res = await UserRequest().get<{ user: User }>("/auth/checkAuth");
        console.log("✅ [AuthContext] API Response:", res);

        if (res?.data?.user) {
          setCurrentUser(res.data.user);
          console.log("👤 [AuthContext] User Fetched:", res.data.user);
        } else {
          console.log("⚠️ [AuthContext] No user data received!");
        }
      } catch (error: unknown) {
        console.error("❌ [AuthContext] Error fetching user:", error);
        toast({
          title: "Session Expired",
          description: "Your session has expired. Please log in again.",
        });

        logout();
      } finally {
        setLoading(false);
      }
    };

    getCurrentUser();
  }, [authToken, router]);

  // Function to set token & fetch user after login
  const login = (token: string) => {
    // console.log("🔑 [AuthContext] User Logged In - Token:", token);
    localStorage.setItem("token", token);
    setAuthToken(token);
  };

  // Logout Function
  const logout = () => {
    console.log("🚪 [AuthContext] Logging out user...");
    localStorage.removeItem("token");
    setAuthToken(null);
    setCurrentUser(null);
    router.replace("/Login");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isClient: currentUser?.role === "client",
        isBarber: currentUser?.role === "barber",
        login,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom Hook for Using Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
