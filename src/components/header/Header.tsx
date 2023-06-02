import React from 'react';

import './style.css';

import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';
import vimeo from '../../images/vimeo.png';
import youtube from '../../images/youtube.png';

type SocialMediaLinkType = {
  image: any,
  label: string,
  url: string
}

const socialMediaLinks: SocialMediaLinkType[] = [
  {
    image: instagram,
    label: 'Instagram',
    url: '#',
  },
  {
    image: linkedin,
    label: 'Linkedin',
    url: '#',
  },
  {
    image: youtube,
    label: 'Youtube',
    url: '#',
  },
  {
    image: vimeo,
    label: 'Vimeo',
    url: '#',
  },
]

const Header: React.FC = () => {
  return <header className='landing_page_header flex justify-center items-center flex-col'>
    <h1 className='font-bold text-6xl'>Wesley Junior</h1>
    <h2 className='font-semibold text-2xl mt-4'>Visual Effects Compositor | Motion Designer</h2>
    <div className='flex aligm-items-center space-x-4 w-100 mt-4'>
      {socialMediaLinks.map((socialMedia) => <a className='social_media_icon' href={socialMedia.url} title={socialMedia.label}><img src={socialMedia.image} alt={socialMedia.label}/></a>)}
    </div>
    <div className='demo_buttons_container flex justify-center space-x-64 my-32'>
      <button className='demo_button rounded-lg font-bold py-2 px-4'>Nuke Demo Reel</button>
      <button className='demo_button rounded-lg font-bold py-2 px-4'>After Effects Demo Reel</button>
    </div>
  </header>
}

export { Header }