import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";
import { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export const {} = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  trustHost: true,
  session: {
    strategy: "jwt", //Isso define como a sessão do usuário será armazenada e lida pelo NextAuth.
  },
  providers: [
    Google({ allowDangerousEmailAccountLinking: true }), //se o usuário já tem uma conta no sistema com o mesmo email, o Google pode tentar conectar essa conta social à conta já existente.
    GitHub({ allowDangerousEmailAccountLinking: true }),
    Credentials({
      name: "Credentials", // nome do login que aparece na interface
      credentials: {
        //define quais campos o formulário vai enviar
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        // função que recebe os dados enviados pelo formulário e decide se a autenticação é válida

        const email = String(credentials.email ?? "").toLowerCase();
        const password = String(credentials.password ?? "");

        if (!email || !password) return null; //Se email ou senha estiverem vazios, a autenticação falha imediatamente.

        const user = await prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (!user || !user.password) return null;

        const isValid = await compare(password, user.password);

        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    // se a pessoa já cadastrou com email e senha, e depois entra pelo Google com o mesmo email, ele não cria outra conta. Ele reaproveita a mesma conta
    async signIn({ user, account }) {
      if (!user.email) return false;

      const email = user.email.toLowerCase();

      if (account?.provider === "google" || account?.provider === "github") {
        const existingUser = await prisma.user.findUnique({
          where: { email },
        });

        if (existingUser) {
          return true;
        }

        await prisma.user.create({
          data: {
            email,
            name: user.name ?? "Usuário",
            image: user.image ?? null,
          },
        });

        return true;
      }

      return true;
    },
  },
});
