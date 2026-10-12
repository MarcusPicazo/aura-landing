import { selector, whatsappHref } from './config';

export const brand = {
  name: 'Torre Aura Del Valle',
  tagline: 'Vivir en la luz de Del Valle',
};

export const links = {
  elegirDepartamento: selector.url,
  agendarVisita: whatsappHref,
};

export type Parada = {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  poster: string;
  /** Posición horizontal del encuadre en móvil (object-position X, 0-100). */
  focus?: number;
};

// Las 6 paradas del recorrido. `poster` es el primer fotograma de cada clip (ya generado
// aparte); por ahora el recorrido corre solo con estas fotos, zoom suave y fundido entre
// paradas. Cuando lleguen los videos, cada parada suma un `clip` y world.ts los usa igual.
export const paradas: Parada[] = [
  {
    id: 'inicio',
    eyebrow: 'Torre Aura Del Valle · Preventa',
    heading: brand.tagline,
    body: 'Arquitectura contemporánea con la vida de barrio de una de las colonias más consolidadas de la Ciudad de México: calles arboladas, comercio de cercanía y conexión inmediata con Insurgentes.',
    poster: '/photos/0-aerea',
  },
  {
    id: 'entrada',
    eyebrow: 'Del Valle Centro, Benito Juárez',
    heading: 'Una colonia que ya tiene todo',
    body: 'Parque Hundido a 6 minutos caminando, Av. Insurgentes a 4, Plaza Del Valle a 5, el Metro Etiopía a 8 y el WTC a 10.',
    poster: '/photos/1-fachada',
  },
  {
    id: 'acceso',
    eyebrow: 'Acceso controlado',
    heading: 'Seguridad desde la puerta de entrada',
    body: 'Recepción y acceso controlado las 24 horas, con estacionamiento para visitas.',
    poster: '/photos/2-lobby',
  },
  {
    id: 'alberca',
    eyebrow: 'Amenidades',
    heading: 'Una alberca climatizada, todo el año',
    body: 'La primera de ocho amenidades pensadas para el día a día: alberca climatizada, gimnasio equipado, sala de coworking, roof garden con asadores, salón de juegos infantil, seguridad 24/7, estacionamiento para visitas y área pet friendly.',
    poster: '/photos/3-alberca',
  },
  {
    id: 'tipologias',
    eyebrow: 'Tipologías',
    heading: 'De una recámara a penthouse con terraza',
    body: 'Cinco tipologías de 62 a 180 m², desde un departamento de 1 recámara hasta el penthouse de 3 recámaras con terraza propia.',
    poster: '/photos/4-penthouse',
  },
  {
    id: 'cierre',
    eyebrow: 'Roof garden',
    heading: 'La luz de Del Valle, desde arriba',
    body: 'Diseñado para recibir la tarde: roof garden, asadores y una vista que no cambia de dueño.',
    poster: '/photos/5-terraza',
  },
];
