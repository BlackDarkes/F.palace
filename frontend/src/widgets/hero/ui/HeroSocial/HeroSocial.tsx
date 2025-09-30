import { ISocial } from "../../model/types/social.interface";

interface IHeroSocialProps {
  social: ISocial[];
}

export const HeroSocial = ({ social }: IHeroSocialProps) => {
  return (
    <ul>
      {social.map(({ id, icon: Icon }) => (
        <li key={id}>
          <a href="./">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};
