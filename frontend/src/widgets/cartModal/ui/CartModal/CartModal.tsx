"use client"

import { useCart } from "@/features/cart";
import { CartBuy } from "../CartBuy/CartBuy";
import { CartList } from "../CartList/CartList";

export const CartModal = () => {
  const { data: carts } = useCart();

  return (
    <section>
      <div>
        <CartList carts={carts} />

        <CartBuy carts={carts} />
      </div>
    </section>
  );
}