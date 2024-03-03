import { Button } from "@/shared/ui/button";
import { Spinner } from "@/shared/ui/spinner";
import { useUploadProductImage } from "../_vm/use-upload-image";
import Image from "next/image";

export function ProductImageField({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (value?: string) => void;
}) {
  const { handleFileSelect, isPending } = useUploadProductImage({
    onSuccess: onChange,
  });

  return (
    <Button
      variant="ghost"
      className="w-[100px] h-[100px] p-0.5 relative block"
      type="button"
      onClick={handleFileSelect}
    >
      {isPending && (
        <div className="inset-0 absolute flex items-center justify-center z-10">
          <Spinner className="w-10 h-10" aria-label="New image" />
        </div>
      )}
      {value && (
        <Image src={value} alt="productImage" layout="fill" objectFit="cover" />
      )}
    </Button>
  );
}
