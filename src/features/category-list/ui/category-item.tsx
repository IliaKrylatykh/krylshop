"use client";

import Image from "next/image";
import { CategoryEntity } from "@/entities/category/_domain/entities";
import { cn } from "@/shared/ui/utils";

export function CategoryItem({ category }: { category: CategoryEntity }) {
  return (
    <div className="relative overflow-hidden rounded-md flex-none w-full h-48 shadow-2xl">
      <Image
        src={category.image}
        alt={category.name}
        layout="fill"
        objectFit="cover"
        className={cn("transition-all hover:scale-105 ")}
      />
      <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50">
        <p className="text-white">{category.name}</p>
      </div>
    </div>
  );
}
