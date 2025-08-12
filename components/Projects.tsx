
import React from 'react';
import { PROJECTS_DATA } from '../constants.ts';
import ProjectCard from './ProjectCard.tsx';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a unique challenge and a learning opportunity.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
