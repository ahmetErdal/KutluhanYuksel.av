import React from 'react';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'VR Adventure',
            description: 'An immersive virtual reality adventure game that takes players through fantastical worlds.',
            link: 'https://example.com/vr-adventure'
        },
        {
            title: 'Space Explorer',
            description: 'A space exploration game that allows players to discover new planets and civilizations.',
            link: 'https://example.com/space-explorer'
        },
        {
            title: 'Zombie Survival',
            description: 'A thrilling survival game set in a post-apocalyptic world filled with zombies.',
            link: 'https://example.com/zombie-survival'
        }
    ];

    return (
        <div className="projects">
            <h1>My Projects</h1>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;