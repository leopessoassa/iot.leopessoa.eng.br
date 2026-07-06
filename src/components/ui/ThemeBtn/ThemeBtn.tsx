import styles from './ThemeBtn.module.css';

type BtnVariant =
  | 'primary'    // azul elétrico preenchido — CTA principal
  | 'outline'    // borda azul elétrico — CTA secundário
  | 'whatsapp'   // verde WhatsApp — CTA de conversão direta
  | 'alert';     // laranja-vermelho — urgência/alerta

interface ThemeBtnProps {
  href: string;
  label: string;
  variant?: BtnVariant;
  size?: 'default' | 'large' | 'small';
  external?: boolean;
  icon?: string;          // classe Font Awesome, ex: 'fab fa-whatsapp'
  className?: string;
}

export default function ThemeBtn({
  href,
  label,
  variant = 'primary',
  size = 'default',
  external = false,
  icon,
  className = '',
}: ThemeBtnProps) {
  const cls = [
    styles.btn,
    styles[variant],
    size !== 'default' ? styles[size] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a href={href} className={cls} {...linkProps}>
      {icon && <i className={`${icon} ${styles.icon}`} aria-hidden="true" />}
      {label}
    </a>
  );
}
