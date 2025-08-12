import React from 'react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: GitHubIcon,
      url: 'https://github.com/berling9700',
    },
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      url: 'https://www.linkedin.com/in/robby-berling-b62483170/',
    },
  ];

  return (
    <footer id="contact" className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-200">Get In Touch</h2>
          <p className="mt-2 text-lg text-zinc-400">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
          <a
            href="mailto:berling9700@gmail.com"
            className="mt-6 inline-block text-xl font-medium text-indigo-300 hover:text-indigo-200 transition-colors"
          >
            berling9700@gmail.com
          </a>
          <div className="mt-8 flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-indigo-300 transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Robby Berling. All rights reserved.</p>
          <p className="mt-1">
            Designed and built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
