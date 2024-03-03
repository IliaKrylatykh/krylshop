import { cache } from "react";
import {
  CreateProductCommand,
  DeleteProductCommand,
  ProductEntity,
} from "../_domain/entities";
import { dbClient } from "@/shared/lib/db";

export class ProductRepository {
  getProductsList = cache(
    (): Promise<ProductEntity[]> => dbClient.product.findMany(),
  );

  createProductElement = (
    command: CreateProductCommand,
  ): Promise<ProductEntity> => {
    return dbClient.product.create({
      data: command,
    });
  };

  deleteProductElement = (command: DeleteProductCommand) => {
    return dbClient.product.delete({
      where: {
        id: command.id,
      },
    });
  };
}

export const productRepository = new ProductRepository();
