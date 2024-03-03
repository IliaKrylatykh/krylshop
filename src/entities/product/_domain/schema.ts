import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  price: z.string(),
  images: z.array(z.string()),
});
