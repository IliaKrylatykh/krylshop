"use server";

import { revalidatePath } from "next/cache";
import { productsRepository } from "./products.repository";

export const createProductAction = async (
  command: CreateProductCommand,
  revalidatePagePath: string,
) => {
  await productsRepository.createProductElement(command);
  revalidatePath(revalidatePagePath);
};
