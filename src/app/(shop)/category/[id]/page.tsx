import { ProductGrid, Title } from "@/components";
import { CategoryProduct } from "@/interfaces";
import { initialData } from "@/seed/seed";
// import { notFound } from "next/navigation";

const seedProducts = initialData.products;
interface Props {
  params: {
    id: CategoryProduct;
  };
}

export default function ({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<CategoryProduct, string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Ninios",
    unisex: "Unisex",
  };

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <Title
        title="Tienda"
        subtitle={`Aticulos de ${labels[id]}`}
        className="mb-4"
      />
      <ProductGrid products={products} />
    </>
  );
}
