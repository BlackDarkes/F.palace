import { About } from "@/widgets/about";
import { Features } from "@/widgets/features/ui/Features/Features";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
      </main>
    </>
  );
}
