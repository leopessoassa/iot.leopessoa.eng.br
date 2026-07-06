const WHATSAPP_PHONE = '5583982078702';

/**
 * Gera a URL correta para abrir o WhatsApp com mensagem pré-preenchida.
 * - Mobile (Android/iPhone): usa o scheme `whatsapp://` para abrir o app direto.
 * - Desktop: usa `https://wa.me/` para abrir o WhatsApp Web.
 *
 * Deve ser chamada dentro de componentes React (não em constantes de módulo),
 * pois avalia `navigator.userAgent` no momento da chamada.
 */
export function whatsappUrl(message: string): string {
  const text = encodeURIComponent(message);
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  return isMobile
    ? `whatsapp://send?phone=${WHATSAPP_PHONE}&text=${text}`
    : `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

/**
 * URL sem mensagem para abrir o WhatsApp diretamente.
 * - Mobile: abre o app via scheme nativo.
 * - Desktop: abre o WhatsApp Web.
 *
 * Deve ser chamada dentro de componentes React.
 */
export function whatsappBaseUrl(): string {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  return isMobile
    ? `whatsapp://send?phone=${WHATSAPP_PHONE}`
    : `https://wa.me/${WHATSAPP_PHONE}`;
}

/**
 * URL estática para uso em constantes de módulo, arrays de dados ou
 * qualquer contexto fora de componentes React.
 * Usa sempre `https://wa.me/` — funciona em todos os dispositivos via redirect.
 *
 * Para mensagem pré-preenchida estática, use:
 *   whatsappStaticUrl('Olá!')
 */
export function whatsappStaticUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_PHONE}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Número formatado para exibição */
export const WHATSAPP_DISPLAY = '(83) 98207-8702';
