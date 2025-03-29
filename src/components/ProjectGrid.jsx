import React from 'react';
import ProjectCard from './ProjectCard';


import petterssonImage from '../assets/images/default-petey.jpg';
import petterssonHoverImage from '../assets/images/elias-pettersson.png';
import aetherImage from '../assets/images/mockup1.jpg';
import aetherHoverImage from '../assets/images/Onboard-full.jpg';
import daydreamingImage from '../assets/images/daydreaming.jpg';
import daydreamingHoverImage from '../assets/images/vinyls copy.png';
import billieImage from '../assets/images/Billie Eillish.jpg';
import billieHoverImage from '../assets/images/billie-mock.jpg';
import hughesImage from '../assets/images/Hughes.jpg';
import hughesHoverImage from '../assets/images/ad2.png';
import fashionImage from '../assets/images/magazine-mock.png';
import canavinoImage from '../assets/images/Can-cover.png';
import canavinoHoverImage from '../assets/images/white2.png';
import white2 from '../assets/images/white2.png';

export default function ProjectGrid() {
  const projects = [
    {
      id: 'pettersson',
      title: 'Elias Pettersson: Power and Precision',
      image: petterssonImage,
      hoverImage: petterssonHoverImage,
      year: 2024,
    },
    {
      id: 'aether',
      title: 'Aether Designer/Marketer',
      image: aetherImage,
      hoverImage: aetherHoverImage,
      year: 2024,
    },
    {
      id: 'daydreaming-cover',
      title: 'Cover: Daydreaming-single',
      image: daydreamingImage,
      hoverImage: daydreamingHoverImage,
      year: 2024,
    },
    {
      id: 'billie-eilish',
      title: 'Hit Me Hard and Soft',
      image: billieImage,
      hoverImage: billieHoverImage,
      year: 2025,
    },
    {
      id: 'hughes',
      title: 'Quinn Hughes: Defining Legacy',
      image: hughesImage,
      hoverImage: hughesHoverImage,
      year: 2025,
    },
    {
      id: 'fashion-photography',
      title: 'Fashion Photography',
      image: fashionImage,
      hoverImage: fashionImage, 
      year: 2024,
    },
    {
      id: 'CanaVino',
      title: 'CanaVino: canned label',
      image: canavinoImage,
      hoverImage: white2, 
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
