import { Container } from "@/shared/ui";
import { TakeAwayImage } from "../TakeAwayImage/TakeAwayImage";
import { TakeAwayInfo } from "../TakeAwayInfo/TakeAwayInfo";
import { TAKE_AWAIT } from "../../model/takeAway";

export const TakeAway = () => {
  return (
    <section>
      <Container>
        <TakeAwayImage />

        <TakeAwayInfo takeAway={TAKE_AWAIT} />
      </Container>
    </section>
  );
}