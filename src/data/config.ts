// Config del demo: valores reales que cambian por campaña o por cliente, no por código.

export const whatsapp = {
  number: '5215500000000',
  message: 'Hola, me interesa Torre Aura Del Valle. ¿Me pueden dar más información?',
  mensajeVisita: 'Hola Andrea, quiero agendar una visita a Torre Aura Del Valle.',
};

export const whatsappHref = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`;
export const whatsappVisitaHref = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.mensajeVisita)}`;

export const selector = {
  // El selector 3D (aura-demo) todavía no está publicado: mientras tanto, "Elegir mi
  // departamento" abre WhatsApp. Cuando el selector tenga URL pública, cambia esto por ella.
  url: whatsappHref,
};
