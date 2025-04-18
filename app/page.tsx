import Hero from "../components/sections/hero/default";
import { MainNav } from "@/components/sections/navbar/default";
import LogoCloud from "@/components/sections/logo-carousel/logo-cloud";
import { BentoGridThirdDemo } from "@/components/sections/bentogrid/default";
import IntegrationsSection from "@/components/sections/integrations/integrations-7";
import Stats from "@/components/sections/stats/default";
import Features from "@/components/sections/features/features-12";
import Testimonials from "@/components/sections/testimotials/testimonials";
import FAQsFour from "@/components/sections/faqs/default";
import FooterSection from "@/components/sections/footer/default";
import CTA from "@/components/sections/cta/default";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <MainNav />
      <Hero />
      <LogoCloud />
      <BentoGridThirdDemo />
      <Stats />
      <IntegrationsSection />
      <Features />
      <Testimonials />
      <FAQsFour />
      <CTA />
      <FooterSection />
    </main>
  );
}