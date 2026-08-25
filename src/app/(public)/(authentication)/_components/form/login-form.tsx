"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const loginSchema = z.object({
  email: z.email({ message: "Escreva um email valido" }),
  password: z.string().min(8, { message: "Deve ter no mínimo 8 caracteres" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export function useLoginForm() {
  return useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
}
