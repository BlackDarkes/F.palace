import { INFORMATION } from "../../model/information";
import { OUR_INFO } from "../../model/ourMenu";
import { SOCIAL } from "../../model/social";
import { USERFULL_LINKS } from "../../model/usefullinks";
import { FooterList } from "../FooterList/FooterList";

export const FooterLists = () => {
  return (
    <div>
      <FooterList title="Our menu" points={OUR_INFO} />
      <FooterList title="Information" points={INFORMATION} />
      <FooterList title="Useful Links" points={USERFULL_LINKS} />
      <FooterList title="Social Handles" points={SOCIAL} isSocial={true} />
    </div>
  );
}