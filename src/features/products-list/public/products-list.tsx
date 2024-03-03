import { revalidatePath } from "next/cache";
import { ProductItem } from "../ui/product-item";
import { productRepository } from "@/entities/product/product";
import Image from "next/image";

export async function ProductsList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const productsList = await productRepository.getProductsList();

  const handleDeleteAction = async (productId: string) => {
    "use server";

    await productRepository.deleteProductElement({ id: productId });

    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {productsList.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={handleDeleteAction.bind(null, product.id)}
        />
      ))}
    </div>
  );
}
