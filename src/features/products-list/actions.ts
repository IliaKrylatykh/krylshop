"use server";

import { CreateProductCommand } from "@/entities/product/_domain/entities";
import { productRepository } from "@/entities/product/product";
import { revalidatePath } from "next/cache";

export const createProductAction = async (
  command: CreateProductCommand,
  revalidatePagePath: string,
) => {
  await productRepository.createProductElement(command);
  revalidatePath(revalidatePagePath);
};
