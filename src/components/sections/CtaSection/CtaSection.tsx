/**
 * CtaSection — KPRemote
 *
 * Bloco 4: Chamada para Ação — Projeto Piloto
 * Fundo: claro (#f4f4f2) — respiro após duas seções escuras
 *
 * Estrutura:
 *  - Copy: headline + texto + 3 passos do piloto + eliminação de objeções
 *  - CTA Box: botão WhatsApp + telefone + nota de localização
 *
 * Fonte dos textos: apresentação comercial Keepin (slide 8) + PDFs
 */
import ThemeBtn from '@/components/ui/ThemeBtn/ThemeBtn';
import { whatsappUrl, WHATSAPP_DISPLAY } from '@/utils/whatsapp';
import styles from './CtaSection.module.css';

const steps = [
  {
    number: '1',
    title: 'Visita do consultor',
    text: 'Leo visita sua operação e identifica os pontos críticos de monitoramento.',
  },
  {
    number: '2',
    title: 'Instalação limpa',
    text: 'Sensores instalados sem obras, sem furos, sem parar a operação.',
  },
  {
    number: '3',
    title: 'Você vê funcionando',
    text: 'Alertas no seu WhatsApp e relatório pronto — em até 2 semanas de piloto.',
  },
];

const objections = [
  { text: 'Sem contrato de fidelidade' },
  { text: 'Sem investimento inicial no piloto' },
  { text: 'Suporte direto com o engenheiro responsável' },
  { text: 'Relatório de prova gratuito ao final do teste' },
];

export default function CtaSection() {
  return (
    <section className={styles.section} id="contato">

      {/* Background layers — triângulo de transição Segments (escuro) → Cta (claro) */}
      <div className={styles.backgroundLayers} aria-hidden="true">
        <div className={styles.triangleOverlay} />
        <div className={styles.imageBg} />
      </div>

      <div className={styles.contentWrapper}>
        <div className="auto-container">
          <div className={styles.inner}>

          {/* ── Lado esquerdo — copy ──────────────────────── */}
          <div className={styles.copy}>

            <span className={styles.eyebrow}>
              Projeto Piloto Sem Compromisso
            </span>

            <h2 className={styles.headline}>
              Não Compre Nada Agora.{' '}
              <span className={styles.headlineAccent}>
                Deixe o Sistema Provar.
              </span>
            </h2>

            <p className={styles.text}>
              Implantamos o KPRemote nas suas câmaras mais críticas por{' '}
              <strong>duas semanas</strong>, sem custo. Você recebe os alertas,
              vê os relatórios e decide com dados na mão — não com promessa de
              vendedor.
            </p>

            {/* 3 passos do piloto */}
            <div className={styles.steps}>
              {steps.map((step) => (
                <div key={step.number} className={styles.step}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className={styles.stepContent}>
                    <strong className={styles.stepTitle}>{step.title}</strong>
                    <span className={styles.stepText}>{step.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Eliminação de objeções */}
            <ul className={styles.objectionList}>
              {objections.map((obj) => (
                <li key={obj.text} className={styles.objection}>
                  <i className="fa fa-check" aria-hidden="true" />
                  <span>{obj.text}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* ── Lado direito — CTA box ────────────────────── */}
          <div className={styles.ctaBox}>

            <p className={styles.ctaBoxLabel}>Projeto Piloto</p>

            <p className={styles.ctaBoxSub}>
              Pronto para<br />Proteger sua<br />Operação?
            </p>

            <div className={styles.ctaBoxLine} aria-hidden="true" />

            <ThemeBtn
              href={whatsappUrl(
                'Olá, Leo! Vi o site do KPRemote e quero conversar sobre um Projeto Piloto para minha empresa.'
              )}
              label="Iniciar Projeto Piloto"
              variant="whatsapp"
              size="large"
              external
              icon="fab fa-whatsapp"
            />

            <p className={styles.ctaBoxPhone}>
              ou chame diretamente:{' '}
              <a
                href={whatsappUrl('Olá, Leo!')}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBoxPhoneLink}
              >
                {WHATSAPP_DISPLAY}
              </a>
            </p>

            <div className={styles.ctaBoxMeta}>
              <div className={styles.ctaBoxMetaItem}>
                <i className="fa fa-map-marker-alt" aria-hidden="true" />
                <span>João Pessoa, PB — atendimento presencial</span>
              </div>
              <div className={styles.ctaBoxMetaItem}>
                <i className="fa fa-shield-alt" aria-hidden="true" />
                <span>Engenheiro Eletricista · CREA-PB ativo</span>
              </div>
              <div className={styles.ctaBoxMetaItem}>
                <i className="fa fa-clock" aria-hidden="true" />
                <span>Resposta em até 2 horas úteis</span>
              </div>
            </div>

          </div>

          </div>{/* fim inner */}
        </div>{/* fim auto-container */}
      </div>{/* fim contentWrapper */}
    </section>
  );
}
