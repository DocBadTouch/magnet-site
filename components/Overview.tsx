import React from 'react';
import { useTranslation } from 'next-i18next';
import Satellite from '../assets/img/satellite.png';
import Image from 'next/image';
interface OverviewProps {

}

export const Overview: React.FC<OverviewProps> = ({ }) => {
  const { t } = useTranslation('overview')
  const title: String = t('title')
  const text1: String = t('text1')
  const text2: String = t('text2');
  const text3: String = t('text3')
  const text4: String = t('text4');
  const text5: String = t('text5');
  
  return (
    <section id="overview">
      <OverviewImage />
      <div className="wrapper">
        <div className="outline-title left">
          <span className="outline">{title}</span>
          <h2>{title}</h2>
        </div>
        <OverviewTextSection props={{text1,text2,text3,text4,text5}} />
      </div>
      <div className="angle"></div>
    </section>
  )
}

const OverviewImage = () => (
  <div className="satellite">
    <Image src={Satellite} alt="Satellite background image" />
  </div>
)

const OverviewTextSection = ({ props }) => (
  <div className="contents">
    <p className="big">{props.text1}</p>
    <p>{props.text2}</p>
    <p>{props.text3}</p>
    <p>{props.text4}<a href="https://magnetdao.medium.com/" title="Go to our blog">{props.text5}</a>.</p>
  </div>

)
