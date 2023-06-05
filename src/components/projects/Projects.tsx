import React from 'react';

import "./styles.css";

export type ProjectsProps = {
  projects: {
    title: string,
    image: any,
    year: string
  }[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {

  return <div className='projects_container mt-24 gap-4 grid grid-cols-1 md:grid-cols-2'>
    {projects.map((project) =>
      <div className={`project_content relative `}>
        <div className='project_label absolute top-8 left-8 z-40'>
          <span className='project_title text-4xl font-semibold'>{project.title}</span>
          <span className='project_year text-lg font-extrabold'>{project.year}</span>
        </div>
        <div className="img_content">
          <img src={project.image} alt={`${project.title} - ${project.year}`} />
        </div>
      </div>
    )}
  </div>
}

export { Projects }