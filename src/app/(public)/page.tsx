import { ProductsList } from "@/features/products-list/public/products-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      here will be the main page
      <ProductsList revalidatePagePath="/" />
    </main>
  );
}
