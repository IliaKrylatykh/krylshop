"use client";

import { ROLES } from "@/entities/user/_domain/types";
import { useAppSession } from "@/entities/user/session";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { useTransition } from "react";
import Image from "next/image";
import { ProductEntity } from "@/entities/product/_domain/entities";

export function ProductItem({
  product,
  onDelete,
}: {
  product: ProductEntity;
  onDelete: () => Promise<void>;
}) {
  const session = useAppSession();
  const [isDeleteTransition, startDeleteTransition] = useTransition();

  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };

  const role = session.data?.user.role;

  return (
    <Card className="max-w-sm rounded overflow-hidden shadow-lg my-4">
      <CardHeader className="px-6 py-4">
        <CardTitle className="font-bold text-xl mb-2">{product.name}</CardTitle>
      </CardHeader>

      <div className="relative overflow-hidden w-full">
        <Image
          src={product.images}
          alt="Product image"
          width={600}
          height={400}
          className="w-full object-cover h-48"
        />
        <div className="absolute bottom-0 right-0 p-4 bg-black bg-opacity-50">
          <p className="text-white">{"$" + product.price}</p>
        </div>
      </div>
      <CardDescription className="text-base m-4">
        {product.description.length > 300
          ? `${product.description.substring(0, 200)}...`
          : product.description}
      </CardDescription>

      <CardFooter className="px-6 py-4">
        {role === ROLES.ADMIN && (
          <Button
            className={`inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${
              isDeleteTransition ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isDeleteTransition}
            onClick={handleDelete}
          >
            Delete
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
