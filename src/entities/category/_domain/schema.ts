import { z } from "zod";

export const categorySchema = z.object({
  // id: z.string(),
  // createdAt: z.string(),
  name: z.string(),
  // slug: z.string(),
  image: z.string(),
});
