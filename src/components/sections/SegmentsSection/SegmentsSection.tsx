/**
 * SegmentsSection — KPRemote
 *
 * Seção "Para Quem É" — entre ValueSection e CtaSection
 * Fundo: escuro (#0d1f3c) — mantém ritmo claro/escuro do site
 *
 * Estrutura:
 *  - Título + subtítulo
 *  - Grid de segmentos: card com ícone, título, descrição e norma aplicável
 *  - Rodapé: frase de fechamento + CTA secundário
 *
 * Segmentos baseados nos PDFs da Keepin + apresentação comercial
 */
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import ThemeBtn from '@/components/ui/ThemeBtn/ThemeBtn';
import { whatsappUrl } from '@/utils/whatsapp';
import styles from './SegmentsSection.module.css';

interface Segment {
  icon: string;
  title: string;
  description: string;
  norm: string;     // norma sanitária aplicável
  normLabel: string;
}

const segments: Segment[] = [
  {
    icon: 'fa fa-store',
    title: 'Supermercados e Hipermercados',
    description:
      'Freezers, balcões de congelados, ilhas de laticínios e açougue. Uma falha no compressor durante o fim de semana pode zerar o estoque de toda uma seção.',
    norm: 'RDC 216/2004',
    normLabel: 'Boas Práticas — Alimentação',
  },
  {
    icon: 'fa fa-ice-cream',
    title: 'Sorveterias e Distribuidoras de Gelo',
    description:
      'O produto é a temperatura. Qualquer desvio acima de zero grau significa perda imediata e total — sem recuperação possível.',
    norm: 'RDC 43/2015',
    normLabel: 'Alimentos Congelados',
  },
  {
    icon: 'fa fa-drumstick-bite',
    title: 'Açougues, Peixarias e Casas de Carnes',
    description:
      'Ambiente com fiscalização sanitária rígida e produtos de alto risco microbiológico. Histórico de temperatura é exigido em auditorias da VISA.',
    norm: 'RDC 216/2004',
    normLabel: 'Boas Práticas — Alimentação',
  },
  {
    icon: 'fa fa-industry',
    title: 'Indústria Alimentícia e Câmaras Frias',
    description:
      'Armazenamento de perecíveis em larga escala. Sem monitoramento contínuo, uma falha silenciosa pode comprometer lotes inteiros antes do próximo turno.',
    norm: 'RDC 43/2015',
    normLabel: 'Alimentos Congelados e Cru',
  },
  {
    icon: 'fa fa-pills',
    title: 'Farmácias e Distribuidoras de Medicamentos',
    description:
      'Medicamentos termolábeis, vacinas e insulinas exigem controle rigoroso e registros auditáveis. A ANVISA pode interditar o setor por falha de documentação.',
    norm: 'RDC 430/2020',
    normLabel: 'Boas Práticas — Medicamentos',
  },
  {
    icon: 'fa fa-hospital',
    title: 'Hospitais, Laboratórios e Bancos de Sangue',
    description:
      'Hemoderivados, amostras biológicas e dietas hospitalares não admitem reação tardia. A falha não é só financeira — é um risco clínico direto ao paciente.',
    norm: 'RDC 978/2025',
    normLabel: 'Análises Clínicas — ANVISA',
  },
];

export default function SegmentsSection() {
  return (
    <section className={styles.section} id="segmentos">

      {/* Background layers — triângulo de transição Value (#132547) → Segments (#0d1f3c) */}
      <div className={styles.backgroundLayers} aria-hidden="true">
        <div className={styles.triangleOverlay} />
        <div className={styles.imageBg} />
      </div>

      <div className={styles.contentWrapper}>
        <div className="auto-container">

        <SectionTitle
          eyebrow="Para Quem É"
          title="Se Você Tem Perecíveis,<br />Você Tem Risco."
          subtitle="O KPRemote foi desenvolvido para operações onde o controle de temperatura não é opcional — é obrigação legal e condição de sobrevivência do negócio."
          align="center"
          accentColor="blue"
        />

        {/* Grid de segmentos */}
        <div className={styles.grid}>
          {segments.map((seg) => (
            <div key={seg.title} className={styles.card}>

              {/* Ícone */}
              <div className={styles.iconWrap} aria-hidden="true">
                <i className={`${seg.icon} ${styles.icon}`} />
              </div>

              {/* Conteúdo */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{seg.title}</h3>
                <p className={styles.cardText}>{seg.description}</p>
              </div>

              {/* Badge de norma */}
              <div className={styles.normBadge}>
                <span className={styles.normCode}>{seg.norm}</span>
                <span className={styles.normDivider} aria-hidden="true" />
                <span className={styles.normLabel}>{seg.normLabel}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Rodapé da seção */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Não encontrou seu segmento?{' '}
            <strong>Se você armazena perecíveis, o KPRemote serve para você.</strong>
          </p>
          <ThemeBtn
            href={whatsappUrl(
              'Olá, Leo! Quero saber se o KPRemote atende minha operação.'
            )}
            label="Falar com o Engenheiro"
            variant="outline"
            external
            icon="fab fa-whatsapp"
          />
        </div>

        </div>{/* fim auto-container */}
      </div>{/* fim contentWrapper */}
    </section>
  );
}
