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
import TestImage from "@/shared/images/test.jpg";
import Image from "next/image";
import { cn } from "@/shared/ui/utils";

export function ProductItem({
  product,
  onDelete,
}: {
  product: Product;
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
      <div className="relative overflow-hidden rounded-md flex-none my-4  mx-auto w-3/4  h-[250px]">
        <Image
          src={TestImage}
          alt="test"
          layout="fill"
          objectFit="cover"
          className={cn("transition-all hover:scale-105")}
        />
      </div>
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
