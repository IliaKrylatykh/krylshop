import { ProductsList } from "@/features/products-list/public/products-list";

export default function ProductsPage() {
  return (
    <main className="space-y-6 py-14 container  max-w-[1600px]">
      <ProductsList revalidatePagePath="/" />
    </main>
  );
}
