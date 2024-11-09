"use client";
import React from "react";
import { useFormContext } from "@/context";
import { Input as Inputs } from "../ui/input";

interface InputProps {
  name: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ name, label, type = "text" }) => {
  const { formState, updateField, errors } = useFormContext();

  return (
    <div>
      <label>
        {label}
        <Inputs
          type={type}
          name={name}
          value={formState[name] || ""}
          onChange={(e) => updateField(name, e.target.value)}
        />
      </label>
      {errors[name] && <span style={{ color: "red" }}>{errors[name]}</span>}
    </div>
  );
};

export default Input;
