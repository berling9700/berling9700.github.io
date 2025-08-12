import React from 'react';
import { EXPERIENCE_DATA } from '../constants.ts';
import { ExperienceItem } from '../types.ts';

const TimelineItem: React.FC<{ item: ExperienceItem; isLast: boolean }> = ({ item, isLast }) => (
  <div className="relative">
    {/* The vertical line connecting timeline points. We check `isLast` to avoid drawing a line after the final item. */}
    {!isLast && <div className="absolute top-5 left-3.5 w-px h-full bg-zinc-700"></div>}
    <div className="relative flex items-start mb-12">
      <div className="absolute top-1 left-0 flex items-center justify-center w-8 h-8">
          <div className="bg-zinc-900 h-6 w-6 rounded-full flex items-center justify-center">
            <div className="h-3 w-3 bg-indigo-400 rounded-full ring-4 ring-zinc-900"></div>
          </div>
      </div>
      <div className="ml-12">
        <h3 className="text-xl font-bold text-zinc-200">{item.role}</h3>
        <p className="text-md font-medium text-indigo-300">{item.company}</p>
        <p className="text-sm text-zinc-500 mb-3">{item.period}</p>
        <ul className="text-zinc-400 list-disc list-outside ml-5 space-y-2">
            {item.description.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-200 sm:text-4xl">
          Work Experience
        </h2>
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
          My professional journey and key contributions in various roles.
        </p>
      </div>
      <div className="mt-16 max-w-3xl mx-auto">
        <div>
          {EXPERIENCE_DATA.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              isLast={index === EXPERIENCE_DATA.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;