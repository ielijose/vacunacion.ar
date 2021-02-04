// global SEO config
const title = 'Estado y progreso vacunación COVID-19 Argentina 2021';
const description =
  'Consulta el estado y progreso de la vacunación del COVID-19 de forma diaria según datos del gobierno.';

const SEO = {
  title,
  description,
  canonical: 'https://vacunacion.ar',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://vacunacion.ar',
    title,
    description,
    images: [
      {
        url: 'https://vacunacion.ar/og.png',
        alt: title,
        width: 1200,
        height: 627,
      },
    ],
  },
  twitter: {
    handle: '@ielijose',
    site: '@ielijose',
    cardType: 'summary_large_image',
  },
};

export default SEO;
