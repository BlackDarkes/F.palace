import { About } from "@/widgets/about";
import { Features } from "@/widgets/features/ui/Features/Features";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Recipes } from "@/widgets/recipes/";
import { TakeAway } from "@/widgets/takeAway";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Recipes />
        <TakeAway />
      </main>
    </>
  );
}
