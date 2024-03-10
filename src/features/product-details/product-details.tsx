import { ProductId, productRepository } from "@/entities/product/product";
import { dbClient } from "@/shared/lib/db";
import Image from "next/image";
import { CreateProductForm } from "./create-review-form";

export async function ProductDetails({ productId }: { productId: ProductId }) {
  // const productQuery = useQuery({
  //   queryKey: ["products", productId],
  //   queryFn: () => productRepository.getProductById(productId),
  // });

  const product = await dbClient.product.findUniqueOrThrow({
    where: { id: productId },
  });

  const productReviews = await dbClient.review.findMany();
  console.log(product);
  return (
    <div>
      <h1>{product.id}</h1>
      <h1>{product.name}</h1>
      <h1>{product.description}</h1>
      <Image
        src={product.images}
        alt="Product image"
        width={600}
        height={600}
        className="w-full object-cover h-48"
      />
      <CreateProductForm
        revalidatePagePath={`/products/${product.id}`}
        className="max-w-[300px] mb-10"
      />
    </div>
  );
}
