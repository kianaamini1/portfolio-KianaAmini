import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  const projects = [
    {
      id: 'pettersson',
      title: 'Elias Pettersson: Power and Precision',
      image: '/images/default-petey.jpg',
      hoverImage: '/images/elias-pettersson.png',
      year: 2024,
    },
    {
      id: 'aether',
      title: 'Aether Designer/Marketer',
      image: '/images/mockup1.jpg',
      hoverImage: '/images/Onboard-full.jpg',
      year: 2024,
    },
    {
      id: 'daydreaming-cover',
      title: 'Cover: Daydreaming-single',
      image: '/images/daydreaming.jpg',
      hoverImage: '/images/vinyls copy.png',
      year: 2024,
    },
    {
      id: 'billie-eilish',
      title: 'Hit Me Hard and Soft',
      image: '/images/Billie Eillish.jpg',
      hoverImage: '/images/billie-mock.jpg',
      year: 2025,
    },
    {
      id: 'hughes',
      title: 'Quinn Hughes: Defining Legacy',
      image: '/images/Hughes.jpg',
      hoverImage: '/images/ad2.png',
      year: 2025,
    },
    {
      id: 'fashion-photography',
      title: 'Fashion Photography',
      image: '/images/photo1.jpg',
      hoverImage: '/images/magazine-mock.png',
      year: 2024,
    },
    {
      id: 'canavino-label',
      title: 'CanaVino: canned label',
      image: '/images/Can-cover.png',
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
