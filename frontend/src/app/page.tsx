import { About } from "@/widgets/about";
import { Features } from "@/widgets/features/ui/Features/Features";
import { Feedback } from "@/widgets/feedback";
import { Footer } from "@/widgets/footer/ui/Footer/Footer";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Recipes } from "@/widgets/recipes/";
import { TakeAway } from "@/widgets/takeAway";
import { lazy } from "react";

const LazyModalForm = lazy(() => import("@/widgets/modalForm"));
const LazyToastMessage = lazy(() => import("@/widgets/toastMessage"));

export default function Home() {
  return (
    <>
      <Header />
      <LazyModalForm />
      <LazyToastMessage />
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
