import {
  CategoryEntity,
  CategoryId,
} from "@/entities/category/_domain/entities";
import { ReviewEntity } from "@/entities/review/review";
import { UserEntity, UserId } from "@/entities/user/_domain/types";

export type ProductId = string;
export type ProductSlug = string;

export type ProductEntity = {
  id: ProductId;
  createdAt: Date;
  name: string;
  slug: ProductSlug;
  description: string;
  price: string;
  images: string;
};

export interface Product extends ProductEntity {
  user: UserEntity;
  userId: UserId;
  category: CategoryEntity;
  categoryId: CategoryId;
  reviews: ReviewEntity[];
}

export type CreateProductCommand = {
  name: string;
  slug: ProductSlug;
  description: string;
  price: string;
  images: string;
  userId: UserId;
  categoryId: CategoryId;
};

export type DeleteProductCommand = {
  id: ProductId;
};
