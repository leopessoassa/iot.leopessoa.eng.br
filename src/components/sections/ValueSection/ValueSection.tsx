/**
 * ValueSection — KPRemote
 *
 * Bloco 3: Os Três Pilares de Valor (por que se paga rápido)
 * Fundo: azul cobalto escuro (#132547)
 *
 * Estrutura de cada pilar:
 *  - Header: ícone (esq) + número ordinal decorativo (dir)
 *  - Título + subtítulo
 *  - Linha separadora
 *  - Bullets com traço accent
 *  - Alert tag: situação real de impacto
 *
 * Layout mobile-first:
 *  - Mobile: coluna única, gap 2px
 *  - Desktop 992px+: grid 3 colunas
 */
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import styles from './ValueSection.module.css';

interface Pillar {
  id: number;
  number: string;
  icon: string;
  title: string;
  subtitle: string;
  bullets: string[];
  alertTag: string;
}

const pillars: Pillar[] = [
  {
    id: 1,
    number: '01',
    icon: 'fa fa-shield-alt',
    title: 'Redução de Prejuízos',
    subtitle: 'Alertas antes que a mercadoria estrague',
    bullets: [
      'Aviso em segundos no WhatsApp e Telegram',
      'Histórico de temperatura por equipamento e por turno',
      'Alarme sonoro local + alerta remoto simultâneos',
      'Uma câmara quebrada pode custar R$ 30.000 a R$ 40.000 em descarte',
    ],
    alertTag: 'Freezer crítico às 3h — você é avisado antes do prejuízo.',
  },
  {
    id: 2,
    number: '02',
    icon: 'fa fa-balance-scale',
    title: 'Blindagem Jurídica',
    subtitle: 'Fim da exposição trabalhista',
    bullets: [
      'Elimina medições manuais em câmaras frias',
      'Registro automático substitui a planilha do funcionário',
      'Sem risco de acidente por exposição ao frio extremo',
      'Documentação inviolável válida em processos trabalhistas',
    ],
    alertTag: 'Zero funcionários na câmara fria às 2h da manhã.',
  },
  {
    id: 3,
    number: '03',
    icon: 'fa fa-clipboard-check',
    title: 'Conformidade Sanitária',
    subtitle: 'Relatórios prontos para a Vigilância',
    bullets: [
      'Exportação de relatório em PDF com 1 clique',
      'Histórico de até 12 meses disponível online',
      'Atende RDC 216/2004, RDC 430/2020 e BPF',
      'Multas de R$ 2 mil a R$ 1,5 milhão (Lei 6.437/77)',
    ],
    alertTag: 'Auditoria surpresa da VISA? Dados prontos em segundos.',
  },
];

export default function ValueSection() {
  return (
    <section className={styles.section} id="pilares">
      <div className="auto-container">

        <SectionTitle
          eyebrow="Por Que KPRemote"
          title="Três Problemas Reais.<br />Uma Solução que se Paga Rápido."
          subtitle="Cada pilar protege uma área diferente do negócio. Juntos, eliminam as três maiores fontes de prejuízo invisível na operação."
          align="center"
          light
          accentColor="blue"
        />

        <div className={styles.pillars}>
          {pillars.map((pillar) => (
            <div key={pillar.id} className={styles.pillar}>

              {/* Cabeçalho do card: ícone + número ordinal na mesma linha */}
              <div className={styles.pillarHeader}>
                <div className={styles.pillarIconWrap} aria-hidden="true">
                  <i className={`${pillar.icon} ${styles.pillarIcon}`} />
                </div>
                <span className={styles.pillarNumber} aria-hidden="true">
                  {pillar.number}
                </span>
              </div>

              {/* Títulos */}
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarSubtitle}>{pillar.subtitle}</p>

              {/* Linha separadora */}
              <div className={styles.pillarLine} aria-hidden="true" />

              {/* Bullets */}
              <ul className={styles.bullets}>
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className={styles.bullet}>
                    <span className={styles.bulletDash} aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Alert tag */}
              <div className={styles.alertTag}>
                <i className="fa fa-bolt" aria-hidden="true" />
                <span>{pillar.alertTag}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
