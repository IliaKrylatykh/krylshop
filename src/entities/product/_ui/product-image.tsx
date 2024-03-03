import Image from "next/image";
import { cn } from "@/shared/ui/utils";
import { Skeleton } from "@/shared/ui/skeleton";

export function ProductImage({
  className,
  src,
  alt,
}: {
  className?: string;
  src: string;
  alt: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <Skeleton className="w-full absolute inset-0" />
      {src && <Image fill src={src} alt={alt} />}
    </div>
  );
}
