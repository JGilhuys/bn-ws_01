import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/BallNoir_logo_ZWART.jpg";

export default function Nav(){
    return(
        <>
        <section className="w-full p-6 flex flex-row items-center justify-between">
            <div className="p-2 bg-white border rounded-xl drop-shadow-xl">
                <Link href={"/"}>
                    <Image src={logoImg.src} width={128} height={128} alt="The Ball Noir logo" priority />          
                </Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href={"/products"}>Products</Link>
                    </li>
                </ul>
            </div>
            <div>
                <button>Cart</button>
                <Link href={"/account"}>Account</Link>
            </div>
        </section>
        <hr className="h-px mx-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
        </>
    );
}