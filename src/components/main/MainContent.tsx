import React, { useRef } from 'react';
import ReactBeforeSliderComponent from 'react-node-before-after-slider-component';
import 'react-node-before-after-slider-component/dist/build.css';
import './styles.css'

import beforeImage from '../../images/slider_before.jpg';
import afterImage from '../../images/slider_before.jpg';
import projectImage from '../../images/project.jpg';
import avatar from '../../images/avatar.jpeg';
import brazil from '../../images/brazil.png';
import usa from '../../images/usa.png';

import { Projects } from '../projects';
import { AboutMe } from '../about-me';

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
      <AboutMe
        avatar={avatar}
        defaultLanguage='en_US'
        description={[
          {
            language: 'pt_BR',
            languageIcon: brazil,
            text: 'Test'
          },
          {
            language: 'en_US',
            languageIcon: usa,
            text: <div>
              <p><b>I am a Nuke Compositor and Motion Designer</b> with a passion for bringing fantasy to life. I just started Nuke Compositing and I am excited to showcase my skills with my first Nuke demo reel. With a background in motion design, I spent over 2 years creating social media ads. I have learned to <b>overcome obstacles</b> and work with great attention to detail.</p>

              <p>My creative process is all about bringing my ideas to life. I draw inspiration from everything that surrounds me, whether it’s the latest blockbuster or the view out my window. As a Nuke Compositor, I am ready to <b>take on the world</b> and make a name for myself in the industry.</p>

              <p>As a kid, I discovered my passion for visual effects by playing around with Adobe After Effects (thanks Andrew Kramer) and creating videos for school projects or just for fun with friends. Now, as a Nuke Compositor. <b>I am looking forward to bringing that same passion into my work.</b></p>

              <p>When i am not working on visual effects and motion design projects, I like to do some cool personal stuff. I have a passion for music and enjoy playing jazz, especially on the piano. I like to keep up with the latest technological developments. I am also a Christian and support my local church. I value the importante of community and personal growth in all aspects of my life.</p>

              <p>I look forward to the new challenges and experiences ahead, and i have high expectations for what < b > we can accomplish</b> in the future.</p>
            </div >
          }
        ]}
      />
    </main >
  );
}

export { MainContent };

