import { ProductDetails } from "@/features/product-details/product-details";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <ProductDetails productId={params.id} />
    </main>
  );
}
