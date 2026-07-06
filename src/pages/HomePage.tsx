import HeroSection from '@/components/sections/HeroSection/HeroSection';
import SolutionSection from '@/components/sections/SolutionSection/SolutionSection';
import ValueSection from '@/components/sections/ValueSection/ValueSection';
import SegmentsSection from '@/components/sections/SegmentsSection/SegmentsSection';
import CtaSection from '@/components/sections/CtaSection/CtaSection';
import ClientsSection from '@/components/sections/ClientsSection/ClientsSection';

export default function HomePage() {
  return (
    <>
      {/* Bloco 1 — A Promessa Central */}
      <HeroSection />        {/* ESCURO  #0d1f3c */}

      {/* Bloco 2 — Como Funciona */}
      <SolutionSection />    {/* CLARO   #f4f4f2 */}

      {/* Bloco 3 — Os Três Pilares de Valor */}
      <ValueSection />       {/* ESCURO  #132547 */}

      {/* Bloco 4 — Para Quem É */}
      <SegmentsSection />    {/* CLARO   #f4f4f2 */}

      {/* Bloco 5 — Projeto Piloto */}
      <CtaSection />         {/* ESCURO  #0d1f3c */}

      {/* Bloco 6 — Quem já usa o KPRemote */}
      <ClientsSection />     {/* CLARO   #f4f4f2 */}
    </>
  );
}
