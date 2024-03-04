import { revalidatePath } from "next/cache";
import { ProductItem } from "../ui/product-item";
import { productRepository } from "@/entities/product/product";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
