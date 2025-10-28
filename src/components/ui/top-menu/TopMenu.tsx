"use client";

import { titleFont } from "@/config/font";
import { useUIStore } from "@/store";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex px-5 justify-between items-center w-full relative">
      {/* logo */}
      <div className="">
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-extrabold`}>
            Generic
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
          href="/category/men"
        >
          Hombres
        </Link>

        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
          href="/category/women"
        >
          Mujeres
        </Link>

        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
          href="/category/kid"
        >
          Ninios
        </Link>
      </div>

      {/*Search, Cart, Menu*/}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute px-1 text-xs rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
          </div>
          <IoCartOutline className="w-5 h-5" />
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openSideMenu}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
