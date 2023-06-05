import React, { useState } from 'react';

import './style.css'

import { DemoModal } from '../demo-modal';
import { SocialMediaLinks } from '../social-media-links';



enum ModalsEnum {
  NUKE_DEMO = 'nuke_demo',
  AFTER_EFFECTS = 'after_effects',
}

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState<ModalsEnum | null>(null)

  return <header className='landing_page_header flex justify-center items-center flex-col min-h-screen'>
    <h1 className='font-bold md:text-6xl text-3xl'>Wesley Junior</h1>
    <h2 className='font-semibold md:text-2xl mt-4 text-xs'>Visual Effects Compositor | Motion Designer</h2>
    <SocialMediaLinks/>
    <div className='demo_buttons_container flex justify-center space-x-2 md:space-x-64 md:my-32 my-10'>
      <button onClick={() =>setOpenModal(ModalsEnum.NUKE_DEMO)} className='demo_button rounded-lg font-semibold md:font-bold md:py-2 md:px-4 text-sm md:text-base'>Nuke Demo Reel</button>
      <button onClick={() =>setOpenModal(ModalsEnum.AFTER_EFFECTS)} className='demo_button rounded-lg font-semibold md:font-bold md:py-2 md:px-4 text-sm md:text-base'>After Effects Demo Reel</button>
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