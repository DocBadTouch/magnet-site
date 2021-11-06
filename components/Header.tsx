import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo_text.png'
import {SiDiscord,SiTwitter,SiTelegram,SiGithub} from 'react-icons/si'
import {IoLogoMedium} from 'react-icons/io5'
import { useTranslation } from 'next-i18next';
interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({ }) => {
  const {t} = useTranslation("header")
  const info = t("navigation", {returnObjects: true})
  return (
    <header className='header-container'>

      <div className='header-left'>
        <HeaderLogo />
        <HeaderItem text={info.about} link={`#${info.about.toLowerCase()}-section`} />
        <HeaderItem text={info.tokenomics} link={`#${info.tokenomics.toLowerCase()}-section`} />
        <HeaderItem text={info.roadmap} link={`#${info.roadmap.toLowerCase()}-section`} />
        <HeaderItem text={info.faq} link={`#${info.faq.toLowerCase()}-section`}/>
        <HeaderItem text={info.docs} link={`#${info.docs.toLowerCase()}-section`} />
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

const HeaderItem = ({ text, link }) => (
  <a className='header-item' href={link}>
    {text}
  </a>
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