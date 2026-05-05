import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";

type ProductCardProps = {
  data: Product;
  priority?: boolean;
  isCircle?: boolean;
};

const ProductCard = ({ data, priority = false, isCircle = false }: ProductCardProps) => {
  return (
    <Link
      href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
      className="flex flex-col items-start aspect-auto"
    >
      <div
        className={
          isCircle
            ? "relative bg-brand-light rounded-[40px] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] mx-auto mb-4 overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500"
            : "relative bg-brand-light rounded-[20px] w-full aspect-square mb-2.5 xl:mb-4 overflow-hidden border border-black/5"
        }
      >
        <Image
          src={data.srcUrl}
          fill
          sizes="(max-width: 768px) 50vw, 320px"
          className="object-cover hover:scale-110 transition-all duration-700 ease-out"
          alt={data.title}
          priority={priority}
        />
      </div>
      <strong className="text-brand xl:text-xl">{data.title}</strong>
      <p className="text-brand/60 text-sm xl:text-base">{data.category}</p>
      <div className="flex items-center space-x-[5px] xl:space-x-2.5">
        <span className="font-bold text-brand text-xl xl:text-2xl">
          ₹{data.price}
        </span>
      </div>
    </Link>
  );
};

export default React.memo(ProductCard);
