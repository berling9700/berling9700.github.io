
import { Project, SkillCategory, ExperienceItem } from './types.ts';

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
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'C#' },
      { name: 'Python' },
      { name: 'Java' },
      { name: 'Javascript' },
      { name: 'REST APIs' },
    ],
  },
  {
    category: 'Databases & Cloud',
    skills: [
      { name: 'Azure' },
      { name: 'Netlify' },
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Vercel' },
      { name: 'SSMS' },
      { name: 'MYSQL' },
    ],
  },
  {
    category: 'Tools & Methods',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'CI/CD' },
      { name: 'Agile/Scrum' },
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
    imageUrl: './images/Jeff.png',
    liveUrl: 'https://home-project-tracker.vercel.app/',
    repoUrl: 'https://github.com/berling9700/home-project-tracker',
  },
  {
    title: 'Budget Management Platform',
    description: 'A comprehensive financial tool for personal budget tracking. Includes features for expense logging, income tracking, financial goal setting, and insightful data visualizations.',
    tags: ['Blazor', 'C#', 'MySQL', 'Chart.js', 'Netlify'],
    imageUrl: './images/BudgetTracker.png',
    liveUrl: 'https://robby-berling-budgettracker.netlify.app/',
    repoUrl: 'https://github.com/berling9700/BudgetTracker',
  },
  {
    title: 'Legend of Zelda Custom Game',
    description: "A fan-made 2D adventure game inspired by 'The Legend of Zelda,' built with a custom C# engine and featuring pixel art, combat, and a puzzle-filled dungeon.",
    tags: ['C#', 'MonoGame', 'Game Development', 'Webpack'],
    imageUrl: './images/Zelda.png',
    repoUrl: 'https://github.com/berling9700/Zelda-Project',
  },
   {
    title: 'Interest Rate Tracker',
    description: 'A tool that monitors and tracks interest rates from various sources. It sends email notifications to users when significant rate changes occur.',
    tags: ['Node.js', 'Vercel', 'Next.JS', 'ReSend'],
    imageUrl: './images/InterestRateTracker.png',
    repoUrl: 'https://github.com/berling9700/mortgage-rate-tracker',
  },
];


export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Kimball Midwest',
    period: '2024 - Present',
    description: ['Facilitated the replacement of a deprecated software solution to improve system stability and save $40,000 yearly.', 'Mentored junior engineers and improved code quality by implementing a new testing strategy.', 'Designed a new database to integrate between legacy and future state systems to increase simplicity and scalability.', 'Developed new microservice applications to replace legacy systems and increase scalability.'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Kimball Midwest',
    period: '2022 - 2024',
    description: ['Designed REST APIs and UIs in Azure Cloud, enabling faster and more scalable product enhancements.', 'Migrated legacy APIs to a modern microservices architecture, improving performance and scalability.'],
  },
  {
    role: 'Web Developer Intern',
    company: 'JumpMind',
    period: '2020 - 2021',
    description: ['Optimized database structures and stored procedures, enhancing query performance and reducing load times.', 'Created a new lower environment for reliable testing and stable development.'],
  },
];