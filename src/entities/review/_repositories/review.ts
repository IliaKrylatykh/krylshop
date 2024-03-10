import { cache } from "react";
import {
  CreateReviewCommand,
  DeleteReviewCommand,
  ReviewEntity,
  ReviewId,
} from "../_domain/entities";
import { dbClient } from "@/shared/lib/db";

export class ReviewRepository {
  // getReviewsList = cache(
  //   (): Promise<ReviewEntity[]> => dbClient.review.findMany(),
  // );

  // getReviewById = cache(
  //   (reviewId: ReviewId): Promise<ReviewEntity> =>
  //     dbClient.review.findUniqueOrThrow({
  //       where: { id: reviewId },
  //     }),
  // );

  createReview = (command: CreateReviewCommand): Promise<ReviewEntity> => {
    return dbClient.review.create({
      data: command,
    });
  };

  deleteReviewElement = (command: DeleteReviewCommand) => {
    return dbClient.review.delete({
      where: {
        id: command.id,
      },
    });
  };
}

export const reviewRepository = new ReviewRepository();
