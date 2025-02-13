import React from 'react';
import { useParams } from 'react-router-dom';

const projectDetails = {
  pettersson: {
    title: 'Elias Pettersson: Power and Precision',
    description:
      'Created a striking poster of Elias Pettersson, inspired by his electrifying presence on the ice. The design features clean typography and bold visuals, capturing his energy and precision while resonating with Canucks fans.',
    image: '/images/elias-pettersson.png',
  },
  aether: {
    title: 'Aether Designer/Marketer',
    description: 'This project focused on creating an intuitive design system for marketing professionals.',
    image: '/assets/aether.png',
  },
  hughes: {
    title: 'Our Captain: Quinn Hughes',
    description: 'An artwork honoring the leadership of Quinn Hughes, combining dynamic photography and illustrations.',
    image: '/assets/hughes.png',
  },
};

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-page">
      <h1 className="project-page-title">{project.title}</h1>
      <p className="project-page-description">{project.description}</p>
      <img src={project.image} alt={project.title} className="project-page-image" />
    </div>
  );
}
