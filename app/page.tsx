import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ConceptSection } from "@/components/concept-section";
import { QuestsSection } from "@/components/quests-section";
import { TokenomicsSection } from "@/components/tokenomics-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { WhitepaperSection } from "@/components/whitepaper-section";
import { FaqSection } from "@/components/faq-section";
import { FooterSection } from "@/components/footer-section";
import { StickyBottomBar } from "@/components/sticky-bottom-bar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ConceptSection />
        <QuestsSection />
        <TokenomicsSection />
        <RoadmapSection />
        <WhitepaperSection />
        <FaqSection />
      </main>
      <FooterSection />
      <StickyBottomBar />
    </>
  );
}
