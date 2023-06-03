import React, { useState } from 'react';

import './style.css'

import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';
import vimeo from '../../images/vimeo.png';
import youtube from '../../images/youtube.png';
import { DemoModal } from '../demo-modal';

type SocialMediaLinkType = {
  image: any,
  label: string,
  url: string
}


enum ModalsEnum {
  NUKE_DEMO = 'nuke_demo',
  AFTER_EFFECTS = 'after_effects',
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
  const [openModal, setOpenModal] = useState<ModalsEnum | null>(null)

  return <header className='landing_page_header flex justify-center items-center flex-col min-h-screen'>
    <h1 className='font-bold text-6xl'>Wesley Junior</h1>
    <h2 className='font-semibold text-2xl mt-4'>Visual Effects Compositor | Motion Designer</h2>
    <div className='flex aligm-items-center space-x-4 w-100 mt-4'>
      {socialMediaLinks.map((socialMedia) => <a className='social_media_icon' href={socialMedia.url} title={socialMedia.label}><img src={socialMedia.image} alt={socialMedia.label}/></a>)}
    </div>
    <div className='demo_buttons_container flex justify-center space-x-64 my-32'>
      <button onClick={() =>setOpenModal(ModalsEnum.NUKE_DEMO)} className='demo_button rounded-lg font-bold py-2 px-4'>Nuke Demo Reel</button>
      <button onClick={() =>setOpenModal(ModalsEnum.AFTER_EFFECTS)} className='demo_button rounded-lg font-bold py-2 px-4'>After Effects Demo Reel</button>
    </div>
    <DemoModal 
      isOpen={openModal === ModalsEnum.NUKE_DEMO} 
      onClose={() => setOpenModal(null)} 
      title='Meu Vídeo' 
      videoUrl='https://www.youtube.com/embed/ZZ5LpwO-An4'
     />
    <DemoModal 
      isOpen={openModal === ModalsEnum.AFTER_EFFECTS} 
      onClose={() => setOpenModal(null)} 
      title='Meu Vídeo' 
      videoUrl='https://www.youtube.com/embed/0NcPkQsKZSQ'
     />
  </header>
}

export { Header }