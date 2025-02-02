import { Path } from "react-hook-form";

export type loginFormFields = {
    email: string;
    password: string;
  };

export const loginForm : { name: Path<loginFormFields>; type: string; placeholder: string; label: string; required: boolean }[] = [
    {
        name: "email",
        type: "email",
        placeholder: "",
        required: true,
        label: 'Email'
    },
    {
        name: "password",
        type: "password",
        placeholder: "",
        required: true,
        label: 'Password'
    },


];