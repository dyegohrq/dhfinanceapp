"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { SignUpSchema, useSignupForm } from "./signup-form";
import { Controller } from "react-hook-form";
import { createUser } from "../../_data-access/create-user";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export function SignupContent() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const form = useSignupForm();
  const route = useRouter();

  async function onSubmit(formData: SignUpSchema) {
    try {
      form.clearErrors();
      const response = await createUser(formData);
      form.reset();

      toast.success("Conta criada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });

      setTimeout(() => {
        route.replace("/overview");
      }, 1200);

      return response;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Não foi possível criar a conta.";

      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });

      form.setError("email", {
        type: "server",
        message,
      });
    }
  }

  return (
    <>
      <ToastContainer />

      <Card className="w-full  max-w-140 flex-1">
        <CardHeader>
          <CardTitle>Criar conta</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col gap-3 "
          >
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Nome</FieldLabel>
                    <Input id="name" placeholder="Digite seu nome" {...field} />
                    {fieldState.error?.message && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
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
              <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Confirmar senha</FieldLabel>
                    <div className=" relative ">
                      <Input
                        id="confirmPassword"
                        type={!visibleConfirmPassword ? "password" : "text"}
                        placeholder="Digite sua senha"
                        {...field}
                      />
                      <button
                        type="button"
                        className=" absolute right-5 top-2 cursor-pointer "
                        onClick={() =>
                          setVisibleConfirmPassword((visible) => !visible)
                        }
                        aria-label={
                          visibleConfirmPassword
                            ? "Ocultar senha"
                            : "Mostrar senha"
                        }
                      >
                        {visibleConfirmPassword ? (
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
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Criando conta..." : "Criar conta"}
            </Button>
          </form>
          <div className=" flex flex-col w-full items-center justify-center my-8 gap-8 ">
            <span className=" present-4 text-grey-500 ">
              Já tem uma conta ?{" "}
              <Link
                href={"/login"}
                className=" font-bold text-grey-900 hover:underline transition-all duration-300 "
              >
                Acessar conta
              </Link>
            </span>
            {/* <div className=" flex flex-row items-center justify-center w-full gap-3  ">
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
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
