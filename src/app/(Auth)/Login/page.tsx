"use client";
import Logo from "../../../../public/clipper.jpeg";
import Image from "next/image";
import { Barlow, Work_Sans } from "next/font/google";
import { Form } from "@/components/ui/form";
import GenericFormInput from "@/app/Shared/GenericForminput";
import { useLoginForm } from "./hook/useLoginForm";
import { loginForm } from "./utils/loginForm";
import eye from "../../../../public/eye_660383.png";
import hidden from "../../../../public/hidden_2355322.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingIcon from '../../../../public/progress_activity_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png'

const barlow = Barlow({
  subsets: ["latin"], // Specify subsets as needed
  weight: ["400", "700"], // Specify weights as needed
  display: "swap", // Optional: control font-display behavior
});
const workSans = Work_Sans({
  subsets: ["latin"], // Specify subsets as needed
  weight: ["400", "500", "700"], // Specify weights as needed
  display: "swap", // Optional: control font-display behavior
});

const Login = () => {
    const router = useRouter();
  const { onSubmit, form, isLoading } = useLoginForm();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="bg-[#F8F5EF] min-h-screen w-[100%]">
      <div className="flex justify-center items-center pt-3">
        <Image src={Logo} alt="Description" className="w-16 h-16" />
      </div>
      <div className=" w-[80%] lg:flex md:flex sm:block block m-auto rounded-2xl p-10  bg-white shadow-lg mt-12 justify-between">
        <div className="lg:w-[40%] md:w-[40%] sm:w-[100%] w-[100%] lg:mt-12 md:mt-12 sm:mt-10 mt-2">
          <h1
            className={`${barlow.className} lg:text-left md:text-left sm:text-center text-center font-extrabold lg:text-[40px] md:text-[20px] sm:text-[20px] text-[16px]`}
          >
            Sign in to Book Your Perfect Cut!
          </h1>
          <p
            className={`${workSans.className} pt-4 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] lg:text-left md:text-left sm:text-center text-center`}
          >
            Experience hassle-free barbering with our seamless booking system.
            Schedule an appointment with your favorite barber, choose your
            preferred style, and skip the wait.
          </p>
          {/* <ul className={`${workSans.className} font-medium mt-8`}>
                    <li>✅ Quick & Easy Appointments</li>
                    <li>✅ Professional Barbers & Premium Services</li>
                    <li>✅ Stay Updated on Special Offers & Discounts</li>
                </ul> */}
        </div>
        <div className="lg:w-[40%] md:w-[40%] sm:w-[100%] w-[100%] mt-10">
          <h1 className={`${barlow.className} text-[22px] font-extrabold`}>
            Welcome Back.
          </h1>
          <p className={`${workSans.className} text-[15px] font-medium`}>
            Login to your account.
          </p>
          <div className="mt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {loginForm?.map((elem, i) => (
                  <div key={i + elem.name} className="relative">
                    <GenericFormInput
                      form={form}
                      {...elem}
                      type={
                        elem.name === "password" && isPasswordVisible
                          ? "text"
                          : (elem.type as
                              | "number"
                              | "email"
                              | "password"
                              | "text"
                              | "textarea"
                              | "select")
                      }
                    />
                    {elem.name === "password" && (
                      <p
                        onClick={togglePasswordVisibility}
                        className="absolute right-2 top-9 cursor-pointer text-sm text-blue-500"
                      >
                        {isPasswordVisible ? (
                          <Image src={eye} className="w-6 h-6" alt="Show" />
                        ) : (
                          <Image src={hidden} className="w-6 h-6" alt="Hide" />
                        )}
                      </p>
                    )}
                  </div>
                ))}
                <div className="flex items-center justify-center ">
                  <Button disabled={isLoading} className=" w-full bg-[#DEC7A6] mt-8" type="submit">
                    {/* Login */}
                    {isLoading ? <Image src={LoadingIcon} className="w-7 h-7 animate-spin" alt="Progress" /> : "Login"}
                  </Button>
                </div>
                <div className="flex items-center justify-center mt-5">
                  <p className="lg:pb-0 md:pb-0 sm:pb-10 pb-12">
                  {"Don't have an account?"}
                  </p>
                  <p onClick={() => router.push('/SignUp')} className="text-[#DEC7A6] font-bold cursor-pointer pl-2 ">
                    Sign Up
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <h1 className="mt-20 text-[#F8F5EF]">BOOK AN APPIONMENT</h1>
    </div>
  );
};

export default Login;
