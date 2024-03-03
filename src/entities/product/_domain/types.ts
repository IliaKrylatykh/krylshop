type ProductId = string;

type Product = {
  id: string;
  createdAt: Date;
  name: string;
  slug: string;
  description: string;
  price: string;
  images: string[];
};

type CreateProductCommand = {
  name: string;
  slug: string;
  description: string;
  price: string;
  images: string[];
};

type DeleteProductCommand = {
  id: string;
};
