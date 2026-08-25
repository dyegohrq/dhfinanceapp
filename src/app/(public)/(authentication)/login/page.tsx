import { LoginContent } from "../_components/form/login-content";
import { Header } from "../_components/header";

export default function Login() {
  return (
    <>
      <Header />
      <main className=" w-full h-[calc(100vh-70px)] flex items-center justify-center px-4 md:px-0 ">
        <LoginContent />
      </main>
    </>
  );
}
