import { Container } from "@/shared/ui";
import { FooterSecurity } from "../FooterSecurity/FooterSecurity";
import { FooterTitle } from "../FooterTitle/FooterTitle";
import { FooterLists } from "../FooterLists/FooterLists";
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerInfo}>
          <FooterTitle />

          <FooterLists />
        </div>

        <FooterSecurity />
      </Container>
    </footer>
  );
}