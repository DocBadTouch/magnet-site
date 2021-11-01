import React from 'react'

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
    <div className='text-5xl'>
      Join the
    </div>
    <div>
      Magnet community
    </div>
  </div>
)