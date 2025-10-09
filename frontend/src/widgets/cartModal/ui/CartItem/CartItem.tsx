import { ICartItem } from "@/features/cart";
import { CloseButton } from "@/shared/ui";
import Image from "next/image";

interface ICartItemProps {
  cart: ICartItem;
}
  
export const CartItem = ({ cart }: ICartItemProps) => {
  return (
    <li>
      <article>
        <Image src={`${process.env.API_URL}/${cart.image}`} alt={cart.product_name} width={80} height={80} />
        <div>
          <h3>{cart.product_name}</h3>
          <p>{cart.price}$</p>
        </div>
      </article>

      <input type="text" name="" id="" />

      <CloseButton handleClose={() => {}} />
    </li>
  );
}