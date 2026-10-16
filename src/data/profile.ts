// Edita este archivo para actualizar tu información personal, experiencia, educación y skills.

export const profile = {
  name: 'Javier Quintana',
  roles: ['FullStack Developer', 'Quality Engineer'],
  summary:
    'Systems engineer and software developer with a strong focus on C# and .NET, experienced in developing, maintaining, and improving back-end applications and services. Actively involved in technical solution design, applying architectural best practices, SOLID principles, and quality standards to build scalable, maintainable, and secure systems.',
  birthday: 'August 15, 2004',
  location: 'Cartagena - Bolivar',
  address: 'Cartagena, Colombia',
  email: 'javierq150804@gmail.com',
  phone: '+57 3025358176',
  phoneHref: 'tel:+573025358176',
  github: 'https://github.com/JaviQD',
};

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  description: string;
};

// Ordenado del más reciente al más antiguo.
export const experience: TimelineItem[] = [
  {
    period: 'July 2024 - Present',
    title: 'Software Developer',
    place: 'Veneplast',
    description:
      'Develop an electronic POS invoicing system using C# and .NET, implementing Entity Framework for efficient data management and SQL Server as the database. The focus is on building robust, scalable solutions that optimize invoicing processes and ensure regulatory compliance.',
  },
  {
    period: 'December 2023 - June 2024',
    title: 'QA Automation',
    place: 'Facture BY Estela',
    description:
      'SQL · C# · .NET · Azure · Data Studio · Databases · Manual testing · Test cases · Selenium · Automated testing',
  },
  {
    period: 'August 2023 - December 2023',
    title: 'Software Quality Trainee',
    place: 'Facture BY Estela',
    description:
      'Internship as a Software Quality Engineer in a company that deals with electronic invoicing.',
  },
];

export const education: TimelineItem[] = [
  {
    period: '2023 - Present',
    title: 'Systems Engineering',
    place: 'Universidad del Sinú',
    description:
      'University where I study systems engineering, focused on software development.',
  },
  {
    period: '2021 - 2023',
    title: 'Systems Technology',
    place: 'Universidad del Sinú',
    description:
      'University where I studied systems technology, focused on software development.',
  },
  {
    period: '2009 - 2020',
    title: 'Elementary - High School',
    place: 'Institución Educativa José Manuel Rodríguez Torices INEM',
    description:
      'Educational institution where I completed my elementary and high school studies.',
  },
];

// level: 0 a 100
export const skills = [
  { name: '.NET', level: 80 },
  { name: 'SQL', level: 75 },
  { name: 'Angular', level: 60 },
  { name: 'React', level: 60 },
  { name: 'Docker', level: 50 },
  { name: 'Azure Devops', level: 80 },
  { name: 'Azure Portal', level: 60 },
  { name: 'Git', level: 75 },
];
