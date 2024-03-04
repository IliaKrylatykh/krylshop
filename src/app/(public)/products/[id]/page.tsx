import { ProductDetails } from "@/features/product-details/product-details";

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetails productId={params.id} />;
}
