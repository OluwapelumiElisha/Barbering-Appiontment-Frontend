"use client";

import { Form } from "@/components/ui/form"
import { useFormLand } from '@/app/Components/Form/hook/useForm'
import { FormInput } from "./utils/formInput";
import GenericFormInput from "@/app/Shared/GenericForminput";
import { Button } from "@/components/ui/button";
// import GenericFormInput from "@/app/Shared/GenericForminput";

function LandingForm() {
    const { onSubmit, form } = useFormLand();
    return (
        <div>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {FormInput.map((elem, i) => (
                <div key={i + elem.name} className={`${
                    (elem.type === "email" || elem.type === "number") ? "inline-block w-[48%] mr-[2%] last:mr-0" : ""
                  }`}>
                  <GenericFormInput
                    form={form}
                    {...elem}
                    type = {elem.type as "number" | "email" | "password" | "select" | "textarea" | "text"}
                  />
                 
                
                </div>
                // <div>

                // </div>
            ))}
            <div className="flex justify-center items-center">

            <Button className="mt-5 bg-[#DEC7A6]"> BOOK AN APPIONMENT </Button>
            </div>
              

           
             
            </form>
          </Form>
        </div>
    )
}

export default LandingForm