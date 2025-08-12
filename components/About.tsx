import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-200 sm:text-4xl">
            About Me
          </h2>
          <div className="mt-6 space-y-6 text-zinc-400 text-lg">
            <p>
              Hello! I'm Robby, a software engineer with a passion for developing innovative solutions that make a difference. My journey into programming started years ago, and since then, I've been dedicated to honing my craft and staying up-to-date with the latest industry trends.
            </p>
            <p>
              I thrive on tackling complex challenges and enjoy the entire process of software development, from conceptualization and design to implementation and deployment. I believe in writing clean, maintainable, and efficient code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails, playing and watching sports, or reading a good book.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="./images/Me.jpg"
            alt="Robby Berling"
            className="rounded-full h-64 w-64 md:h-80 md:w-80 object-cover shadow-2xl border-4 border-zinc-700"
          />
        </div>
      </div>
    </section>
  );
};

export default About;