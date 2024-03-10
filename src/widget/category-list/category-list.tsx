import { CreateCategoryForm } from "@/features/category-list/public/create-category-form";
import { Header } from "./_ui/header";
import { CategoriesList } from "@/features/category-list/public/category-list";
import { Layout } from "./_ui/layout";

export function CategoryList() {
  return (
    <Layout
      header={<Header />}
      createCategoryForm={
        <CreateCategoryForm
          revalidatePagePath="/categories"
          className="mb-10"
        />
      }
      categoryItems={<CategoriesList />}
    />
  );
}
