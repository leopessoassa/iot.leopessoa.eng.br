export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;  // link para outro domínio
  isCta?: boolean;       // botão de destaque (Fale Comigo)
  isPartner?: boolean;   // link para site parceiro
};
