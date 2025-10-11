import { ICartItem } from "@/features/cart";
import { CartItem } from "../CartItem/CartItem";
import { IUser } from "@/shared/models/user.interface";

interface ICartListProps {
  carts: ICartItem[] | undefined;
  user: IUser | null;
}
  
export const CartList = ({ carts, user }: ICartListProps) => {
  if (!user) {
    return <p>Сначала авторизуйтесь!</p>;
  }
  
  if (carts?.length === 0) {
    return <p>Корзина пуста</p>;
  }

  return (
    <ul>
      { carts?.map((cart) => (
        <CartItem key={cart.id} cart={cart} />
      )) }
    </ul>
  )
}