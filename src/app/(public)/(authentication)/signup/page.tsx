"use client";

import Image from "next/image";
import { Header } from "../_components/header";
import IllustrationImage from "@/../public/loginAndSignupIllustrationImage.svg";
import logo from "@/../public/Logo.png";
import { SignupContent } from "../_components/form/signup-content";

export default function Signup() {
  return (
    <>
      <Header />
      <main className=" w-full h-[calc(100vh-70px)] lg:h-full flex items-center px-4 md:px-0 gap-5 lg:pr-10">
        <div className=" hidden lg:flex relative flex-1 max-w-200 h-screen ">
          <Image
            src={IllustrationImage}
            alt="Login and signup Illustration Image"
            className=" object-cover "
            fill
          />
          <Image
            src={logo}
            alt="Logo Dh|FinanceApp"
            className="absolute top-10 left-5 "
          />
          <div className=" absolute bottom-0 w-full max-w-150 xl:max-w-180 flex flex-col gap-4 px-5 xl:px-25 pb-10 ">
            <h1 className=" present-1 text-white ">
              Acompanhe seu dinheiro e economize para o seu futuro
            </h1>
            <p className=" present-4 text-white ">
              O aplicativo de finanças pessoais coloca você no controle dos seus
              gastos. Acompanhe transações, defina orçamentos e faça depósitos
              em suas reservas de economia com facilidade.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center flex-1">
          <SignupContent />
        </div>
      </main>
    </>
  );
}
