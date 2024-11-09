"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FormEvent,
} from "react";

interface FormState {
  [key: string]: string;
}

interface Errors {
  [key: string]: string;
}

interface FormContextType {
  formState: FormState;
  updateField: (name: string, value: string) => void;
  errors: Errors;
  handleSubmit: (event: FormEvent, onSubmit: (data: FormState) => void) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formState, setFormState] = useState<FormState>({});
  const [errors, setErrors] = useState<Errors>({});

  const validateField = (name: string, value: string): string => {
    let error = "";
    if (!value.trim()) {
      error = "This field is required";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    return error;
  };

  const updateField = (name: string, value: string) => {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (
    event: FormEvent,
    onSubmit: (data: FormState) => void
  ) => {
    event.preventDefault();
    let isValid = true;
    Object.entries(formState).forEach(([name, value]) => {
      if (validateField(name, value)) isValid = false;
    });

    if (isValid) onSubmit(formState);
  };

  return (
    <FormContext.Provider
      value={{ formState, updateField, errors, handleSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
};
