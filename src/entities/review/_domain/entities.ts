import { ProductEntity, ProductId } from "@/entities/product/product";
import { UserEntity } from "@/entities/user/_domain/types";
import { UserId } from "@/entities/user/user";

export type ReviewId = string;

export type ReviewEntity = {
  id: ReviewId;
  createdAt: Date;
  rating: string;
  text: string;
};

export interface Review extends ReviewEntity {
  userId: UserId;
  productId: ProductId;
}

export type CreateReviewCommand = {
  rating: string;
  text: string;
  userId: string;
  productId: string;
};

export type DeleteReviewCommand = {
  id: ReviewId;
};
