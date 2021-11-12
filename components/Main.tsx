import React from 'react'
import { useTranslation } from 'next-i18next';
interface MainProps {

}
const scrollToSection = (tag)=>{
  document.getElementById(tag+"-section").scrollIntoView({behavior: "smooth", block: "start"})
}
export const Main: React.FC<MainProps> = ({ }) => {
  const {t} = useTranslation('main')
  const title: String = t("catchphrase")
  const button1Text: String = t("but1")
  const button2Text: String = t("but2")
  const stats = t("stats", {returnObjects: true})
  
  return (
    <div className='main-container'>
      <MainTitle title={title} />
      <MainButton text={button1Text}/>
      <MainButtonAlt text={button2Text} />
      <MainFooter stats={stats} />
    </div>
  )
}

const MainTitle = ({ title }) => (
  <div className='main-title'>
    {title}
  </div>
)

const MainButton = ({ text }) => (
  <button className='main-button' onClick={()=>scrollToSection("about")}>
    {text}
  </button>
)

const MainButtonAlt = ({text }) => (
  <button className='main-button-alt' onClick={()=>scrollToSection("tokenomics")}>
    {text}
  </button>
)

const MainFooter = ({stats}) => (
  <div className='main-footer'>
    <MainFooterItem text={stats.treasuryBal.title} number={stats.treasuryBal.value} />
    <MainFooterItem text={stats.currAPY.title} number={stats.currAPY.value} />
    <MainFooterItem text={stats.price.title} number={stats.price.value} />
    <MainFooterItem text={stats.circSupp.title} number={stats.circSupp.value} />
    <MainFooterItem text={stats.mCap.title} number={stats.mCap.value} />
    <MainFooterItem text={stats.tvl.title} number={stats.tvl.value} />
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