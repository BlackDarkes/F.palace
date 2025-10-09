import { ICartItem } from "@/features/cart";
import { Button } from "@/shared/ui";

interface ICartBuyProps {
  carts: ICartItem[] | undefined;
}
  
export const CartBuy = ({ carts }: ICartBuyProps) => {
  return (
    <article>
      <div>
        <h3>Payment</h3>

        <ul>
          { carts?.map((cart) => (
            <li key={cart.id}>
              <p>{cart.product_name}</p>

              <p>{cart.price}</p>
            </li>
          )) }
        </ul>

        <p>total: {carts?.reduce((acum, cart) => acum + parseFloat(cart.price), 0)}</p>

        <Button>Buy</Button>
      </div>
    </article>
  );
}