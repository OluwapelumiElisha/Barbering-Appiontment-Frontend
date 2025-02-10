"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
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

// ✅ Define Protected Routes (Ensure lowercase & exact format)
const PROTECTED_ROUTES = ["/dashboard"];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname().toLowerCase(); // ✅ Ensure it's lowercase

  // ✅ Fetch token from localStorage when the app loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("🔍 Checking stored token:", token);
    setAuthToken(token); // ✅ Only update state after localStorage is checked
    setLoading(false); // ✅ Mark loading as false after getting token
  }, []);

  useEffect(()=>{
    if (authToken) {
      console.log('Y not working');
      router.push("/Dashboard");
    }
  },[authToken, pathname, loading])

  // ✅ Fetch user when `authToken` is available
  useEffect(() => {
    if (loading) return; // ✅ Wait until loading is false before checking auth

    if (!authToken && PROTECTED_ROUTES.includes(pathname)) {
      console.log("❌ No token found. Redirecting to Login...");
      router.replace("/Login"); // ✅ Only redirect if trying to access a protected page
      return;
    }

    if (authToken) {
      const getCurrentUser = async () => {
        try {
          console.log("🔄 Fetching user from API...");
          const res = await UserRequest().get("/auth/checkAuth");
          console.log("✅ User fetched:", res?.data);

          if (res) {
            setCurrentUser(res?.data);
            
          } else {
            console.log("⚠️ No user data received!");
          }
        } catch (error) {
          console.error("❌ Error fetching user:", error);
          toast({
            title: "Session Expired",
            description: "Your session has expired. Please log in again.",
          });

          logout();
        }
      };

      getCurrentUser();
    }
  }, [authToken, pathname, loading]); // ✅ Ensure it only runs after `loading` is false

  // ✅ Function to set token & fetch user after login
  const login = (token: string) => {
    console.log("🔑 User Logged In - Storing token:", token);
    localStorage.setItem("token", token);
    setAuthToken(token);
  };

  // ✅ Logout Function
  const logout = () => {
    console.log("🚪 Logging out user...");
    localStorage.removeItem("token");
    setAuthToken(null);
    setCurrentUser(null);
    router.replace("/login"); // ✅ Ensure correct case for route
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
      {!loading && children} {/* ✅ Prevent flashing Login page before checking auth */}
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
