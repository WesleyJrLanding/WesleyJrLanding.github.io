import React, { useRef } from 'react';
import ReactBeforeSliderComponent from 'react-node-before-after-slider-component';
import 'react-node-before-after-slider-component/dist/build.css';
import './styles.css'

import beforeImage from '../../images/slider_before.jpg';
import afterImage from '../../images/slider_before.jpg';
import projectImage from '../../images/project.jpg';
import { Projects } from '../projects';

const MainContent: React.FC = () => {
  const mainElementRef = useRef<any>(null);

  return (
    <main ref={mainElementRef} className='min-h-screen'>
      <ReactBeforeSliderComponent
        className='slider_content'
        firstImage={{ imageUrl: beforeImage }}
        secondImage={{ imageUrl: afterImage }}
      />
      <Projects
        projects={[
          {
            image: projectImage,
            title: 'Project 1',
            year: '2023'
          },
          {
            image: projectImage,
            title: 'Project 2',
            year: '2023'
          }
        ]}
      />
    </main>
  );
}

export { MainContent };

