import prisma from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json(); // ler os dados enviados

    const name = String(body.name ?? "").trim(); // Transforma em string e retira os espaços
    const email = String(body.email ?? "")
      .trim()
      .toLowerCase(); // transforma em string, retira os espaços e deixa tudo em minusculo
    const password = String(body.password ?? "");

    if (!email || !password) {
      // Verifica se tem um email e senha
      return NextResponse.json(
        { error: "Email e senha são obrigatórios" }, // caso não tenha retorna mensagem de erro
        { status: 400 }, // com o status 400 de badrequest
      );
    }

    if (password.length < 8) {
      // Verifica se a senha tem menos de 8 digitos
      return NextResponse.json(
        { error: "A senha devte ter pelo menos 8 caracters" },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({
      // verifica se existe algum usuario nesse banco
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Este email já está cadastrado" },
        { status: 409 },
      );
    }

    const passwordHash = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name: name || null,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Não foi possível criar a conta" },
      { status: 500 },
    );
  }
}
