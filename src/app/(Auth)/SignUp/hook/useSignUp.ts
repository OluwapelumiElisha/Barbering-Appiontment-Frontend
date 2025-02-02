import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { publicRequest } from "@/app/Shared/API/Request";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

// ✅ Define Schema with Zod
const formSchema = z.object({
  name: z
    .string()
    .min(4, "Name must be at least 4 characters")
    .max(20, "Name must be at most 20 characters")
    .nonempty("Name is required"),

  phoneNumber: z
    .string()
    .min(11, "Phone number must be at least 11 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^\d+$/, "Phone number must contain only numbers")
    .nonempty("Phone number is required"),

  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .nonempty("Password is required"),
});

// ✅ Infer Type from Schema
type FormData = z.infer<typeof formSchema>;

export const useSignUpForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ✅ Pass the correct type to `useForm`
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // ✅ Type `data` as `FormData`
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await publicRequest.post("/auth/register", data);
      toast({
        title: `✅✅✅`,
        description: `${response?.data?.message}`,
      });
      router.push("/Login"); 
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
