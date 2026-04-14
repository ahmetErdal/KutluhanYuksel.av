import React from 'react';

const ProjectCard = ({ title, description, videoUrl }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="video-thumbnail">
        <video width="320" height="240" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ProjectCard;