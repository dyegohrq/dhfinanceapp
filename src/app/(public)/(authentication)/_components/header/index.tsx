import Image from "next/image";
import logo from "@/../public/Logo.png"

export function Header() {
    return(
        <header className=" bg-grey-900 p-5 flex justify-center rounded-b-[8px] lg:hidden " >
            <Image
                src={logo}
                alt="Logo DH|FinanceApp"
            />
        </header>
    )
}