import React from 'react'
import Image from 'next/image'
import logo from '../public/Logo_v2.0.png'
import globe from '../public/globe.png'
import globe3d from '../public/globe.svg'
interface CommunityProps {

}

export const Community: React.FC<CommunityProps> = ({  }) => {

   return (
      <div className='community-container'>
        <CommunityTitle />
      </div>
   )
}

const CommunityTitle = ({}) => (
  <div className='community-title'>
    <div className="community-image-container">
      <Image className="animated-globe" src={globe3d}></Image>
    </div>
    <div>
      Join the
    </div>
    <div>
      <Image src={logo}></Image>
    </div>
    <div>
      Community
    </div>
  </div>
)