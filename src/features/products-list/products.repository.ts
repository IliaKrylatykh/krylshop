import { dbClient } from "@/shared/lib/db";
import { cache } from "react";

class ProductsRepository {
  getProductsList = cache(
    (): Promise<Product[]> => dbClient.product.findMany(),
  );

  createProductElement = (command: CreateProductCommand): Promise<Product> => {
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

export const productsRepository = new ProductsRepository();
