import Link from "next/link";
import { ISocial } from "../../model/types/social.interface";
import styles from './HeroSocial.module.scss'

interface IHeroSocialProps {
  social: ISocial[];
}

export const HeroSocial = ({ social }: IHeroSocialProps) => {
  return (
    <ul className={styles.social}>
      {social.map(({ id, icon: Icon }) => (
        <li key={id}>
          <Link href="./" className={styles.socialItem}>
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
};
