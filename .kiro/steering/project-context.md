# Project Context — KPRemote (iot.leopessoa.eng.br)

## O que é este projeto

Landing page de alta conversão do **KPRemote**, solução de monitoramento ambiental IoT da Keepin, representada em João Pessoa, PB por **Leo Pessoa — Engenheiro Eletricista**. O objetivo da página é ser um "consultor de vendas digital 24h" — focado em negócios e dor do cliente, não em tecnicismo.

Público-alvo B2B: gerentes de operações, donos e diretores de supermercados, açougues, câmaras frias, farmácias e hospitais.

## Ecossistema de sites Leo Pessoa

| Domínio | Público | Paleta |
|---|---|---|
| `leopessoa.eng.br` | Redirecionador institucional | Chumbo quente + âmbar |
| `parceiros.leopessoa.eng.br` | Arquitetos e designers (B2B) | Azul petróleo + dourado |
| `casainteligente.leopessoa.eng.br` | Cliente final residencial (B2C) | Verde + laranja |
| `iot.leopessoa.eng.br` | Empresas c/ perecíveis (B2B IoT) | **Azul cobalto + azul elétrico** |

## Stack

- React 19 + TypeScript + Vite
- React Router DOM (single-page, só rota `/`)
- CSS Modules (zero frameworks CSS)
- Vitest (testes)

## Paleta de cores — KPRemote

Definida em `src/assets/styles/variables.css`:

```css
/* Fundos escuros */
--iot-bg-deep:    #0d1f3c   /* azul noite — hero, cta, footer */
--iot-bg-section: #132547   /* azul cobalto — ValueSection */
--iot-bg-overlay: rgba(13,31,60,0.92)

/* Accent primário — azul elétrico (CTAs, destaques, números) */
--iot-accent:      #00a8e8
--iot-accent-dark: #007fbf
--iot-accent-bg:   rgba(0,168,232,0.12)

/* Accent de alerta (dor, urgência, multas) */
--iot-alert:      #f0522a
--iot-alert-dark: #cc3e1a
--iot-alert-bg:   rgba(240,82,42,0.12)

/* Verde WhatsApp — fio condutor do ecossistema Leo Pessoa */
--iot-cta-green:  #59ab66
--color-whatsapp: #25d366

/* Seções claras */
--iot-bg-light:     #f4f4f2
--iot-bg-light-alt: #e8e6e2
```

## Estrutura de seções — ritmo claro/escuro

```
Header          → fixo, transparent → sticky azul profundo
  ↓
HeroSection     → ESCURO (#0d1f3c)  — A Promessa Central
SolutionSection → CLARO  (#f4f4f2)  — Como Funciona (3 pilares + 6 capacidades)
ValueSection    → ESCURO (#132547)  — Por Que KPRemote (3 pilares de negócio)
SegmentsSection → CLARO  (#f4f4f2)  — Para Quem É (6 segmentos de mercado)
CtaSection      → ESCURO (#0d1f3c)  — Projeto Piloto (copy + CTA box)
ClientsSection  → CLARO  (#f4f4f2)  — Quem Já Usa (carrossel de clientes)
Footer          → ESCURO (#0d1f3c)
```

O ritmo alternado ESCURO→CLARO é intencional e deve ser mantido.

---

## Sistema de triângulos de transição

Padrão herdado do ecossistema Leo Pessoa. Toda transição de cor usa grafismo triangular.

### Valores por breakpoint

| Breakpoint | `margin-top` | altura do triângulo | `section::before top` |
|---|---|---|---|
| mobile base | `-40px` | `40px` | `40px` |
| `768px+` | `-80px` | `80px` | `80px` |
| `992px+` | `-190px` | `120px` | `120px` |

Z-index incremental por seção: `SolutionSection=2 → Value=3 → Segments=4 → Cta=5 → Clients=6`

### JSX obrigatório em toda seção com triângulo

```tsx
<section className={styles.section}>
  <div className={styles.backgroundLayers} aria-hidden="true">
    <div className={styles.triangleOverlay} />
    <div className={styles.imageBg} />
  </div>
  <div className={styles.contentWrapper}>
    <div className="auto-container">
      {/* conteúdo */}
    </div>
  </div>
</section>
```

### ⚠️ Regra crítica de padding — sobreposição de conteúdo

**O triângulo da próxima seção avança N pixels para dentro da seção atual.** O conteúdo no final da seção atual (último botão, último card, último item) fica coberto se não houver `padding-bottom` suficiente.

**Fórmula:**
```
padding-bottom da seção atual = |margin-top da próxima| + respiro visual

mobile  (-40px):  padding-bottom mínimo = 80px   (40 overlap + 40 respiro)
768px   (-80px):  padding-bottom mínimo = 120px  (80 overlap + 40 respiro)
992px   (-190px): padding-bottom mínimo = 240px  (190 overlap + 50 respiro)
```

**Valores aplicados nas seções predecessoras:**

| Seção (predecessor) | pb mobile | pb 768px | pb 992px |
|---|---|---|---|
| `SolutionSection` | `80px` | `120px` | `240px` |
| `ValueSection` | `80px` | `120px` | `240px` |
| `SegmentsSection` | `80px` | `120px` | `240px` |
| `CtaSection` | `80px` | `120px` | `240px` |

**`HeroSection` é exceção:** usa `min-height: 100svh` com `align-items: center` — o conteúdo fica centralizado verticalmente, não no rodapé. Padding-bottom extra criaria espaço vazio desnecessário.

**`ClientsSection` não precisa:** é a última seção antes do Footer, que não tem triângulo de entrada.

> **Atenção:** Toda vez que adicionar conteúdo ao final de uma seção predecessora, ou alterar o `margin-top` de qualquer seção, recalcular o `padding-bottom` usando a fórmula acima.

### Toque accent nos triângulos decorativos

O triângulo decorativo secundário (canto direito) usa `rgba(0, 168, 232, 0.08~0.15)` — toque sutil do accent azul elétrico do KPRemote.

### Respiro do conteúdo após o triângulo (contentWrapper)

O `contentWrapper` tem `padding-top: 48px` em mobile para garantir que o conteúdo respire após a ponta do triângulo. Em `768px+` isso é zerado — o `padding` da `.section` já garante o respiro.

---

## Componentes e arquivos de conteúdo editável

| O que mudar | Arquivo |
|---|---|
| Menu de navegação | `src/data/navigation.ts` |
| Número WhatsApp | `src/utils/whatsapp.ts` — `WHATSAPP_PHONE` |
| Número formatado | `src/utils/whatsapp.ts` — `WHATSAPP_DISPLAY` |
| Imagens do hero | `HeroSection.tsx` — array `heroImages` |
| Pilares da solução | `SolutionSection.tsx` — arrays `pillars` e `capabilities` |
| Pilares de valor | `ValueSection.tsx` — array `pillars` |
| Segmentos | `SegmentsSection.tsx` — array `segments` |
| Passos do piloto | `CtaSection.tsx` — array `steps` |
| Clientes no carrossel | `ClientsSection.tsx` — array `clients` |

## Imagens do Hero — rotação aleatória

O `HeroSection` sorteia uma imagem a cada carregamento via `useMemo + Math.random()`.

Pool em `/public/images/hero/`:
```
hero-01.png — perecíveis premium em supermercado
hero-02.png — balcão refrigerado
hero-04.png — câmara fria inox
hero-05.png — dispositivo Smart IoT
hero-07.png — análise de monitoramento em tablet
```

Originais em `/public/referencias/apresentacao interativa/` — não usar diretamente na build.

## ClientsSection — carrossel de logos

Carrossel CSS puro via `@keyframes` (sem JS). Scroll infinito horizontal com fades laterais.

- Logos em `/public/images/clients/` (ainda não criada — usando placeholders textuais)
- Para ativar logo real: adicionar `src` e `alt` no objeto do array `clients`
- Logos: PNG fundo transparente, altura ~60px
- Grayscale no estado normal, cor no hover
- Respeita `prefers-reduced-motion`

---

## Regras de CSS — mobile-first obrigatório

**Todos os componentes usam mobile-first.** Nunca usar `max-width` media queries.

Breakpoints:
```
480px  — tablet pequeno
600px  — tablet
768px  — tablet largo
992px  — desktop
1200px — desktop largo
```

### Regras críticas aprendidas em produção

1. **Proof bar / grids com separadores:** nunca usar `<div>` de separador no DOM. Usar `border-right`/`border-left` CSS nos próprios itens.
2. **Números ordinais decorativos:** nunca `position: absolute` em mobile — colidem com o conteúdo. Usar `flex` row com `justify-content: space-between` e `opacity` baixa.
3. **Botões em mobile:** sem `white-space: nowrap`. O botão deve quebrar linha, não causar overflow.
4. **`overflow-x: hidden`** no `.page-wrapper`, não no `body` — evita quebrar `position: fixed`.
5. **`min-height: 100svh`** no hero — `svh` desconta a barra do browser no iOS.
6. **`padding-bottom` nas predecessoras:** ver fórmula de triângulo acima — regra mais crítica.
7. **`padding-top` no contentWrapper:** `48px` em mobile, zerado em `768px+`.

---

## Utilitário WhatsApp

`src/utils/whatsapp.ts` — nunca hardcodar número ou URL no componente.

```ts
whatsappUrl(message)      // dentro de componentes — detecta mobile/desktop
whatsappStaticUrl(msg?)   // fora de componentes (arrays, constantes)
WHATSAPP_DISPLAY          // '(83) 98207-8702'
```

## Fontes

- **Catamaran** — títulos, eyebrows, números ordinais, botões
- **Roboto** — corpo do texto

---

## Conteúdo de referência

Materiais da Keepin em `/public/referencias/` (não incluídos na build):
- `Folder - Keepin soluções Especialistas em IoT (4).pdf`
- `Folder - KPRemote - Serviços de Saúde.pdf`
- `apresentacao interativa/apresenta_o_comercial_premium.html` — 8 slides comerciais

### Dados-chave do produto

- Monitoramento de **10 em 10 minutos**, 24h/365 dias
- Redução comprovada de **70% das perdas** por desvios de temperatura
- Multas de **R$ 2 mil a R$ 1,5 milhão** (Lei 6.437/77)
- Uma câmara quebrada = **R$ 30.000 a R$ 40.000** em descarte
- Modelo **HaaS + SaaS** — mensalidade por equipamento, sem investimento inicial
- Instalação **sem obras, sem furos, sem downtime**
- Piloto de **2 semanas** sem custo nas câmaras mais críticas

### Normas sanitárias atendidas

| Norma | Aplicação |
|---|---|
| RDC 216/2004 | Boas Práticas para Serviços de Alimentação |
| RDC 43/2015 | Alimentos Congelados e Cru |
| RDC 430/2020 | Medicamentos — Distribuição, Armazenagem e Transporte |
| RDC 34/2014 | Hemoterapia |
| RDC 978/2025 | Análises Clínicas (EAC) |

### Competidores

- **Syos (SP/RJ)** — chatbot, custo alto, alertas só por e-mail/app proprietário
- **KPRemote diferencial:** presencial em JP, até 3x mais econômico, WhatsApp direto
