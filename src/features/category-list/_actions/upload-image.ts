"use server";

import { z } from "zod";
import { PRODUCT_IMAGE_FILE_KEY } from "../_constants";
import { BadRequest } from "@/shared/lib/errors";
import { fileStorage } from "@/shared/lib/file-storage";

const resultSchema = z.object({
  image: z.object({
    path: z.string(),
  }),
});

export const uploadProductImageAction = async (formData: FormData) => {
  const file = formData.get(PRODUCT_IMAGE_FILE_KEY);

  if (!(file instanceof File)) {
    throw new BadRequest();
  }

  const storedFile = await fileStorage.uploadImage(file, "categoryImage");

  return resultSchema.parse({
    image: storedFile,
  });
};
