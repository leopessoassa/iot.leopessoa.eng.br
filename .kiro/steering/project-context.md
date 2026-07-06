# Project Context — KPRemote (iot.leopessoa.eng.br)

## O que é este projeto

Landing page de alta conversão do **KPRemote**, solução de monitoramento ambiental IoT da Keepin, representada em João Pessoa, PB por **Leo Pessoa — Engenheiro Eletricista**. O objetivo da página é ser um "consultor de vendas digital 24h" — focado em negócios e dor do cliente, não em tecnicismo.

Público-alvo B2B: gerentes de operações, donos e diretores de supermercados, açougues, câmaras frias, farmácias e hospitais.

## Ecossistema de sites Leo Pessoa

| Domínio | Público | Paleta |
|---|---|---|
| `leopessoa.eng.br` | Redirecionador institucional | Neutro/petróleo |
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
--iot-bg-deep:    #0d1f3c   /* azul noite — hero, footer */
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

### Por que essa paleta

O azul cobalto (`#0d1f3c`) é da mesma família de temperatura que o petróleo do site de parceiros (`#0b1f2a`), mas visivelmente diferente — o visitante do site principal percebe que é uma área distinta. O azul elétrico (`#00a8e8`) remete a tecnologia, dashboard, monitoramento — linguagem visual universal de IoT/sensores.

## Estrutura de seções

```
Header (fixo, transparent → sticky)
  ↓
HeroSection         → escuro (#0d1f3c)   — A Promessa Central
SolutionSection     → claro  (#f4f4f2)   — Como Funciona (3 pilares + 6 capacidades)
ValueSection        → escuro (#132547)   — Por Que KPRemote (3 pilares de negócio)
SegmentsSection     → escuro (#0d1f3c)   — Para Quem É (6 segmentos)
CtaSection          → claro  (#f4f4f2)   — Projeto Piloto
Footer              → escuro (#0d1f3c)
```

## Arquivos de conteúdo editável

| O que mudar | Arquivo |
|---|---|
| Menu de navegação | `src/data/navigation.ts` |
| Número WhatsApp | `src/utils/whatsapp.ts` — `WHATSAPP_PHONE` |
| Número formatado | `src/utils/whatsapp.ts` — `WHATSAPP_DISPLAY` |
| Módulos da solução | `SolutionSection.tsx` — array `pillars` e `capabilities` |
| Pilares de valor | `ValueSection.tsx` — array `pillars` |
| Segmentos | `SegmentsSection.tsx` — array `segments` |
| Passos do piloto | `CtaSection.tsx` — array `steps` |

## Utilitário WhatsApp

`src/utils/whatsapp.ts` — centraliza toda a lógica. **Nunca hardcodar número ou URL no componente.**

```ts
whatsappUrl(message)      // dentro de componentes — detecta mobile/desktop
whatsappStaticUrl(msg?)   // fora de componentes (arrays, constantes de módulo)
WHATSAPP_DISPLAY          // número formatado para exibição: '(83) 98207-8702'
```

## Fontes

Carregadas no `index.html` via Google Fonts:
- **Catamaran** — títulos, eyebrows, números ordinais, botões
- **Roboto** — corpo do texto

## Regras de CSS — mobile-first obrigatório

**Todos os componentes usam mobile-first:** estilos base definem o comportamento mobile, e `@media (min-width: X)` escala para cima. **Nunca usar `max-width` media queries.**

Breakpoints padrão do projeto:
```
480px  — tablet pequeno
600px  — tablet
768px  — tablet largo
992px  — desktop
1200px — desktop largo
```

### Regras críticas aprendidas em produção

1. **Proof bar / grids com separadores:** nunca colocar elementos `<div>` de separador no DOM misturado com itens de conteúdo em um grid. Usar `border-right` / `border-left` CSS nos itens.
2. **Números ordinais decorativos:** nunca usar `position: absolute` para elementos decorativos em mobile — eles saem do fluxo e colidem com o conteúdo. Usar `flex` row com `justify-content: space-between` e `opacity` baixa.
3. **Botões em mobile:** remover `white-space: nowrap` do base do ThemeBtn. O botão deve quebrar linha, não causar overflow horizontal.
4. **`overflow-x: hidden`** no `.page-wrapper`, não no `body` — evita quebrar `position: fixed` dos elementos flutuantes (header sticky, scroll to top).
5. **`min-height: 100svh`** no hero em vez de `100vh` — `svh` desconta a barra do browser no iOS.

## Identidade compartilhada do ecossistema

Independente do site, manter:
- Fontes: **Catamaran + Roboto**
- Grafismo triangular entre seções (clip-path)
- `border-radius: 2px` nos elementos principais — cantos quase retos
- Verde `#59ab66` para checkmarks e CTAs WhatsApp em todos os sites

## Conteúdo de referência

Materiais da Keepin disponíveis em `/public/referencias/`:
- `Folder - Keepin soluções Especialistas em IoT (4).pdf` — institucional da fabricante
- `Folder - KPRemote - Serviços de Saúde.pdf` — versão para hospitais/farmácias
- `apresentacao interativa/apresenta_o_comercial_premium.html` — 8 slides de apresentação comercial para supermercados

### Dados-chave do produto (extraídos do material)

- Monitoramento de **10 em 10 minutos**, 24h/365 dias
- Redução comprovada de **70% das perdas** por desvios de temperatura
- Multas de **R$ 2 mil a R$ 1,5 milhão** (Lei 6.437/77)
- Uma câmara quebrada = **R$ 30.000 a R$ 40.000** em descarte (apresentação)
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

## Competidores mencionados no material

- **Syos (SP/RJ)** — atendimento por chatbot, custo alto, alertas só por e-mail e app proprietário
- **KPRemote diferencial:** suporte presencial em João Pessoa, até 3x mais econômico, alertas diretos no WhatsApp sem app proprietário
