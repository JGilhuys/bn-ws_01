import { type products } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function ProductCard({ product }: { product: products }) {
  function convertPrice(price: number): string {
    if (price % 1 === 0) {
      return `\u20AC${price.toString()},-`;
    } else {
      price = Math.round((price + Number.EPSILON) * 100) / 100;
      let returnString = price.toFixed(2);
      return "\u20AC" + returnString.replace(".", ",");
    }
  }
  return (
    <button className="flex flex-col justify-between items-start text-left pt-4 bg-white border border-stone-200 rounded-t-xl rounded-b-2xl shadow-lg ease-in-out transition-all duration-100 hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-col justify-start items-start">
        <p className="px-4 font-CinzelDecorative font-semibold text-xl text-amber-950">
          {product.title}
        </p>
        <p className="px-4 text-sm text-stone-400">{product.subtitle}</p>
        <p className="w-full mt-3">
          <Image
            src={"/images/" + product.image_full}
            alt={"My current image"}
            height={1000}
            width={1000}
          />
        </p>
        <p className="px-4 my-3">{product.summary}</p>
      </div>
      <div className="flex flex-row p-4 w-full bg-[#cebfa0] justify-between items-center rounded-b-xl font-semibold text-2xl text-stone-600">
        <button className="bg-white rounded-full text-[#9e8f72] text-md p-5">
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
        <p>{convertPrice(product.price)}</p>
      </div>
    </button>
  );
}
