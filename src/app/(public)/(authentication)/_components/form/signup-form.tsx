import z, { email } from "zod";

export const signupSchema = z.object({
    name: z.string({message: "O nome deve conter apenas caracteres"}).min(1, {message:"O nome é obrigatorio"}),
    email: z.email({message: "Insira um email valido"}), 
    passowrd: z.string().min(8, {"message": "A senha deve ter mais de 8 caracteres"})
})