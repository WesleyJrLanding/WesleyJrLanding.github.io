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
  const gridNumber = 12 / projects.length

  return <div className='projects_container flex justify-center w-100 mt-24 space-x-4'>
    {projects.map((project) =>
      <div className={`project_content w-${gridNumber}/12 relative`}>
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