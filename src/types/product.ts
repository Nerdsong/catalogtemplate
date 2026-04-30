export type Product = {
  _id: string;
  name: string;
  slug: string;
  price?: number;
  description: string;
  category: string;
  imageUrl?: string;
};

export type CartProduct = Product & {
  quantity: number;
};
