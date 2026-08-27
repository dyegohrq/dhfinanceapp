"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginSchema, useLoginForm } from "./login-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { Slide, toast, ToastContainer } from "react-toastify";

export function LoginContent() {
  const form = useLoginForm();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: LoginSchema) {
    const toastId = toast.loading("Entrando...", {
      position: "top-right",
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Slide,
    });

    try {
      setLoading(true);
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false, //O redirect: false permite que você trate o erro na própria tela.
      });

      if (result?.error) {
        toast.update(toastId, {
          render: "Email ou senha inválidos",
          type: "error",
          isLoading: false,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        return;
      }

      toast.update(toastId, {
        render: "Login realizado com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });

      window.location.href = "/overview";
    } catch {
      toast.update(toastId, {
        render: "Não foi possível entrar agora.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <Card className="w-full  max-w-140 flex-1">
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col gap-3 "
          >
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      id="email"
                      placeholder="Digite seu email"
                      {...field}
                    />
                    {fieldState.error?.message && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Senha</FieldLabel>
                    <div className=" relative ">
                      <Input
                        id="password"
                        type={!visiblePassword ? "password" : "text"}
                        placeholder="Digite sua senha"
                        {...field}
                      />
                      <button
                        type="button"
                        className=" absolute right-5 top-2 cursor-pointer "
                        onClick={() =>
                          setVisiblePassword((visible) => !visible)
                        }
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
                    {fieldState.error?.message && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <Button type="submit">Entrar</Button>
          </form>
          <div className=" flex flex-col w-full items-center justify-center my-8 gap-8 ">
            <span className=" present-4 text-grey-500 ">
              Precisa criar uma conta ?{" "}
              <Link
                href={"/signup"}
                className=" font-bold text-grey-900 hover:underline transition-all duration-300 "
              >
                Criar conta
              </Link>
            </span>
            <div className=" flex flex-row items-center justify-center w-full gap-3  ">
              <div className=" w-full h-px bg-grey-500 " />
              <span className=" present-4 text-grey-500">Ou</span>
              <div className=" w-full h-px bg-grey-500 " />
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-3 ">
            <Button
              type="button"
              onClick={() => signIn("google", { redirectTo: "/dashboard" })}
              className={"px-5 py-4 md:py-5 flex-1"}
            >
              <FcGoogle />
              Entrar com o Google
            </Button>
            <Button
              onClick={() => signIn("github", { redirectTo: "/dashboard" })}
              className={"px-5 py-4 md:py-5 flex-1"}
            >
              <FaGithub />
              Entrar com o GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
