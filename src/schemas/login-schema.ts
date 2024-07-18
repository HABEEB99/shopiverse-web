import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),

  password: z
    .string()
    .min(8, { message: "Enter a valid password" })
    .max(20, { message: "Enter a valid password" }),
});
