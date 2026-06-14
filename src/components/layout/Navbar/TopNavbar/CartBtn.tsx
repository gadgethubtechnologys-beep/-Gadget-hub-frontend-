"use client";

import { useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartBtn = () => {
  const { cart } = useAppSelector((state: RootState) => state.carts);

  return (
    <Link href="/cart" className="relative inline-flex items-center justify-center w-10 h-10">
      <Image
        priority
        src="/icons/cart.svg"
        height={22}
        width={22}
        alt="cart"
        className="w-[22px] h-[22px]"
      />
      {cart && cart.totalQuantities > 0 && (
        <span className="absolute top-0 right-0 bg-brand text-white text-[10px] font-bold leading-none rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 border-2 border-white">
          {cart.totalQuantities > 99 ? "99+" : cart.totalQuantities}
        </span>
      )}
    </Link>
  );
};

export default CartBtn;
