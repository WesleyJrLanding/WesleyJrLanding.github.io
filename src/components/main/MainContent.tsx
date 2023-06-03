import React, { useRef } from 'react';
import ReactBeforeSliderComponent from 'react-node-before-after-slider-component';
import 'react-node-before-after-slider-component/dist/build.css';
import './styles.css'

import beforeImage from '../../images/slider_before.jpg';
import afterImage from '../../images/slider_before.jpg';

const MainContent: React.FC = () => {
  const mainElementRef = useRef<any>(null);

  return (
    <main ref={mainElementRef} className='min-h-screen'>
      <ReactBeforeSliderComponent 
        className='slider_content'
        firstImage={{imageUrl: beforeImage}}
        secondImage={{imageUrl: afterImage}}
        />
        <p>Resto do Conteúdo</p>
    </main>
  );
}

export { MainContent };

