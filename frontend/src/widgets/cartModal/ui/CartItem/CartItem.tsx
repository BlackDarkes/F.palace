import { ICartItem } from "@/features/cart";
import { CloseButton } from "@/shared/ui";
import Image from "next/image";
import styles from './CartItem.module.scss'

interface ICartItemProps {
  cart: ICartItem;
  cartDelete: (cartId: string) => void;
}
  
export const CartItem = ({ cart, cartDelete }: ICartItemProps) => {
  return (
    <li className={styles.item}>
      <article className={styles.itemInfo}>
        <Image src={`${process.env.API_URL}/${cart.image}`} alt={cart.product_name} width={80} height={80} />
        <div>
          <h3 className={styles.itemProduct}>{cart.product_name}</h3>
          <p className={styles.itemPrice}>{cart.price}$</p>
        </div>
      </article>

      <CloseButton className={styles.itemClose} handleClose={() => cartDelete(cart.id)} />
    </li>
  );
}