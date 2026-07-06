/**
 * HeroSection — KPRemote
 *
 * Bloco 1: A Promessa Central
 * Fundo: azul noite (#0d1f3c) com overlay sobre imagem
 *
 * Estrutura:
 *  - Eyebrow: contexto de segmento + localização
 *  - Headline: promessa direta de proteção financeira
 *  - Subheadline: o custo real da cegueira de 21h
 *  - 2 CTAs: WhatsApp (principal) + âncora para a solução
 *  - Proof bar: 3 números que ancoram credibilidade
 *  - Alert badge: urgência operacional — elemento visual diferencial
 */
import ThemeBtn from '@/components/ui/ThemeBtn/ThemeBtn';
import { whatsappUrl } from '@/utils/whatsapp';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="inicio" aria-label="Seção principal">

      {/* ── Background ────────────────────────────────────────── */}
      <div className={styles.bgLayer} aria-hidden="true">
        <div
          className={styles.bgImage}
          style={{ backgroundImage: 'url(/images/background/hero-bg.webp)' }}
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* ── Conteúdo ──────────────────────────────────────────── */}
      <div className="auto-container">
        <div className={styles.content}>

          {/* Eyebrow */}
          <span className={styles.eyebrow}>
            KPRemote · Monitoramento IoT · João Pessoa, PB
          </span>

          {/* Headline */}
          <h1 className={styles.headline}>
            Sua câmara fria quebra{' '}
            <span className={styles.headlineAccent}>às 3h da manhã.</span>
            <br />
            Você é avisado{' '}
            <span className={styles.headlineAccent}>em segundos.</span>
          </h1>

          {/* Subheadline */}
          <p className={styles.subheadline}>
            Sua equipe mede temperatura 3 vezes por dia — e sua operação fica{' '}
            <strong>cega durante 21 horas</strong>. O KPRemote monitora seus
            freezers, câmaras e ambientes críticos 24h por dia e te avisa no
            WhatsApp antes que o prejuízo aconteça.
          </p>

          {/* Alert badge — urgência operacional */}
          <div className={styles.alertBadge} aria-label="Exemplo de alerta em tempo real">
            <span className={styles.alertDot} aria-hidden="true" />
            <span className={styles.alertText}>
              <strong>ALERTA ATIVO —</strong>{' '}
              Câmara de Congelados atingiu +4,8°C — limite excedido às 02:14
            </span>
          </div>

          {/* CTAs */}
          <div className={styles.ctaGroup}>
            <ThemeBtn
              href={whatsappUrl(
                'Olá, Leo! Vi o site do KPRemote e quero conversar sobre um Projeto Piloto para minha empresa.'
              )}
              label="Quero o Projeto Piloto"
              variant="whatsapp"
              size="large"
              external
              icon="fab fa-whatsapp"
            />
            <ThemeBtn
              href="#solucao"
              label="Ver Como Funciona"
              variant="outline"
              size="large"
            />
          </div>

          {/* Proof bar — sem dividers no DOM, separação via border CSS */}
          <div className={styles.proofBar}>
            <div className={styles.proofItem}>
              <strong className={styles.proofNumber}>24/7</strong>
              <span className={styles.proofLabel}>monitoramento contínuo</span>
            </div>
            <div className={styles.proofItem}>
              <strong className={styles.proofNumber}>10min</strong>
              <span className={styles.proofLabel}>entre cada leitura</span>
            </div>
            <div className={styles.proofItem}>
              <strong className={styles.proofNumber}>R$&thinsp;1,5M</strong>
              <span className={styles.proofLabel}>multa máxima Lei 6.437</span>
            </div>
            <div className={styles.proofItem}>
              <strong className={styles.proofNumber}>70%</strong>
              <span className={styles.proofLabel}>redução de perdas</span>
            </div>
          </div>

        </div>
      </div>

      {/* Seta de scroll */}
      <a
        href="#solucao"
        className={styles.scrollArrow}
        aria-label="Rolar para próxima seção"
      >
        <i className="fa fa-angle-down" aria-hidden="true" />
      </a>

    </section>
  );
}
