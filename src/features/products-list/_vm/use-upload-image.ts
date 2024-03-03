import { selectFile, validateFileSize } from "@/shared/lib/file";
import { useMutation } from "@tanstack/react-query";
import { PRODUCT_IMAGE_FILE_KEY, PRODUCT_IMAGE_MAX_SIZE } from "../_constants";
import { uploadProductImageAction } from "../_actions/upload-image";

export const useUploadProductImage = ({
  onError,
  onSuccess,
}: {
  onError?: (type?: "big-size") => void;
  onSuccess?: (imagePath: string) => void;
}) => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: uploadProductImageAction,
    onSuccess(data) {
      onSuccess?.(data.image.path);
    },
  });

  const handleFileSelect = async () => {
    const file = await selectFile("image/*");

    if (!validateFileSize(file, PRODUCT_IMAGE_MAX_SIZE)) {
      return onError?.("big-size");
    }

    const formData = new FormData();

    formData.set(PRODUCT_IMAGE_FILE_KEY, file);

    await mutateAsync(formData);
  };

  return {
    isPending,
    handleFileSelect,
  };
};
