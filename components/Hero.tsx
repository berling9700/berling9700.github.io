
import React, { useEffect, useRef } from 'react';

// To inform TypeScript about the global tsParticles object from the CDN script
declare global {
  interface Window {
    tsParticles: any;
  }
}

const Hero: React.FC = () => {
  const particlesContainer = useRef<any>(null);

  useEffect(() => {
    if (window.tsParticles) {
      window.tsParticles.load('tsparticles', {
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1,
                color: '#ffffff', // Brighter hover connections
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: {
            value: '#c4b5fd', // Brighter particles (Tailwind's violet-300)
          },
          links: {
            color: '#818cf8', // Corresponds to Tailwind's indigo-400
            distance: 150,
            enable: true,
            opacity: 0,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 120,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 }, // Increased opacity for brighter effect
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }).then(container => {
        particlesContainer.current = container;
      });
    }
    return () => {
        if (particlesContainer.current) {
            particlesContainer.current.destroy();
            particlesContainer.current = null;
        }
    }
  }, []);


  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div id="tsparticles" className="absolute inset-0"></div>
      <div className="text-center relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-100 tracking-tight">
          Robby Berling
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-indigo-300 font-medium">
          Software Engineer & Creative Problem-Solver
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400">
          I build robust, scalable, and user-friendly web applications.
          Passionate about clean code, modern technologies, and bringing ideas to life.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="bg-indigo-400 text-zinc-900 font-bold py-3 px-8 rounded-md hover:bg-indigo-300 transition-all duration-300 shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-zinc-700/50 text-zinc-200 font-bold py-3 px-8 rounded-md hover:bg-zinc-600/50 transition-all duration-300 ring-1 ring-zinc-600"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;