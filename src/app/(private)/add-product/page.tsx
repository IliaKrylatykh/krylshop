import { CreateProductForm } from "@/features/products-list/public/create-product-form";

export default function Map() {
  return (
    <div className="container py-10">
      <CreateProductForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />
    </div>
  );
}
