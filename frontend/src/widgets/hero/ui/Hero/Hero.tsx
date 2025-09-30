import { Container } from "@/shared/ui";
import { HeroInfo } from "../HeroInfo/HeroInfo";
import { HeroImage } from "../HeroImage/HeroImage";
import { HeroSocial } from "../HeroSocial/HeroSocial";
import { social } from "../../model/constants/social";

export const Hero = () => {
  return (
    <section>
      <Container>
        <div>
          <HeroInfo />
          <HeroSocial social={social} />
        </div>

        <HeroImage />
      </Container>
    </section>
  );
};
