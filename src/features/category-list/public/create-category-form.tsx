"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/ui/utils";
import { ProductImageField } from "../ui/image-field";
import { categorySchema } from "@/entities/category/category";
import { createCategoryAction } from "../_actions/create-category";

export function CreateCategoryForm({
  className,
  revalidatePagePath,
}: {
  className: string;
  revalidatePagePath: string;
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      image: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            createCategoryAction(data, revalidatePagePath);
          });
          form.reset();
        })}
        className={cn(
          className,
          "flex border-2 border-blue-300 rounded-md w-auto h-48",
        )}
      >
        <div className="flex flex-grow items-center space-x-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="name..." {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <ProductImageField
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="ml-auto py-2 px-4 bg-blue-500 text-white hover:bg-blue-700 disabled:opacity-50"
            type="submit"
            disabled={isCreateTransition}
          >
            Create category
          </Button>
        </div>
      </form>
    </Form>
  );
}
