import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

export const signupSchema = z
  .object({
    name: z
      .string({ message: "O nome deve conter apenas caracteres" })
      .min(1, { message: "O nome é obrigatorio" }),
    email: z.email({ message: "Insira um email valido" }),
    password: z
      .string()
      .min(8, { message: "A senha deve ter mais de 8 caracteres" }),
    confirmPassword: z.string().min(8, {
      message: "A confirmação da senha deve ter mais de 8 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem.",
    path: ["confirmPassword"],
  });

export type SignUpSchema = z.infer<typeof signupSchema>;

export function useSignupForm() {
  return useForm<SignUpSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
  });
}
