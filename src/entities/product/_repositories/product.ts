import { cache } from "react";
import {
  CreateProductCommand,
  DeleteProductCommand,
  ProductEntity,
  ProductId,
} from "../_domain/entities";
import { dbClient } from "@/shared/lib/db";

export class ProductRepository {
  getProductsList = cache(
    (): Promise<ProductEntity[]> => dbClient.product.findMany(),
  );

  getProductById = cache(
    (productId: ProductId): Promise<ProductEntity> =>
      dbClient.product.findUniqueOrThrow({
        where: { id: productId },
      }),
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
