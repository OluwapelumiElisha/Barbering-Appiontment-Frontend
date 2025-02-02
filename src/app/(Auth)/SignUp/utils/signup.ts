import { Path } from "react-hook-form";

// Define the expected keys of the form
export type SignUpFormFields = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
};

// ✅ Ensure `name` is correctly typed using `Path<SignUpFormFields>`
export const signUpForm: { name: Path<SignUpFormFields>; type: string; placeholder: string; label: string }[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter your full name",
    label: "Full Name",
  },
  {
    name: "phoneNumber",
    type: "text",
    placeholder: "Enter your phone number",
    label: "Phone Number",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
  },
];
