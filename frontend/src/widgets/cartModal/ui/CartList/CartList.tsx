import { ICartItem } from "@/features/cart";
import { CartItem } from "../CartItem/CartItem";

interface ICartListProps {
  carts: ICartItem[] | undefined;
}
  
export const CartList = ({ carts }: ICartListProps) => {
  return (
    <ul>
      { carts?.map((cart) => (
        <CartItem key={cart.id} cart={cart} />
      )) }
    </ul>
  );
}