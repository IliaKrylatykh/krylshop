import { ProductsList } from "@/features/products-list/public/products-list";

export default function AboutPage() {
  return (
    <main className="space-y-6 py-14 container  max-w-[600px]">
      <ProductsList revalidatePagePath="/" />
    </main>
  );
}
