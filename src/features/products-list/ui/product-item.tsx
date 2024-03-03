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
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>

      <Image
        src={product.images}
        alt="Product image"
        width={600}
        height={400}
      />

      <CardFooter>
        <CardDescription>{product.description}</CardDescription>
        <CardDescription>{product.price}</CardDescription>
        <CardDescription>{product.createdAt.toUTCString()}</CardDescription>
        {role === ROLES.ADMIN && (
          <Button disabled={isDeleteTransition} onClick={handleDelete}>
            Delete
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
