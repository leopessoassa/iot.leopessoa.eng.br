/**
 * ClientsSection — KPRemote
 *
 * Fundo: CLARO (#f4f4f2) — separa CtaSection escura do Footer escuro
 * Transição: CtaSection escuro (#0d1f3c) → ClientsSection claro (#f4f4f2)
 *
 * Estrutura:
 *  - Eyebrow + título curto de prova social
 *  - Carrossel infinito de logos de clientes (CSS scroll animation)
 *  - Sem JS, sem biblioteca — animação pura via @keyframes
 *
 * Para adicionar logos reais:
 *  1. Colocar os arquivos em /public/images/clients/
 *  2. Substituir o array `clients` abaixo com { id, src, alt }
 *  3. Remover a prop `name` e o `.clientName` do JSX/CSS
 */
import styles from './ClientsSection.module.css';

interface Client {
  id: number;
  name: string;       // nome do cliente (exibido como placeholder)
  src?: string;       // caminho do logo (quando disponível)
  alt?: string;
}

// Clientes reais serão adicionados após coleta dos logos.
// Por ora, exibe o nome do estabelecimento como texto.
const clients: Client[] = [
  { id: 1,  name: 'Supermercado Bom Preço' },
  { id: 2,  name: 'Açougue Central' },
  { id: 3,  name: 'Distribuidora Polar' },
  { id: 4,  name: 'Farmácia Saúde Total' },
  { id: 5,  name: 'Sorveteria Gelatti' },
  { id: 6,  name: 'Peixaria do Mar' },
  { id: 7,  name: 'Hipermercado Norte' },
  { id: 8,  name: 'Lab Análises JP' },
];

// Duplica para criar loop visual perfeito
const track = [...clients, ...clients];

export default function ClientsSection() {
  return (
    <section className={styles.section} aria-label="Clientes KPRemote">

      {/* Triângulo de transição CtaSection (escuro) → ClientsSection (claro) */}
      <div className={styles.backgroundLayers} aria-hidden="true">
        <div className={styles.triangleOverlay} />
        <div className={styles.imageBg} />
      </div>

      <div className={styles.contentWrapper}>

        {/* Cabeçalho */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Quem já protege a operação</span>
          <p className={styles.subtitle}>
            Empresas que pararam de depender de planilha e passaram a dormir tranquilas.
          </p>
        </div>

        {/* Carrossel infinito — overflow oculto, scroll via CSS */}
        <div className={styles.carouselWrap} aria-hidden="true">
          {/* Fades laterais para suavizar as bordas */}
          <div className={styles.fadeLeft}  aria-hidden="true" />
          <div className={styles.fadeRight} aria-hidden="true" />

          <div className={styles.track}>
            {track.map((client, idx) => (
              <div key={`${client.id}-${idx}`} className={styles.item}>
                {client.src ? (
                  <img
                    src={client.src}
                    alt={client.alt ?? client.name}
                    className={styles.logo}
                    loading="lazy"
                  />
                ) : (
                  /* Placeholder textual enquanto logos não chegam */
                  <span className={styles.clientName}>{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Nota de rodapé */}
        <p className={styles.note}>
          <i className="fa fa-lock" aria-hidden="true" />
          {' '}Dados de clientes protegidos por sigilo comercial
        </p>

      </div>
    </section>
  );
}
