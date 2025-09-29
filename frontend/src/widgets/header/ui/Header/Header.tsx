import { Container } from "@/shared/ui";
import { NavList } from "../NavList/NavList";
import Image from "next/image";
import styles from './Header.module.scss'
import { Burger } from "../Burger/Burger";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Image src={"/logo/logo.png"} alt="logo" width={110} height={30} />

        <div className={styles.headerList}>
          <NavList />

          <Burger />
        </div>
      </Container>
    </header>
  );
};
