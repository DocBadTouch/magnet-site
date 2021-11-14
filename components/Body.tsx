import React from 'react'
import { useTranslation } from 'next-i18next';
import Satellite from '../public/Satellite.svg'
import Image from 'next/image'
import { SectionHeader } from './SectionHeader'
interface BodyProps {

}

export const Body: React.FC<BodyProps> = ({ }) => {
  const { t } = useTranslation('body')
  const title: String = t('title')
  const title1: String = t('about1.title')
  const text1: String[] = t('about1.text', { returnObjects: true });
  const title2: String = t('about2.title')
  const text2: String[] = t('about2.text', { returnObjects: true });
  const banner = t('banner', { returnObjects: true });
  const bannerText1 = t('banner.text1')
  const bannerText2 = t('banner.text2')
  console.log(banner)
  return (
    <div className='body-container' id="about-section">
      <BodyTitle title={title}></BodyTitle>
      
      <div className="twinkling"></div>
      <div className='flex-row' >
        <BodyImageLeft src={Satellite} />
        <div className='body-image-space'></div>
        <BodyTextSectionRight props={{title1,text1}}/>
      </div>
      <BodyBannerSection props={banner}></BodyBannerSection>
    </div>
  )
}
const BodyTitle = ({ title }) => (
  <div className='body-title'>
    <SectionHeader title={title} xTitleClassName="mag-text-white"></SectionHeader>
  </div>
)
const BodyImageLeft = ({ src }) => (
  <div className='body-image-container'>
    <Image src={src} className="body-image"></Image>
  </div>
)

const BodyTextSectionRight = ({props }) => (
  <div className='body-text-section-right'>
    <div className='body-row'>
    <div className='body-text-container'>
      <BodyTextTitle text={props.title1} />
      <span className='body-text'>{props.text1[0]}</span>
      <p>{props.text1[1]}<span>{props.text1[2]}</span></p>
    </div>
      
    </div>
  </div>

)

const BodyTextTitle = ({ text }) => (
  <div className='body-text-title'>
    {text}
  </div>
)

const BodyText = ({ title, text }) => (
  <div className='body-text-container'>
    <BodyTextTitle text={title} />
    <div className='body-text'>
      {text[0]}
    </div>
    {text[1] ?
      <div className='body-text'>
        {text[1]}
      </div> : <></>}
  </div>
)
const BodyBannerSection =({props})=>(
  <div className='body-banner-section'>
    <BodyBanner items={props.items} ></BodyBanner>
    <BodyBannerTextSection text1={props.text1} text2={props.text2}/>
    
  </div>
)
const BodyBannerTextSection =({text1, text2})=>(
  <div className='body-banner-text-section'>
    
    <BodyTextTitle text={text1}/>
    
    <span>
      {text2}
    </span>
  </div>
)
const BodyBanner = ({ items}) => (
  <div className='body-banner'>
    <div className='grid-pattern body-banner-item-container'>
    <div className='flex-col' >
      <BodyBannerItem title={items.name.title} text={items.name.text} />
      <BodyBannerItem title={items.totalSupply.title} text={items.totalSupply.text} />
      <BodyBannerItem title={items.chain.title} text={items.chain.text} />
    </div>
    <div className='flex-col'>
    <BodyBannerItem title={items.symbol.title} text={items.symbol.text} />
    <BodyBannerItem title={items.circulating.title} text={items.circulating.text} />
    <BodyBannerItem title={items.contract.title} text={items.contract.text} />
    </div>
    </div>
  </div>
)

const BodyBannerItem = ({ title, text }) => (
  <div className='body-banner-item'>
    {title}
    <span className='body-banner-item-text'>
      {text}
    </span>
  </div>
)