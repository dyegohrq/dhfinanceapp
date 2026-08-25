"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function SignupContent() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  return (
    <>
      <div className=" w-full h-full flex items-center justify-center flex-1 ">
        <Card className="w-full max-w-140 flex-1">
          <CardHeader>
            <CardTitle>Criar conta</CardTitle>
          </CardHeader>
          <CardContent>
            <form className=" flex flex-col gap-3 ">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Nome</FieldLabel>
                  <Input id="name" name="name" placeholder="Digite seu nome" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu email"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <div className=" relative ">
                    <Input
                      id="password"
                      name="password"
                      type={!visiblePassword ? "password" : "text"}
                      placeholder="Digite sua senha"
                    />
                    <button
                      type="button"
                      className=" absolute right-5 top-2 cursor-pointer "
                      onClick={() => setVisiblePassword((visible) => !visible)}
                      aria-label={
                        visiblePassword ? "Ocultar senha" : "Mostrar senha"
                      }
                    >
                      {visiblePassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </Field>
                <Field>
                  <FieldLabel htmlFor="confirmPassword">
                    Confirmar senha
                  </FieldLabel>
                  <div className=" relative ">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={!visibleConfirmPassword ? "password" : "text"}
                      placeholder="Confirme sua senha"
                    />
                    <button
                      type="button"
                      className=" absolute right-5 top-2 cursor-pointer "
                      onClick={() =>
                        setVisibleConfirmPassword((visible) => !visible)
                      }
                      aria-label={
                        visibleConfirmPassword
                          ? "Ocultar confirmação de senha"
                          : "Mostrar confirmação de senha"
                      }
                    >
                      {visibleConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </Field>
              </FieldGroup>
              <Button type="submit">Criar conta</Button>
            </form>
            <div className=" flex flex-col w-full items-center justify-center my-8 ">
              <span className=" present-4 text-grey-500 ">
                Já tem uma conta ?{" "}
                <Link
                  href="/login"
                  className=" font-bold text-grey-900 hover:underline transition-all duration-300 "
                >
                  Acesse aqui
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
