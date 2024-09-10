export interface Product {
  id?: string;
  name?: string;
  description?: string;
  originalPrice: number;
  discountedPrice?: number;
  discount: number;
}
