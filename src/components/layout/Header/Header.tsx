import { useEffect, useState } from 'react';
import { navItems } from '@/data/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-visible', mobileOpen);
    return () => document.body.classList.remove('mobile-menu-visible');
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* ── Header ────────────────────────────────────────────────────── */}
      <header
        className={`${styles.header} ${sticky ? styles.sticky : ''}`}
        role="banner"
      >
        <div className={styles.inner}>

          {/* Logo — fallback texto enquanto imagem não existe */}
          <a href="/" className={styles.logo} aria-label="KPRemote — Página inicial">
            <img
              src="/images/logo.webp"
              alt="KPRemote"
              className={styles.logoImg}
              onError={(e) => {
                // fallback: esconde a imagem e mostra o texto
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className={styles.logoText} aria-hidden="true">
              <strong>KP</strong>Remote
            </span>
          </a>

          {/* Nav desktop */}
          <nav className={styles.nav} aria-label="Menu principal">
            <ul className={styles.navList} role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${item.isCta ? styles.navCta : ''}`}
                    {...(item.isExternal
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Toggler mobile */}
          <button
            className={styles.toggler}
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileOpen ? 'true' : 'false'}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>

      {/* ── Overlay mobile ────────────────────────────────────────────── */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ''}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* ── Drawer mobile ─────────────────────────────────────────────── */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        aria-label="Menu de navegação mobile"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? true : undefined}
      >
        <div className={styles.mobileHeader}>
          {/* Logo texto no drawer */}
          <span className={styles.mobileLogoText}>
            <strong>KP</strong>Remote
          </span>
          <button
            className={styles.mobileClose}
            onClick={closeMobile}
            aria-label="Fechar menu"
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </div>

        <ul className={styles.mobileNav} role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`${styles.mobileLink} ${item.isCta ? styles.mobileCta : ''}`}
                onClick={closeMobile}
                {...(item.isExternal
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Rodapé do drawer — identificação */}
        <div className={styles.mobileFooter}>
          <p className={styles.mobileFooterText}>
            KPRemote by{' '}
            <a
              href="https://leopessoa.eng.br"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileFooterLink}
            >
              Leo Pessoa Engenharia
            </a>
          </p>
        </div>
      </nav>
    </>
  );
}
