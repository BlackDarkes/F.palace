import { Container } from "@/shared/ui";
import { AboutImage } from "../AboutImage/AboutImage";
import { AboutInfo } from "../AboutInfo/AboutInfo";
import { INFO } from "../../model/info";

export const About = () => {
  return (
    <section>
      <Container>
        <AboutImage />
        
        <AboutInfo info={INFO} />
      </Container>
    </section>
  );
}