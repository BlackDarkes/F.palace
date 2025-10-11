export interface ICartDto {
  userId: string;    // сервер использует userId, а не user_id
  productId: string; // сервер использует productId, а не product_id
  quantity: number;
}