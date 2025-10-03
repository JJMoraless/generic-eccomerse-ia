import Image from "next/image";
import Link from "next/link";
import { titleFont } from "@/config/font";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">

      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}> 404 </h2>
        <p className="font-semibold text-xl">Whoops lo sentimos mucho</p>
        <p>
          <span>Puedes regresar al </span>
          <Link
            href={"/"}
            className="font-normal hover:underline"
          >
            Inicio
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <Image  src="/imgs/not-found-image.png" width={400} height={400}  alt="not found image"  />
      </div>
    </div>
  );
};
