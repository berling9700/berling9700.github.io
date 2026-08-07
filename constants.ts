
import type { Project, SkillCategory, ExperienceItem } from './types.ts';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Vue.js' },
      { name: 'Vite' },
      { name: 'Knockout.js' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'C#' },
      { name: 'Python' },
      { name: 'Java' },
      { name: '.NET' },
      { name: 'Blazor' },
      { name: 'Node.js' },
      { name: 'Javascript' },
    ],
  },
  {
    category: 'Databases & Cloud',
    skills: [
      { name: 'Azure' },
      { name: 'AWS' },
      { name: 'Netlify' },
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Vercel' },
      { name: 'SQL Server' },
    ],
  },
  {
    category: 'Tools & Methods',
    skills: [
      { name: 'Event Grid' },
      { name: 'Service Bus' },
      { name: 'Git' },
      { name: 'CI/CD' },
      { name: 'Agile/Scrum' },
      { name: 'REST' },
      { name: 'Figma' },
      { name: 'Jira' },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'AI-Powered Home Project Application',
    description: 'An innovative platform that leverages AI to help users plan, visualize, and manage home improvement projects, featuring AI-driven design suggestions and material estimation.',
    tags: ['React', 'TypeScript', 'Gemini API', 'Vercel', 'Tailwind CSS'],
    imageUrl: '/images/Jeff.png',
    repoUrl: 'https://github.com/berling9700/home-project-tracker',
  },
  {
    title: 'Budget Management Platform',
    description: 'A comprehensive financial tool for personal budget tracking. Includes features for expense logging, income tracking, financial goal setting, and insightful data visualizations.',
    tags: ['Blazor', 'C#', 'MySQL', 'Chart.js', 'Netlify'],
    imageUrl: '/images/BudgetTracker.png',
    repoUrl: 'https://github.com/berling9700/BudgetTracker',
  },
  {
    title: 'Legend of Zelda Custom Game',
    description: "A fan-made 2D adventure game inspired by 'The Legend of Zelda,' built with a custom C# engine and featuring pixel art, combat, and a puzzle-filled dungeon.",
    tags: ['C#', 'MonoGame', 'Game Development', 'Webpack'],
    imageUrl: '/images/Zelda.png',
    repoUrl: 'https://github.com/berling9700/Zelda-Project',
  },
   {
    title: 'Interest Rate Tracker',
    description: 'A tool that monitors and tracks interest rates from various sources. It sends email notifications to users when significant rate changes occur.',
    tags: ['Node.js', 'Vercel', 'Next.JS', 'ReSend'],
    imageUrl: '/images/MortgageRate.png',
    repoUrl: 'https://github.com/berling9700/mortgage-rate-tracker',
  },
];


export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Kimball Midwest',
    period: '2024 - Present',
    description: ['Facilitated the replacement of a deprecated software solution to improve system stability and save $40,000 yearly.', 'Developed Azure-hosted C#/.NET microservice applications to replace legacy systems, improving scalability and maintainability.', 'Designed a new Microsoft Fabric data solution using Python Notebooks to support Power BI reporting and custom web applications.', 'Implemented event driven apps using Event Grid and Service Bus, decreasing response time by over 90%'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Kimball Midwest',
    period: '2022 - 2024',
    description: ['Designed REST APIs and UIs in Azure Cloud, enabling faster and more scalable product enhancements.', 'Led migration of on-premise applications to Azure Cloud, reducing infrastructure maintenance and improving deployment speed.', 'Diagnosed and resolved high-priority bugs in legacy applications, improving system stability.'],
  },
  {
    role: 'Web Developer Intern',
    company: 'JumpMind',
    period: '2020 - 2021',
    description: ['Optimized database structures and stored procedures, enhancing query performance and reducing load times.', 'Created a new lower environment for reliable testing and stable development.'],
  },
];