"use client"

import { useCart } from "@/features/cart";
import { CartBuy } from "../CartBuy/CartBuy";
import { CartList } from "../CartList/CartList";
import styles from './CartModal.module.scss'
import { useStore } from "@/app/store/store";
import { CloseButton } from "@/shared/ui";
import { useBlockingScroll } from "@/shared/hooks/useBlockingScroll";
import { MouseEvent } from "react";

export const CartModal = () => {
  const { isCartOpen, handleCartOpen, user } = useStore();
  const { data: carts } = useCart();

  useBlockingScroll(isCartOpen);

  return (
    <section className={`${styles.cart} ${isCartOpen ? styles.cartActive : ""}`} onClick={handleCartOpen}>
      <div className={styles.cartContainer} onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <CartList carts={carts} user={user} />

        { user?.id ? (
          <CartBuy carts={carts} />
        ) : (
          ""
        ) }

        <CloseButton handleClose={handleCartOpen} />
      </div>
    </section>
  );
}