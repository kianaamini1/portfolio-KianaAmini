import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  const projects = [
    {
      id: 'pettersson',
      title: 'Elias Pettersson: Power and Precision',
      image: '/images/peteymock2.png',
      year: 2024,
    },
    {
      id: 'aether',
      title: 'Aether Designer/Marketer',
      image: '/images/Onboard-full.jpg',
      year: 2024,
    },
    {
      id: 'hughes',
      title: 'Our Captain: Quinn Hughes',
      image: '/images/Hughes.jpg',
      year: 2025,
    },
    {
      id: 'billie-eilish',
      title: 'Hit Me Hard and Soft',
      image: '/images/Billie Eillish.jpg',
      year: 2025,
    },
    {
      id: 'fashion-photography',
      title: 'Fashion Photography',
      image: '/images/photo1.jpg',
      year: 2024,
    },
    {
      id: 'canavino-label',
      title: 'CanaVino: canned label',
      image: '/images/Can-cover.png',
      year: 2024,
    },
    {
      id: 'daydreaming-cover',
      title: 'Cover: Daydreaming-single',
      image: '/images/daydreaming.jpg',
      year: 2024,
    },
  ];

  return (
    <section id="work" className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
