import { About } from "@/widgets/about";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
