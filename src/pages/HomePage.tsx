import HeroSection from '@/components/sections/HeroSection/HeroSection';
import SolutionSection from '@/components/sections/SolutionSection/SolutionSection';
import ValueSection from '@/components/sections/ValueSection/ValueSection';
import SegmentsSection from '@/components/sections/SegmentsSection/SegmentsSection';
import CtaSection from '@/components/sections/CtaSection/CtaSection';

export default function HomePage() {
  return (
    <>
      {/* Bloco 1 — A Promessa Central */}
      <HeroSection />

      {/* Bloco 2 — Como Funciona */}
      <SolutionSection />

      {/* Bloco 3 — Os Três Pilares de Valor */}
      <ValueSection />

      {/* Bloco 4 — Para Quem É */}
      <SegmentsSection />

      {/* Bloco 5 — Projeto Piloto */}
      <CtaSection />
    </>
  );
}
