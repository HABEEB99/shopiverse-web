import * as z from "zod";
import validator from "validator";

export const RegisterSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "FirstName must be more than one character" })
      .regex(new RegExp("^[a-zA-Z]+$"), {
        message: "Special character is not allowed",
      }),

    lastName: z
      .string()
      .min(2, { message: "LastName must be more than one character" })
      .regex(new RegExp("^[a-zA-Z]+$"), {
        message: "Special character is not allowed",
      }),

    email: z.string().email({ message: "Please enter a valid email address" }),

    password: z
      .string()
      .min(8, { message: "Password can't be less than 8 character" })
      .max(20, { message: "Password can't be more than 20 character" }),

    confirmPassword: z
      .string()
      .min(8, { message: "Password can't be less than 8 character" })
      .max(20, { message: "Password can't be more than 20 character" }),

    userImage: z.string().optional(),
    phone: z.string().refine(validator.isMobilePhone),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and ConfirmPassword mismatch!",
    path: ["confirmPassword"],
  });
