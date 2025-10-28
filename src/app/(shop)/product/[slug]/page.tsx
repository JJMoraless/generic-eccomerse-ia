import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ({ params }: Props) {
  const { slug } = params;
  const productFound = initialData.products.find(
    (product) => product.slug === slug
  );

  if (!productFound) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/* slideshow */}
      <div className="col-span-1 md:col-span-2 bg-blue-400">hola 1</div>

      {/* detalles */}
      <div className="col-span-1 px-5 bg-amber-200">
        <h1 className="antialiased font-bold text-xl">{productFound.title}</h1>
        <p className="textlg mb-5">$ {productFound.price}</p>

        {/* selector tallas */}

        {/* selector cantidad */}

        {/* button  */}
        <button className="btn-primary my-5"> Agregar al carrito</button>

        <h3 className="font-bold text-sm ">Description</h3>
        <p className="font-light">{productFound.description}</p>
      </div>
    </div>
  );
}
