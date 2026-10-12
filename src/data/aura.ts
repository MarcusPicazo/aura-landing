import { selector, whatsappHref, whatsappVisitaHref } from './config';

export const brand = {
  name: 'Torre Aura Del Valle',
  tagline: 'Vivir en la luz de Del Valle',
};

export const links = {
  elegirDepartamento: selector.url,
  agendarVisita: whatsappHref,
  agendarVisitaAsesora: whatsappVisitaHref,
  avisoPrivacidad: '/privacidad',
};

export const nav = [
  { label: 'Tipologías', href: '#departamentos' },
  { label: 'Amenidades', href: '#amenidades' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Preguntas', href: '#preguntas' },
];

export type Parada = {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  poster: string;
  /** Clip que va de esta parada a la siguiente; la última parada no tiene. */
  clip?: string;
  /** Posición horizontal del encuadre en móvil (object-position X, 0-100). */
  focus?: number;
};

// Las 6 paradas del recorrido. `poster` es el primer fotograma de cada clip (ya generado
// aparte). `clip` lleva de esta parada a la siguiente; world.ts hace el scrub. La última
// parada no tiene `clip` porque no hay una parada después.
export const paradas: Parada[] = [
  {
    id: 'inicio',
    eyebrow: 'Torre Aura Del Valle · Preventa',
    heading: brand.tagline,
    body: 'Arquitectura contemporánea con la vida de barrio de una de las colonias más consolidadas de la Ciudad de México: calles arboladas, comercio de cercanía y conexión inmediata con Insurgentes.',
    poster: '/photos/0-aerea',
    clip: '/video/clip-1.mp4',
  },
  {
    id: 'entrada',
    eyebrow: 'Del Valle Centro, Benito Juárez',
    heading: 'Una colonia que ya tiene todo',
    body: 'Parque Hundido a 6 minutos caminando, Av. Insurgentes a 4, Plaza Del Valle a 5, el Metro Etiopía a 8 y el WTC a 10.',
    poster: '/photos/1-fachada',
    clip: '/video/clip-2.mp4',
  },
  {
    id: 'acceso',
    eyebrow: 'Acceso controlado',
    heading: 'Seguridad desde la puerta de entrada',
    body: 'Recepción y acceso controlado las 24 horas, con estacionamiento para visitas.',
    poster: '/photos/2-lobby',
    clip: '/video/clip-3.mp4',
  },
  {
    id: 'alberca',
    eyebrow: 'Amenidades',
    heading: 'Una alberca climatizada, todo el año',
    body: 'La primera de ocho amenidades pensadas para el día a día: alberca climatizada, gimnasio equipado, sala de coworking, roof garden con asadores, salón de juegos infantil, seguridad 24/7, estacionamiento para visitas y área pet friendly.',
    poster: '/photos/3-alberca',
    clip: '/video/clip-4.mp4',
  },
  {
    id: 'tipologias',
    eyebrow: 'Tipologías',
    heading: 'De una recámara a penthouse con terraza',
    body: 'Cinco tipologías de 62 a 180 m², desde un departamento de 1 recámara hasta el penthouse de 3 recámaras con terraza propia.',
    poster: '/photos/4-penthouse',
    clip: '/video/clip-5.mp4',
  },
  {
    id: 'cierre',
    eyebrow: 'Roof garden',
    heading: 'La luz de Del Valle, desde arriba',
    body: 'Diseñado para recibir la tarde: roof garden, asadores y una vista que no cambia de dueño.',
    poster: '/photos/5-terraza',
  },
];

export type Tipologia = {
  id: string;
  nombre: string;
  recamaras: number;
  m2Desde: number;
  m2Hasta?: number;
  precioDesde: number;
  resumen: string;
  interior: string;
  terraza?: boolean;
};

// Precio por m² estimado sobre la zona; no son cifras publicadas por ningún desarrollo real.
export const tipologias: Tipologia[] = [
  {
    id: 'b',
    nombre: 'Tipología B',
    recamaras: 1,
    m2Desde: 62,
    precioDesde: 3380000,
    resumen: 'Un dormitorio con sala comedor integrada y balcón hacia la calle.',
    interior: '/photos/extra/interiors/b/sala.webp',
  },
  {
    id: 'a',
    nombre: 'Tipología A',
    recamaras: 2,
    m2Desde: 85,
    precioDesde: 4580000,
    resumen: 'Dos recámaras, estudio y terraza chica con vista a los camellones arbolados.',
    interior: '/photos/extra/interiors/a/sala.webp',
  },
  {
    id: 'd',
    nombre: 'Tipología D',
    recamaras: 2,
    m2Desde: 92,
    precioDesde: 4970000,
    resumen: 'Dos recámaras en esquina, con doble vista y cocina separada.',
    interior: '/photos/extra/interiors/d/sala.webp',
  },
  {
    id: 'c',
    nombre: 'Tipología C',
    recamaras: 3,
    m2Desde: 120,
    precioDesde: 6250000,
    resumen: 'Tres recámaras, sala comedor amplia e isla de cocina para recibir.',
    interior: '/photos/extra/interiors/c/sala.webp',
  },
  {
    id: 'penthouse',
    nombre: 'Penthouse',
    recamaras: 3,
    m2Desde: 165,
    m2Hasta: 180,
    precioDesde: 9800000,
    resumen: 'Tres recámaras, doble altura en sala y terraza propia con vista a la ciudad.',
    interior: '/photos/4-penthouse.jpg',
    terraza: true,
  },
];

export type Amenidad = {
  nombre: string;
  icono: 'pool' | 'barbell' | 'laptop' | 'tree' | 'puzzle' | 'shield' | 'car' | 'paw';
  foto: string;
};

export const amenidades: Amenidad[] = [
  { nombre: 'Alberca climatizada', icono: 'pool', foto: '/photos/3-alberca' },
  { nombre: 'Gimnasio equipado', icono: 'barbell', foto: '/photos/extra/amenities/gimnasio.webp' },
  { nombre: 'Sala de coworking', icono: 'laptop', foto: '/photos/extra/amenities/coworking.webp' },
  { nombre: 'Roof garden con asadores', icono: 'tree', foto: '/photos/extra/amenities/roof-garden.webp' },
  { nombre: 'Ludoteca', icono: 'puzzle', foto: '/photos/extra/amenities/ludoteca.webp' },
  { nombre: 'Seguridad 24/7', icono: 'shield', foto: '/photos/2-lobby' },
  { nombre: 'Estacionamiento de visitas', icono: 'car', foto: '/photos/extra/amenities/estacionamiento.webp' },
  { nombre: 'Área pet friendly', icono: 'paw', foto: '/photos/extra/amenities/pet-friendly.webp' },
];

export const pagos = {
  enganchePct: 20,
  mensualidades: 18,
  ejemploPrecio: 6000000,
};

export const ubicacion = {
  colonia: 'Del Valle Centro, Benito Juárez',
  direccion: 'Pestalozzi 123, Del Valle Centro',
  codigoPostal: '03020, Ciudad de México',
  puntos: [
    { nombre: 'Parque Hundido', minutos: 6, modo: 'caminando' },
    { nombre: 'Av. Insurgentes', minutos: 4, modo: 'caminando' },
    { nombre: 'Plaza Del Valle', minutos: 5, modo: 'caminando' },
    { nombre: 'Metro Etiopía', minutos: 8, modo: 'caminando' },
    { nombre: 'WTC Ciudad de México', minutos: 10, modo: 'en auto' },
  ],
};

export type Faq = { pregunta: string; respuesta: string; pending?: string };

export const faqs: Faq[] = [
  {
    pregunta: '¿Cómo se aparta un departamento?',
    respuesta:
      'Se aparta con un pago de apartado y la firma de una carta de intención que fija la tipología, el precio y el plazo para firmar el contrato de compraventa.',
    pending: 'Confirmar el monto exacto del apartado y el plazo para pasar al contrato.',
  },
  {
    pregunta: '¿Qué pasa si se retrasa la obra?',
    respuesta:
      'El contrato de compraventa define los plazos de entrega y las compensaciones aplicables si la obra se retrasa frente a la fecha pactada.',
    pending: 'Confirmar la cláusula de penalización y el margen de tolerancia de este desarrollo.',
  },
  {
    pregunta: '¿Aceptan crédito hipotecario?',
    respuesta:
      'Sí. El saldo contra entrega puede cubrirse con crédito hipotecario bancario al momento de la escrituración.',
    pending: 'Confirmar si el desarrollo está precalificado con bancos o instituciones específicas.',
  },
  {
    pregunta: '¿Cuándo se entrega la torre?',
    respuesta: 'La entrega estimada es marzo de 2028, sujeta al avance de obra.',
  },
];

export const faqsPendientes = [
  '¿Se puede cambiar de tipología después de apartar? Falta confirmarlo con el área comercial.',
  '¿Infonavit o Fovissste son opciones de pago? Falta validar si el desarrollo está dado de alta.',
];

export const asesora = {
  nombre: 'Andrea Martínez',
  puesto: 'Asesora de ventas',
  iniciales: 'AM',
  horario: 'Lunes a sábado, 9:00 a 18:00',
};
