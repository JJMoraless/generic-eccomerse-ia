"use client";
import { useUIStore } from "@/store";
import { MenuItem } from "./MenuItem";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import clsx from "clsx";

export const SideBar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* black background */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* blur */}
      {isSideMenuOpen && (
        <div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10  backdrop-filter backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      {/* sidemenu todo: sfecto slide */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
            "translate-x-0": isSideMenuOpen,
          }
        )}
      >
        {/* close sidebar */}
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeMenu}
        />

        {/* input search */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        <MenuItem href="/" icon={IoPersonOutline} name="Perfil" />
        <MenuItem href="/" icon={IoTicketOutline} name="Ordenes" />
        <MenuItem href="/" icon={IoLogInOutline} name="Ingresar" />
        <MenuItem href="/" icon={IoLogOutOutline} name="Salir" />

        {/* line separator */}
        <div className="w-full h-px bg-gray-200 my-10 rounded" />

        <MenuItem href="/" icon={IoShirtOutline} name="Productos" />
        <MenuItem href="/" icon={IoTicketOutline} name="Ordenes" />
        <MenuItem href="/" icon={IoPeopleOutline} name="Usuarios" />
      </nav>
    </div>
  );
};
