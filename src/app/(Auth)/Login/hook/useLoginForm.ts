import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { publicRequest } from "@/app/Shared/API/Request";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20)
    .nonempty("Password is required"),
});

export const useLoginForm = () => {
  type FormData = z.infer<typeof formSchema>
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login } = useAuth();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await publicRequest.post("/auth/login", data);
      const token = response?.data?.token;

      // localStorage.setItem('token', response?.data?.token)
      console.log(response);
      if (token) {
        login(token)
        toast({
        title: `✅✅✅`,
        description: `${response?.data?.message}`,
      });
      router.push("/Dashboard"); 
      }
      
    } catch (error) {
      console.error(error);

      if (error instanceof AxiosError && error.response) {
        toast({
          title: "❌❌❌",
          description: error.response.data?.message || "An error occurred",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    isLoading,
  };
};
