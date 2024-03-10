"use server";

import {
  CreateCategory,
  categoryRepository,
} from "@/entities/category/category";
import { revalidatePath } from "next/cache";

export const createCategoryAction = async (
  data: CreateCategory,
  revalidatePagePath: string,
) => {
  await categoryRepository.createCategory(data);
  revalidatePath(revalidatePagePath);
};
