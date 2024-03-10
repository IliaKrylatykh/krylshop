import { z } from "zod";

export const reviewSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  rating: z.string(),
  text: z.string(),
  userId: z.string(),
  productId: z.string(),
});
