import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

  export const useFormLand = () => {
   
  
    const form = useForm({
      resolver: zodResolver(formSchema),
    });
    console.log(form.formState.errors);
  
    const onSubmit = async (data:{email:string, password:string}) => {
      console.log(data);
      
    }  

    return{
        form, onSubmit
    }
}