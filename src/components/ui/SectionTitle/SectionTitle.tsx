import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;        // texto claro (sobre fundo escuro)
  accentColor?: 'blue' | 'alert'; // cor do eyebrow / linha
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  accentColor = 'blue',
}: SectionTitleProps) {
  return (
    <div
      className={[
        styles.sectionTitle,
        styles[align],
        light ? styles.light : '',
        styles[accentColor],
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow && (
        <span className={styles.eyebrow}>{eyebrow}</span>
      )}
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
