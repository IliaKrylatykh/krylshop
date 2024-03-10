"use server";

import { CreateReviewCommand } from "@/entities/review/_domain/entities";
import { reviewRepository } from "@/entities/review/_repositories/review";
import { revalidatePath } from "next/cache";

export const createReviewAction = async (
  command: CreateReviewCommand,
  revalidatePagePath: string,
) => {
  await reviewRepository.createReview(command);
  revalidatePath(revalidatePagePath);
};
