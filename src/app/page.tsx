'use client'

import Hero from "~/components/layout/hero";
import About from "~/components/layout/about";
import Ingredients from "~/components/layout/ingredients";
import Subscribe from "~/components/layout/subscribe";
import Footer from "~/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Ingredients />
      <Subscribe />
      <Footer />
    </>
  );
}
