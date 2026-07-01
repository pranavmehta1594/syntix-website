import React from 'react';
import Image from 'next/image';

const row1 = [
  { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
];

const row2 = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
  { name: 'Salesforce', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg' },
  { name: 'Ruby on Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
];

const row3 = [
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
];

export function TechStackSection() {
  return (
    <section className="technology-we-work techstack py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-title content mb-16">
          <h2 className="text-center max-w-6xl mx-auto text-2xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-6">
            Absolutely, We have thoroughly mastered the technologies you prefer.
          </h2>
          <p className="text-center text-zinc-600 max-w-3xl mx-auto text-lg md:text-xl">
            Our exceptionally skilled IT specialists are proficient in both classic and modern
            programming languages, as well as frameworks. We aim for excellence, choosing only the
            top-tier candidates when selecting our IT specialists.
          </p>
        </div>
      </div>

      <div className="technology-slider-wrap flex flex-col w-full">
        {/* Row 1 */}
        <div className="w-full mb-6">
          <div className="flex gap-6 marquee" style={{ cursor: 'grab' }}>
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {row1.map((tech, i) => (
                  <div key={`${tech.name}-${setIndex}-${i}`} className="w-fit shrink-0 flex items-center justify-center py-2.5 px-5 bg-white rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-row items-center gap-2.5">
                      <div className="h-5 w-5 relative flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={tech.icon} alt={tech.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <span className="text-zinc-700 font-medium text-sm whitespace-nowrap">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Reverse) */}
        <div className="w-full mb-6">
          <div className="flex gap-6 marquee-reverse" style={{ cursor: 'grab' }}>
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {row2.map((tech, i) => (
                  <div key={`${tech.name}-rev-${setIndex}-${i}`} className="w-fit shrink-0 flex items-center justify-center py-2.5 px-5 bg-white rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-row-reverse items-center gap-2.5">
                      <div className="h-5 w-5 relative flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={tech.icon} alt={tech.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <span className="text-zinc-700 font-medium text-sm whitespace-nowrap">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="w-full">
          <div className="flex gap-6 marquee" style={{ cursor: 'grab' }}>
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {row3.map((tech, i) => (
                  <div key={`${tech.name}-${setIndex}-${i}`} className="w-fit shrink-0 flex items-center justify-center py-2.5 px-5 bg-white rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-row items-center gap-2.5">
                      <div className="h-5 w-5 relative flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={tech.icon} alt={tech.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <span className="text-zinc-700 font-medium text-sm whitespace-nowrap">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
