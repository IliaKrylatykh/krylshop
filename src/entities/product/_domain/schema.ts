import { z } from "zod";

export const productSchema = z.object({
  // id: z.string(),
  // createdAt: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  price: z.string(),
  images: z.string(),
  userId: z.string(),
  categoryId: z.string(),
});
