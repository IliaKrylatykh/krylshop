export type ProductId = string;
export type ProductSlug = string;

export type ProductEntity = {
  id: ProductId;
  createdAt: Date;
  name: string;
  slug: ProductSlug;
  description: string;
  price: string;
  images: string;
};

export type CreateProductCommand = {
  name: string;
  slug: ProductSlug;
  description: string;
  price: string;
  images: string;
};

export type DeleteProductCommand = {
  id: ProductId;
};
