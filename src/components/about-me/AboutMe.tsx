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

  return <div className='flex mt-24 space-x-4'>
    <div className='avatar_content w-3/12'>
      <img src={avatar} alt="Wesley Junior" />
    </div>
    <div className='w-9/12 flex-col'>
      {description.map((translate) => 
      <IconButton 
        onClick={() => setLanguage(translate.language)} 
        style={{
        borderRadius: 12
      }}><img className="language_icon_btn max-w-full" src={translate.languageIcon} alt={translate.language} /></IconButton>)}
      <div className='description_content text-sm'>
        {description.find(translate => translate.language ===language)?.text}
      </div>
    </div>
  </div>
}


export { AboutMe }