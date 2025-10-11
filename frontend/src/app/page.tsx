import { About } from "@/widgets/about";
import { CartModal } from "@/widgets/cartModal";
import { Features } from "@/widgets/features";
import { Feedback } from "@/widgets/feedback";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Recipes } from "@/widgets/recipes/";
import { TakeAway } from "@/widgets/takeAway";
import { lazy } from "react";

const LazyModalForm = lazy(() => import("@/widgets/modalForm"));
const LazyToastMessage = lazy(() => import("@/widgets/toastMessage"));
const LazySearchModal = lazy(() => import("@/widgets/searchModal"))

export default function Home() {
  return (
    <>
      <Header />
      <LazyModalForm />
      <LazyToastMessage />
      <CartModal />
      <LazySearchModal />
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
