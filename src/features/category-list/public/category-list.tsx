import { CategoryItem } from "../ui/category-item";
import { categoryRepository } from "@/entities/category/category";

export async function CategoriesList() {
  const categoriesList = await categoryRepository.getCategoriesList();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categoriesList.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
