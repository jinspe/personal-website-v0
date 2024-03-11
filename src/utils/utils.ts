import { FieldErrors } from "react-hook-form";

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export function contactFormInputVerifier(values: IContactForm) {
  const errors: FieldErrors<IContactForm> = {};

  if (!values.email) {
    errors.email = {
      type: "required",
      message: "Email is required.",
    };
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = {
      type: "pattern",
      message: "Invalid email format.",
    };
  }

  if (!values.message) {
    errors.message = {
      type: "required",
      message: "Message is required.",
    };
  }

  return {
    values,
    errors,
  };
}
