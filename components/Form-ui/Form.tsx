"use client";
import React, { ReactNode } from "react";
import { useFormContext } from "@/context";

interface FormProps {
  children: ReactNode;
  onSubmit: (data: { [key: string]: string }) => void;
  className: string;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, className }) => {
  const { handleSubmit } = useFormContext();

  return (
    <form className={className} onSubmit={(e) => handleSubmit(e, onSubmit)}>
      {children}
    </form>
  );
};

export default Form;
