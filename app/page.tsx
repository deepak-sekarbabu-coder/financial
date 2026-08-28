import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import SolutionsGrid from "@/components/SolutionsGrid";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import LifeInvestment from "@/components/LifeInvestment";
import ConsultationBanner from "@/components/ConsultationBanner";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueStrip />
        <RevealOnScroll>
          <AboutUs />
        </RevealOnScroll>
        <SolutionsGrid />
        <RevealOnScroll>
          <Products />
        </RevealOnScroll>
        <RevealOnScroll>
          <LifeInvestment />
        </RevealOnScroll>
        <RevealOnScroll>
          <ConsultationBanner />
        </RevealOnScroll>
      </main>
      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </>
  );
}
