import Link from "next/link";
import { Logo } from "@/shared/ui";
import IconMail from "../../assets/icons/mail.svg";
import IconWeb from "../../assets/icons/web.svg";
import styles from './FooterTitle.module.scss'

export const FooterTitle = () => {
  return (
    <ul className={styles.info}>
      <li><Logo /></li>
      <li className={styles.infoLink}><IconMail /> <Link href={"mailto:info@food_palace.com"}>info@food_palace.com</Link></li>
      <li className={styles.infoLink}><IconWeb /> <Link href={"Www.Food_palace.com"}>Www.Food_palace.com</Link></li>
    </ul>
  );
}