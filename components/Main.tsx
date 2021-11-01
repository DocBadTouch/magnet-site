import React from 'react'

interface MainProps {

}

export const Main: React.FC<MainProps> = ({ }) => {

  return (
    <div className='main-container'>
      <MainTitle />
      <MainButton />
      <MainButtonAlt />
      <MainFooter />
    </div>
  )
}

const MainTitle = ({ }) => (
  <div className='main-title'>
    Hello guys, I am a nice catchphrase
  </div>
)

const MainButton = ({ }) => (
  <button className='main-button'>
    What is Magnet DAO?
  </button>
)

const MainButtonAlt = ({ }) => (
  <button className='main-button-alt'>
    Tokenomics
  </button>
)

const MainFooter = ({ }) => (
  <div className='main-footer'>
    <MainFooterItem text='Treasury Balance' number='$12,458,785.99 USD' />
    <MainFooterItem text='Current APY' number='12,947%' />
    <MainFooterItem text='Price' number='$1,247.34 USD' />
    <MainFooterItem text='Ciculating supply' number='648,423 MAG' />
    <MainFooterItem text='Market cap' number='$74,147,347.21 USD' />
    <MainFooterItem text='TVL' number='$92,147,442.00 USD' />
  </div>
)

const MainFooterItem = ({ text, number }) => (
  <div className='main-footer-item'>
    {text}
    <span className='main-footer-item-number'>
      {number}
    </span>
  </div>
)