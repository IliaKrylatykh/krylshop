import { CreateProductForm } from "@/features/products-list/public/create-product-form";
import { ProductsList } from "@/features/products-list/public/products-list";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1>Hello)))</h1>
      <CreateProductForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />
      <ProductsList revalidatePagePath="/" />
    </main>
  );
}
