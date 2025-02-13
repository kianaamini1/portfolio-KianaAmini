import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div className="project-card" onClick={() => navigate(`/projects/${project.id}`)}>
      <img src={project.image} alt={project.title} className="project-image" />
      <h2 className="project-title">{project.title}</h2>
      <p className="project-year">{project.year}</p>
    </div>
  );
}

