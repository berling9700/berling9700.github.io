import React from 'react';
import { SKILLS_DATA } from '../constants';
import { SkillCategory } from '../types';

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="bg-zinc-800/50 rounded-lg p-6 ring-1 ring-zinc-700 hover:ring-indigo-400 transition-all duration-300">
    <h3 className="text-xl font-bold text-zinc-200 mb-4">{category.category}</h3>
    <ul className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <li
          key={skill.name}
          className="bg-zinc-700 text-indigo-300 text-sm font-medium px-3 py-1 rounded-full"
        >
          {skill.name}
        </li>
      ))}
    </ul>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-200 sm:text-4xl">
          Technical Skills
        </h2>
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
          A collection of technologies and tools I'm proficient with, continuously expanding my knowledge base.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {SKILLS_DATA.map((category) => (
          <SkillCard key={category.category} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;