import Link from "next/link";
import React, { Suspense } from "react";
import CartBtn from "./CartBtn";
import SearchInput from "../SearchInput";
import Image from "next/image";

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20 shadow-sm border-b border-brand/10">
      <div className="max-w-frame mx-auto px-4 xl:px-0 py-2 md:py-2.5 flex items-center gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/gadget-logo.jpg"
            alt="Gadget Hub"
            width={140}
            height={120}
            className="object-contain h-10 sm:h-12 md:h-14 w-auto"
            priority
          />
        </Link>

        {/* Search — grows to fill space */}
        <div className="flex-1 min-w-0">
          <Suspense fallback={<div className="w-full h-10 bg-brand-light rounded-full animate-pulse" />}>
            <SearchInput />
          </Suspense>
        </div>

        {/* Cart */}
        <div className="shrink-0">
          <Suspense fallback={<div className="w-6 h-6" />}>
            <CartBtn />
          </Suspense>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
