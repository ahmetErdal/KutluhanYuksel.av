import React from 'react';
import ProjectCard from '../components/ProjectCard';
import VideoUpload from '../components/VideoUpload';
import projectsData from '../data/projects';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <VideoUpload />
      <div className="project-list">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;