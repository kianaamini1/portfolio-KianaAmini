import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  if (!project) return null; // Prevents crashes if no project data

  return (
    <div 
      className="project-card" 
      onClick={() => navigate(`/projects/${project.id}`)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && navigate(`/projects/${project.id}`)}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image default-image" />
        {project.hoverImage && ( // Only show hover image if it exists
          <img src={project.hoverImage} alt={`${project.title} Hover`} className="project-image hover-image" />
        )}
      </div>
      <h2 className="project-title">{project.title}</h2>
      <p className="project-year">{project.year}</p>
    </div>
  );
}
