import { HeroSection } from "@/components/sections/HeroSection";
import { PromptDemoSection } from "@/components/sections/PromptDemoSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AiAgentsSection } from "@/components/sections/AiAgentsSection";
import { DashboardPreviewSection } from "@/components/sections/DashboardPreviewSection";
import { ProjectShowcaseSection } from "@/components/sections/ProjectShowcaseSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <HeroSection />
      <PromptDemoSection />
      <FeaturesSection />
      <AiAgentsSection />
      <DashboardPreviewSection />
      <ProjectShowcaseSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
