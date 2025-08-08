import * as z from "zod";

export const signupSchema = z.object({
  fullName: z
    .string("Full Name is invalid")
    .min(2, "Full Name must be 2 characters or more"),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
      "Password must contain characters , numbers  special characters"
    ),
  email: z.email("Email is invalid"),
});

export type SignupFormData = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  email: z.email("Email is invalid"),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
      "Password must contain characters , numbers  special characters"
    ),
});

export type LoginFormData = z.infer<typeof loginSchema>


export const foregtPasswordSchema = z.object({
  email: z.email("Email is invalid"),
  
});

export type ForgetPasswordFormData = z.infer<typeof foregtPasswordSchema>


export const resetPasswordSchema = z.object({
  password1: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
      "Password must contain characters , numbers  special characters"
    ),
  password2: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
      "Password must contain characters , numbers  special characters"
    ),

   
  
});

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>