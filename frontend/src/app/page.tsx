import { About } from "@/widgets/about";
import { Features } from "@/widgets/features/ui/Features/Features";
import { Feedback } from "@/widgets/feedback";
import { Footer } from "@/widgets/footer/ui/Footer/Footer";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { ModalForm } from "@/widgets/modalForm";
import { Recipes } from "@/widgets/recipes/";
import { TakeAway } from "@/widgets/takeAway";

export default function Home() {
  return (
    <>
      <Header />
      <ModalForm />
      <main>
        <Hero />
        <About />
        <Features />
        <Recipes />
        <TakeAway />
        <Feedback />
      </main>
      <Footer/>
    </>
  );
}
