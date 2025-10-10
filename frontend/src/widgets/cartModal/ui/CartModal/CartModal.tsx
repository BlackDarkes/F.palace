"use client"

import { useCart } from "@/features/cart";
import { CartBuy } from "../CartBuy/CartBuy";
import { CartList } from "../CartList/CartList";
import styles from './CartModal.module.scss'
import { useStore } from "@/app/store/store";
import { CloseButton } from "@/shared/ui";
import { useBlockingScroll } from "@/shared/hooks/useBlockingScroll";

export const CartModal = () => {
  const { isCartOpen, handleCartOpen } = useStore();
  const { data: carts } = useCart();

  useBlockingScroll(isCartOpen);

  return (
    <section className={`${styles.cart} ${isCartOpen ? styles.cartActive : ""}`}>
      <div className={styles.cartContainer}>
        <CartList carts={carts} />

        <CartBuy carts={carts} />

        <CloseButton handleClose={handleCartOpen} />
      </div>
    </section>
  );
}