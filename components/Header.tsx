import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo_text.png'
import {BsDiscord,BsTwitter,BsTelegram,BsGithub} from 'react-icons/bs'
import {IoLogoMedium} from 'react-icons/io5'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({ }) => {

  return (
    <header className='header-main'>

      <div className='header-left'>
        <HeaderLogo />
        <HeaderItem text='About Magnet DAO' />
        <HeaderItem text='Tokenomics' />
        <HeaderItem text='Roadmap' />
        <HeaderItem text='FAQ' />
        <HeaderItem text='Docs' />
      </div>

      <div className='header-right'>
        <HeaderIcon icon={<BsDiscord />} />
        <HeaderIcon icon={<BsTwitter />} />
        <HeaderIcon icon={<BsTelegram />} />
        <HeaderIcon icon={<IoLogoMedium />} />
        <HeaderIcon icon={<BsGithub />} />
        <HeaderButton />
      </div>

    </header>
  )
}

const HeaderItem = ({ text }) => (
  <div className='header-item'>
    {text}
  </div>
)

const HeaderIcon = ({ icon }) => (
  <div className='header-icon'>
    {icon}
  </div>
)

const HeaderLogo = ({ }) => (
  <div className='header-logo'>
    <Image src={Logo} layout='responsive' />
  </div>
)

const HeaderButton = ({ }) => (
  <button className='header-button'>
    Launch App
  </button>
)