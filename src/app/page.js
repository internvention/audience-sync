import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}