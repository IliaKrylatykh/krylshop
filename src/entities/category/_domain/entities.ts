import { ProductEntity } from "@/entities/product/product";

export type CategoryId = string;
export type CategorySlug = string;

export type CategoryEntity = {
  id: CategoryId;
  createdAt: Date;
  name: string;
  slug: CategorySlug;
  image: string;
};

export interface Category extends CategoryEntity {
  products: ProductEntity[];
}

export type CreateCategory = {
  name: string;
  image: string;
};
