// Config del demo: valores reales que cambian por campaña o por cliente, no por código.

export const selector = {
  // Local mientras desarrollamos (selector corriendo con npm run dev en aura-demo).
  // Al publicar en Vercel, cambiar por la URL real, p. ej. 'https://aura-demo.vercel.app/aura'.
  url: 'http://localhost:5173/aura',
};

export const whatsapp = {
  number: '5215500000000',
  message: 'Hola, me interesa Torre Aura Del Valle. ¿Me pueden dar más información?',
  mensajeVisita: 'Hola Andrea, quiero agendar una visita a Torre Aura Del Valle.',
};

export const whatsappHref = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`;
export const whatsappVisitaHref = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.mensajeVisita)}`;
