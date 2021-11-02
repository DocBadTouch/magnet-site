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
    <div>
      Join the
    </div>
    <div>
      Magnet
    </div>
    <div>
      Community
    </div>
  </div>
)