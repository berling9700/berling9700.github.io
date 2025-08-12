import React from 'react';
import { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-zinc-800/50 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:ring-2 hover:ring-indigo-400">
      <div className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-zinc-200 mb-2">{project.title}</h3>
        <p className="text-zinc-400 mb-4 text-base">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-zinc-700 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-indigo-300 transition-colors"
            >
              <ExternalLinkIcon className="h-5 w-5" />
              Live Demo
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-300 hover:text-indigo-300 transition-colors"
          >
            <GitHubIcon className="h-5 w-5" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;