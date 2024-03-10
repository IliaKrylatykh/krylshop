import { cache } from "react";
import { CategoryEntity, CreateCategory } from "../_domain/entities";
import { dbClient } from "@/shared/lib/db";
import { generateSlug } from "@/shared/lib/getSlug";

export class CategoryRepository {
  getCategoriesList = cache(
    (): Promise<CategoryEntity[]> => dbClient.category.findMany(),
  );

  createCategory = (data: CreateCategory): Promise<CategoryEntity> => {
    const slug = generateSlug(data.name);

    return dbClient.category.create({
      data: { ...data, slug },
    });
  };
}

export const categoryRepository = new CategoryRepository();
