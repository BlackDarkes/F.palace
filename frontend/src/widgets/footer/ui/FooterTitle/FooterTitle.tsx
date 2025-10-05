import Link from "next/link";
import { Logo } from "@/shared/ui";
import IconMail from "../../assets/icons/mail.svg";
import IconWeb from "../../assets/icons/web.svg";

export const FooterTitle = () => {
  return (
    <ul>
      <li><Logo /></li>
      <li><IconMail /> <Link href={"mailto:info@food_palace.com"}>info@food_palace.com</Link></li>
      <li><IconWeb /> <Link href={"Www.Food_palace.com"}>Www.Food_palace.com</Link></li>
    </ul>
  );
}