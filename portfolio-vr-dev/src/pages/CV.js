import React from 'react';

const CV = () => {
  return (
    <div className="cv-container">
      <h1>Curriculum Vitae</h1>
      <section className="experience">
        <h2>Professional Experience</h2>
        <ul>
          <li>
            <h3>VR Game Developer at XYZ Studios</h3>
            <p>June 2020 - Present</p>
            <p>Developed immersive VR experiences for various platforms, focusing on user engagement and innovative gameplay mechanics.</p>
          </li>
          <li>
            <h3>Junior Game Developer at ABC Games</h3>
            <p>January 2018 - May 2020</p>
            <p>Assisted in the development of mobile and VR games, contributing to design, coding, and testing phases.</p>
          </li>
        </ul>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Proficient in Unity and Unreal Engine</li>
          <li>Strong knowledge of C# and C++</li>
          <li>Experience with VR hardware and software integration</li>
          <li>Excellent problem-solving and teamwork skills</li>
        </ul>
      </section>
      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>University of Technology, 2017</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CV;