import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/BallNoir_logo_ZWART.jpg";

export default function Nav() {
  return (
    <>
      <section className="w-full p-6 flex flex-row items-center justify-between">
        <div>
          <Link href={"/"} className="font-CinzelDecorative text-lg p-1">
            Home
          </Link>
          <span className="p-1">|</span>
          <Link
            href={"/products"}
            className="font-CinzelDecorative text-lg p-1"
          >
            Products
          </Link>
        </div>
        <div className="p-2 bg-white border rounded-xl drop-shadow-xl">
          <Link href={"/"}>
            <Image
              src={logoImg.src}
              width={128}
              height={128}
              alt="The Ball Noir logo"
              priority
            />
          </Link>
        </div>
        <div>
          <button className="font-CinzelDecorative p-1">Cart</button>
          <span className="p-1">|</span>
          <Link href={"/account"} className="font-CinzelDecorative p-1">
            Account
          </Link>
        </div>
      </section>
      <hr className="h-px mx-8 bg-stone-300 border-0 dark:bg-gray-700"></hr>
    </>
  );
}
