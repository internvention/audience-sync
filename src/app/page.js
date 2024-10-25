import Features from "@/components/features";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export const metadata = {
  title: 'Audience Sync',
  description:
    'Audience Sync is a marketing automation platform that helps you create personalized campaigns and audience segments for better engagement.',
}


export default function Home() {
  return (
    <>
      <Navbar />
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