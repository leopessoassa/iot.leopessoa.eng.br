import type { NavItem } from '../types/navigation';

/**
 * Navegação do site KPRemote (iot.leopessoa.eng.br)
 * Landing page — todos os links são âncoras da mesma página
 */
export const navItems: NavItem[] = [
  { label: 'Como Funciona',    href: '/#solucao' },
  { label: 'Por Que KPRemote', href: '/#pilares' },
  { label: 'Segmentos',        href: '/#segmentos' },
  {
    label: 'leopessoa.eng.br ↗',
    href: 'https://leopessoa.eng.br',
    isExternal: true,
  },
  {
    label: 'Projeto Piloto →',
    href: '/#contato',
    isCta: true,
  },
];
