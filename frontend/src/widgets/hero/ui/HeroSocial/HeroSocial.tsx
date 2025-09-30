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
          <a href="./" className={styles.socialItem}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};
