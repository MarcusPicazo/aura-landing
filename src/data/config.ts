// Config del demo: valores reales que cambian por campaña o por cliente, no por código.

export const selector = {
  // Placeholder hasta tener la URL real del selector 3D.
  url: '#',
};

export const whatsapp = {
  number: '5215500000000',
  message: 'Hola, me interesa Torre Aura Del Valle. ¿Me pueden dar más información?',
};

export const whatsappHref = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`;
