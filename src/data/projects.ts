// Agrega aquí tus proyectos. Cada uno aparece en la sección "Projects".
//
//   name:        nombre del proyecto
//   description: una o dos frases sobre qué hace
//   type:        'web' o 'desktop'
//   link:        URL del sitio, del repositorio o de la descarga
//   linkLabel:   (opcional) texto del enlace, p. ej. 'Download installer'

export type Project = {
  name: string;
  description: string;
  type: 'web' | 'desktop';
  link: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    name: 'Gablú Beauty',
    description:
      'A static beauty catalog built with Next.js, TypeScript, and Tailwind CSS, where customers can browse products and place orders through WhatsApp. It also includes a mobile-friendly admin panel for managing products, variants, categories, and publishing catalog updates without a database.',
    type: 'web',
    link: 'https://gablubeauty.pages.dev/',
    linkLabel: 'Visit catalog',
  },
  {
    name: 'Bendito POS',
    description:
      'A multi-tenant point-of-sale system for small restaurants, covering dine-in, pickup, and delivery orders, kitchen tickets, payments, inventory, and shift reconciliation. Built with ASP.NET Core, React, and PostgreSQL, with tenant isolation enforced at both the application and database levels.',
    type: 'web',
    link: 'https://bendito-pos.pages.dev',
    linkLabel: 'Visit application',
  },
  {
    name: 'La Velada del Año V',
    description:
      'Contributed code and structural improvements to the official website for La Velada del Año V, a live boxing and entertainment event.',
    type: 'web',
    link: 'https://www.infolavelada.com/',
    linkLabel: 'Visit website',
  },
];
