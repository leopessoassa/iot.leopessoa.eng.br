import { whatsappUrl, WHATSAPP_DISPLAY } from '@/utils/whatsapp';
import styles from './Footer.module.css';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* ── Widgets ─────────────────────────────────────────────────── */}
      <div className={styles.widgets}>
        <div className="auto-container">
          <div className={styles.grid}>

            {/* Coluna 1 — Identidade / Marca */}
            <div className={styles.col}>
              <a href="/" aria-label="KPRemote — início" className={styles.logoWrap}>
                <img
                  src="/images/logo.webp"
                  alt="KPRemote"
                  className={styles.logo}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <span className={styles.logoText}>
                  <strong>KP</strong>Remote
                </span>
              </a>

              <p className={styles.brandText}>
                Monitoramento ambiental IoT 24h para supermercados, câmaras frias
                e indústria alimentícia. Alertas no WhatsApp, relatórios
                automáticos para a Vigilância Sanitária.
              </p>

              <p className={styles.brandBy}>
                Uma solução{' '}
                <a
                  href="https://leopessoa.eng.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.brandByLink}
                >
                  Leo Pessoa Engenharia
                </a>
                {' '}· CREA-PB ativo
              </p>

              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/leopessoa.eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Leo Pessoa"
                  className={styles.socialLink}
                >
                  <i className="fab fa-instagram" aria-hidden="true" />
                </a>
                <a
                  href={whatsappUrl('Olá! Tenho interesse no KPRemote.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={styles.socialLink}
                >
                  <i className="fab fa-whatsapp" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Coluna 2 — Navegação */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Navegação</h3>
              <ul className={styles.navList}>
                <li>
                  <a href="/#solucao" className={styles.navLink}>Como Funciona</a>
                </li>
                <li>
                  <a href="/#pilares" className={styles.navLink}>Por Que KPRemote</a>
                </li>
                <li>
                  <a href="/#segmentos" className={styles.navLink}>Segmentos Atendidos</a>
                </li>
                <li>
                  <a href="/#contato" className={styles.navLink}>Projeto Piloto</a>
                </li>
                <li>
                  <a
                    href="https://leopessoa.eng.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.navLink}
                  >
                    Site Principal ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://parceiros.leopessoa.eng.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.navLink}
                  >
                    Para Arquitetos ↗
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3 — Contato */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Fale com o Engenheiro</h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>WhatsApp</span>
                  <span className={styles.contactSep} aria-hidden="true" />
                  <a
                    href={whatsappUrl('Olá! Tenho interesse no KPRemote.')}
                    className={styles.contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>E-mail</span>
                  <span className={styles.contactSep} aria-hidden="true" />
                  <a
                    href="mailto:contato@leopessoa.eng.br"
                    className={styles.contactLink}
                  >
                    contato@leopessoa.eng.br
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Local</span>
                  <span className={styles.contactSep} aria-hidden="true" />
                  <span className={styles.contactText}>João Pessoa, PB</span>
                </li>
              </ul>

              <a
                href={whatsappUrl(
                  'Olá, Leo! Quero saber mais sobre o Projeto Piloto do KPRemote para minha empresa.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaWhatsapp}
              >
                <i className="fab fa-whatsapp" aria-hidden="true" />
                Iniciar Projeto Piloto
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────── */}
      <div className={styles.bottom}>
        <div className="auto-container">
          <p className={styles.copyright}>
            © {year} KPRemote ·{' '}
            <a
              href="https://leopessoa.eng.br"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.copyrightLink}
            >
              Leo Pessoa Engenharia
            </a>
            {' '}· João Pessoa, PB
          </p>
        </div>
      </div>

    </footer>
  );
}
