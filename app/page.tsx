import { Poppins, Roboto } from "next/font/google";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
// import PricingSection from "@/components/landing/PricingSection";
import AboutUsSection from "@/components/landing/AboutUsSection";
import Footer from "@/components/landing/Footer";
// import FloatingButton from "@/components/landing/FloatingButton";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500"],
});

export default function Home() {
  return (
    <main
      className={`${poppins.variable} ${roboto.variable} font-sans bg-neutral-light`}
    >
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      {/* <PricingSection /> */}
      <AboutUsSection />
      <Footer />
      {/* <FloatingButton /> */}
    </main>
  );
}
