import React from 'react';

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

const SocialMediaLinks: React.FC = () => {
  return <div className='flex aligm-items-center space-x-4 w-100 mt-4'>
    {socialMediaLinks.map((socialMedia) => <a className='social_media_icon' href={socialMedia.url} title={socialMedia.label}><img src={socialMedia.image} alt={socialMedia.label} /></a>)}
  </div>
}

export { SocialMediaLinks }