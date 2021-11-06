import React from 'react'
import { useTranslation } from 'next-i18next';
interface BodyProps {

}

export const Body: React.FC<BodyProps> = ({ }) => {
  const {t}= useTranslation('body')
  const title1: String = t('about1.title')
  const text1: String[] = t('about1.text',{returnObjects: true});
  const title2: String = t('about2.title')
  const text2: String[] = t('about2.text',{returnObjects: true});
  
  const bannerItems = t('banner',{returnObjects: true});
  console.log(bannerItems)
  return (
    <div className='body-container'>
      
      <div className='body-row'>
        <BodyImageLeft />
        <BodyText title={title1} text={text1} />
      </div>

      <BodyBanner items={bannerItems} />

      <div className='body-row'>
        <BodyText title={title2} text={text2} />
        <BodyImageRight />
      </div>

    </div>
  )
}

const BodyImageLeft = ({ }) => (
  <div className='body-image body-image-left'>

  </div>
)

const BodyImageRight = ({ }) => (
  <div className='body-image body-image-right'>

  </div>
)

const BodyTitle = ({ text }) => (
  <div className='body-title'>
    {text}
  </div>
)

const BodyText = ({ title, text }) => (
  <div className='body-text-container'>
    <BodyTitle text={title} />
    <div className='body-text'>
      {text[0]}
    </div>
    {text[1] ?
      <div className='body-text'>
        {text[1]}
      </div> : <></>}
  </div>
)

const BodyBanner = ({ items }) => (
  <div className='body-banner'>
    <BodyBannerItem title={items.name.title} text={items.name.text} />
    <BodyBannerItem title={items.symbol.title} text={items.symbol.text} />
    <BodyBannerItem title={items.contract.title} text={items.contract.text} />
    <BodyBannerItem title={items.chain.title} text={items.chain.text} />
    <BodyBannerItem title={items.totalSupply.title} text={items.totalSupply.text} />
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