import { CartType } from './type-cart';

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartType[];
  status: string;
  createdAt: string;
  intent_id?: string;
};
