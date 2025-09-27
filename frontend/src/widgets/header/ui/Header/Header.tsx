import { Container } from "@/shared/ui";
import Image from "next/image";

export const Header = () => {
  return (
    <section>
      <Container>
        <Image src={'/logo/logo.png'} alt="logo" width={110} height={30} />
      </Container>
    </section>
  );
}