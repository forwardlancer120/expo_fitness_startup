// app/hooks/useForm.ts
import { useState } from "react";

type FormValues = { [key: string]: string };

type FormErrors = { [key: string]: string };

interface UseFormReturn {
  values: FormValues;
  errors: FormErrors;
  handleChange: (field: string, value: string) => void;
  handleSubmit: (callback: (values: FormValues) => void) => void;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
}

export function useForm(initialValues: FormValues): UseFormReturn {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (callback: (values: FormValues) => void) => {
    callback(values);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setErrors,
  };
}
