import React, { useRef } from 'react';
import ReactBeforeSliderComponent from 'react-node-before-after-slider-component';
import 'react-node-before-after-slider-component/dist/build.css';
import './styles.css'

import beforeImage from '../../images/slider_before.jpg';
import afterImage from '../../images/slider_before.jpg';
import projectImage from '../../images/project.jpg';

const MainContent: React.FC = () => {
  const mainElementRef = useRef<any>(null);

  return (
    <main ref={mainElementRef} className='min-h-screen'>
      <ReactBeforeSliderComponent
        className='slider_content'
        firstImage={{ imageUrl: beforeImage }}
        secondImage={{ imageUrl: afterImage }}
      />
      <div className='projects_container flex justify-center w-100 mt-24 space-x-4'>
        <div className='w-6/12 relative'>
          <div className='project_label absolute top-8 left-8 z-40'>
            <span className='project_title'>Project 01</span>
            <span className='project_year'>2023</span>
          </div>
          <img src={projectImage} alt="Project 01 - 2023" />
        </div>
        <div className='w-6/12 relative'>
          {/* <div className='project_label absolute inline'>
            <span className='project_title'>Project 02</span>
            <span className='project_year'>2023</span>
          </div> */}
          <img src={projectImage} alt="Project 02 - 2023" />
        </div>
      </div>
    </main>
  );
}

export { MainContent };

