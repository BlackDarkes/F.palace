import { ICartItem } from "@/features/cart";
import { Button } from "@/shared/ui";
import styles from './CartBuy.module.scss'

interface ICartBuyProps {
  carts: ICartItem[] | undefined;
}
  
export const CartBuy = ({ carts }: ICartBuyProps) => {
  return (
    <article className={styles.buy}>
      <div className={styles.buyContainer}>
        <h3 className={styles.buyPayment}>Payment</h3>

        <ul className={styles.buyListPrice}>
          { carts?.map((cart) => (
            <li key={cart.id} className={styles.buyListItem}>
              <h4 className={styles.buyProductName}>{cart.product_name}</h4>

              <p>{cart.price}$</p>
            </li>
          )) }
        </ul>

        <p>Total: {carts?.reduce((acum, cart) => acum + parseFloat(cart.price), 0).toFixed(2)}$</p>

        <Button>Buy</Button>
      </div>
    </article>
  );
}