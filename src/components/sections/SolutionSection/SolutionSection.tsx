/**
 * SolutionSection — KPRemote
 *
 * Bloco 2: A Solução — Como Funciona na Prática
 * Fundo: claro (#f4f4f2)
 *
 * Estrutura:
 *  - Os 3 Pilares: Inibição → Detecção → Ação  (linha conectora)
 *  - 6 capacidades técnicas em grid 3×2
 *  - Barra de entrega: WhatsApp / Telegram / Relatório Automático
 */
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import styles from './SolutionSection.module.css';

/* ── 3 Pilares ───────────────────────────────────────────────────────── */
interface Pillar {
  number: string;
  icon: string;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    number: '01',
    icon: 'fa fa-ban',
    title: 'Inibição',
    description:
      'Elimina falhas humanas no registro de temperaturas. Chega de planilha preenchida "para constar" no final do turno.',
  },
  {
    number: '02',
    icon: 'fa fa-satellite-dish',
    title: 'Detecção',
    description:
      'Sensores de alta precisão monitoram seus ambientes de 10 em 10 minutos — 24h por dia, 365 dias por ano, inclusive madrugada e domingo.',
  },
  {
    number: '03',
    icon: 'fa fa-bolt',
    title: 'Ação',
    description:
      'Alertas automáticos via WhatsApp e Telegram chegam em segundos. Você age antes do prejuízo, não depois.',
  },
];

/* ── 6 Capacidades ───────────────────────────────────────────────────── */
interface Capability {
  icon: string;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: 'fa fa-microchip',
    title: 'Sensores de Alta Precisão',
    description:
      'Projetados para câmaras frias, freezers e ambientes críticos de refrigeração.',
  },
  {
    icon: 'fa fa-plug',
    title: 'Instalação Plug-and-Play',
    description:
      'Dispositivos robustos sem necessidade de obras, furos ou downtime na operação.',
  },
  {
    icon: 'fa fa-lock',
    title: 'Criptografia Ponta a Ponta',
    description:
      'Segurança de dados desde a coleta até o dashboard. Seus dados são só seus.',
  },
  {
    icon: 'fa fa-chart-bar',
    title: 'Dashboard Centralizado',
    description:
      'Interface intuitiva e personalizável. Todos os seus ambientes em uma tela só.',
  },
  {
    icon: 'fa fa-mobile-alt',
    title: 'Acesso Remoto Total',
    description:
      'Monitore de qualquer lugar via smartphone, tablet ou computador — sem instalar app proprietário.',
  },
  {
    icon: 'fa fa-history',
    title: 'Backup e Histórico',
    description:
      'Histórico de até 12 meses disponível online, pronto para auditorias da Vigilância Sanitária.',
  },
];

/* ── Canais de entrega ───────────────────────────────────────────────── */
const deliveryChannels = [
  { icon: 'fab fa-whatsapp', label: 'Alertas no WhatsApp', color: 'whatsapp' },
  { icon: 'fab fa-telegram-plane', label: 'Alertas no Telegram', color: 'telegram' },
  { icon: 'fa fa-file-alt', label: 'Relatórios Automáticos', color: 'report' },
];

export default function SolutionSection() {
  return (
    <section className={styles.section} id="solucao">

      {/* Grafismo triangular — transição Hero → SolutionSection */}
      <div className={styles.triangleTop} aria-hidden="true" />

      <div className="auto-container">

        {/* ── Título ──────────────────────────────────────────── */}
        <SectionTitle
          eyebrow="Como Funciona"
          title="Seu Gerente de Conformidade<br />Trabalhando 24h por Dia"
          subtitle="A KPRemote opera em três pilares simultâneos. Enquanto sua equipe cuida das vendas, o sistema cuida dos riscos."
          align="center"
          accentColor="blue"
        />

        {/* ── Os 3 Pilares ────────────────────────────────────── */}
        <div className={styles.pillarsRow}>
          {pillars.map((pillar, idx) => (
            <div key={pillar.number} className={styles.pillarWrap}>
              {/* Card do pilar */}
              <div className={styles.pillarCard}>
                <div className={styles.pillarTop}>
                  <span className={styles.pillarNumber}>{pillar.number}</span>
                  <div className={styles.pillarIconWrap} aria-hidden="true">
                    <i className={`${pillar.icon} ${styles.pillarIcon}`} />
                  </div>
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.description}</p>
              </div>

              {/* Conector → entre pilares */}
              {idx < pillars.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <div className={styles.connectorLine} />
                  <i className={`fa fa-arrow-right ${styles.connectorArrow}`} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── 6 Capacidades técnicas ──────────────────────────── */}
        <div className={styles.capabilitiesBlock}>
          <p className={styles.capabilitiesLabel}>O que está incluso em cada instalação</p>
          <div className={styles.capabilitiesGrid}>
            {capabilities.map((cap) => (
              <div key={cap.title} className={styles.capCard}>
                <div className={styles.capIconWrap} aria-hidden="true">
                  <i className={`${cap.icon} ${styles.capIcon}`} />
                </div>
                <div>
                  <h4 className={styles.capTitle}>{cap.title}</h4>
                  <p className={styles.capText}>{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Canais de entrega ───────────────────────────────── */}
        <div className={styles.deliveryBar}>
          <span className={styles.deliveryLabel}>Alertas e relatórios entregues via:</span>
          <div className={styles.deliveryChannels}>
            {deliveryChannels.map((ch) => (
              <div key={ch.label} className={`${styles.deliveryChannel} ${styles[ch.color]}`}>
                <i className={`${ch.icon} ${styles.deliveryIcon}`} aria-hidden="true" />
                <span>{ch.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
