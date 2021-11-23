import React from 'react';
import { useTranslation } from 'next-i18next';
import Satellite from '../assets/img/satellite.png';
import Image from 'next/image';
import { Parallax } from './Parrallax'
interface OverviewProps {

}

export const Overview: React.FC<OverviewProps> = ({ }) => {
  const { t } = useTranslation('overview')
  const title: String = t('title')
  const bold1: String = t('bold1');
  const text1: String = t('text1')
  const text2: String = t('text2');
  const text3: String = t('text3')
  const text4: String = t('text4');
  const text5: String = t('text5');
  const text6: String = t('text6');
  const text7: String = t('text7');
  const text8: String = t('text8');
  const text9: String = t('text9');
  const link: String = t('link')
  return (
    <section id="overview">
      <OverviewImage />
      <div className="wrapper">
        <div className="outline-title left">
          <span className="outline">{title}</span>
          <h2>{title}</h2>
        </div>
        <OverviewTextSection props={{bold1,text1,text2,text3,text4,text5,text6,text7,text8,text9}} />
      </div>
      <div className="angle"></div>
    </section>
  )
}

const OverviewImage = () => (
  <div className="satellite">
    <Parallax props={{ratio: 25, width: '100%', height: '800px' }}>
    <Image src={Satellite} alt="Satellite background image" layout="intrinsic" />
    </Parallax>
  </div>
)

const OverviewTextSection = ({ props }) => (
  <div className="contents">
    <p className="big">{props.bold1}</p>
    <p>{props.text2}<strong>{props.text3}</strong>{props.text4}</p>
    <p>{props.text5}</p>
    <p>{props.text6}<strong>{props.text7}</strong>{props.text8}<a href="{props.link}" title="Go to our blog">{props.text9}</a>.</p>
  </div>

)
