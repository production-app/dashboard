"use client";
import React from "react";
import { FormProvider } from "@/context";
import Form from "./Form";
import Input from "./Input";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const CreateForm: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (data: { [key: string]: string }) => {
    //alert("Form Submitted: " + JSON.stringify(data));
    console.log(data);
    if (Object.keys(data).length === 0) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Empty Fields...",
      });
    } else {
      toast({
        variant: "default",
        title: "Successful !",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="mx-auto flex w-3/4 flex-col gap-6 p-4 mt-7"
    >
      <Input name="firstname" label="First Name" />
      <Input name="lastname" label="Last Name" />

      <div className="grid grid-cols-2 gap-3  ">
        <div>
          <Input name="gender" label="Gender" />
        </div>

        <Input name="email" label="Email" type="email" />
      </div>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CreateForm;
