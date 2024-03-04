import { ProductId, productRepository } from "@/entities/product/product";
import { useQuery } from "@tanstack/react-query";

export async function ProductDetails({ productId }: { productId: ProductId }) {
  // const query = useQuery({
  //   queryFn: () =>
  //     productRepository.getProductById("cltcn75s80000u6s4fyjt755r"),
  //   queryKey: ["product", productId],
  // });

  // const productsList = await productRepository.getProductsList();

  // console.log(productsList);

  return (
    <div>
      hello
      {/* <h1>{query.data?.id}</h1>
      <h1>{query.data?.name}</h1> */}
    </div>
  );
}
