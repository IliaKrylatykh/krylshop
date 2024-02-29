import { CreateProductForm } from "@/features/products-list/public/create-product-form";
import { ProductsList } from "@/features/products-list/public/products-list";

export default async function Home({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col p-8">
      {children}
      <p>here will be the main page</p>
    </main>
  );
}
