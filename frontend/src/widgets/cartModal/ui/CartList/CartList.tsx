import { ICartItem, useDeleteFromId } from "@/features/cart";
import { CartItem } from "../CartItem/CartItem";
import { IUser } from "@/shared/models/user.interface";
import styles from './CartList.module.scss'

interface ICartListProps {
  carts: ICartItem[] | undefined;
  user: IUser | null;
}
  
export const CartList = ({ carts, user }: ICartListProps) => {
  const { mutate } = useDeleteFromId();

  if (!user) {
    return <p className={styles.listError}>Сначала авторизуйтесь!</p>;
  }
  
  if (carts?.length === 0) {
    return <p className={styles.listError}>Корзина пуста</p>;
  }

  const cartDelete = (cartId: string) => {
    mutate(cartId)
  }

  return (
    <ul className={styles.list}>
      { carts?.map((cart) => (
        <CartItem key={cart.id} cart={cart} cartDelete={cartDelete} />
      )) }
    </ul>
  )
}