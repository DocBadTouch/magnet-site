import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo_text.png'
import {SiDiscord,SiTwitter,SiTelegram,SiGithub} from 'react-icons/si'
import {IoLogoMedium} from 'react-icons/io5'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({ }) => {

  return (
    <header className='header-container'>

      <div className='header-left'>
        <HeaderLogo />
        <HeaderItem text='About' />
        <HeaderItem text='Tokenomics' />
        <HeaderItem text='Roadmap' />
        <HeaderItem text='FAQ' />
        <HeaderItem text='Docs' />
      </div>

      <div className='header-right'>
        <HeaderIcon icon={<SiDiscord />} />
        <HeaderIcon icon={<SiTwitter />} />
        <HeaderIcon icon={<SiTelegram />} />
        <HeaderIcon icon={<IoLogoMedium />} />
        <HeaderIcon icon={<SiGithub />} />
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
  <button className='header-button group'>
    Launch App
    <span className='header-tooltip group-hover:scale-100'>
      Coming Soon!
    </span>
  </button>
)