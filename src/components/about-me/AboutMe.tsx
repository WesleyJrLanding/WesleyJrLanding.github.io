import React, { useState } from 'react';

import './styles.css';
import { IconButton } from '@mui/material';

type AboutMeProps = {
  avatar: any,
  defaultLanguage: string,
  description: {
    language: string,
    languageIcon: any,
    text: string | any
  }[]
}

const AboutMe: React.FC<AboutMeProps> = ({ avatar, description, defaultLanguage }) => {
  const [language, setLanguage] = useState(defaultLanguage)

  return <div className='grid md:grid-cols-4 mt-24 gap-4'>
    <div className='avatar_content col-span-4 md:col-span-1'>
      <img src={avatar} alt="Wesley Junior" />
    </div>
    <div className='col-span-4 md:col-span-3'>
      {description.map((translate) => 
      <IconButton 
        onClick={() => setLanguage(translate.language)} 
        style={{
          borderRadius: 12,
          paddingTop: 0
      }}><img className="language_icon_btn max-w-full" src={translate.languageIcon} alt={translate.language} /></IconButton>)}
      <div className='description_content text-sm'>
        {description.find(translate => translate.language ===language)?.text}
      </div>
    </div>
  </div>
}


export { AboutMe }