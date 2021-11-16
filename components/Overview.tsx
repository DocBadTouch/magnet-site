import React from 'react';
import { useTranslation } from 'next-i18next';
import Satellite from '../assets/img/satellite.png';
import Image from 'next/image';
import { SectionHeader } from './SectionHeader';
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
    <section id="overview">
      <BodyImage />


      <div className="wrapper">
        <div className="outline-title left">
          <span className="outline">Overview</span>
          <h2>Overview</h2>
        </div>
        <BodyTextSection props={{}} />
      </div>

      <div className="angle"></div>

    </section>
  )
}

const BodyImage = () => (
  <div className="satellite">
    <Image src={Satellite} alt="Satellite background image" />
  </div>
)

const BodyTextSection = ({ props }) => (
  <div className="contents">
    <p className="big">Magnet DAO is the evolution of the reserve currency protocol. The DAO uses its protocol controlled value to reward token holders with market-beating yields. At the same time, it uses its treasury reserves to invest in and incubate innovative projects.</p>
    <p>Unlike first-generation reserve currency protocols, the goal of Magnet DAO isn’t just to grow its market cap and treasury. Instead, it uses 10% of bond profits to invest in high-quality crypto assets, effectively turning the DAO into an on-chain venture fund. The DAO will also help incubate and build projects from the earliest stages. Since all fees and value accrued from these protocols are distributed directly to token holders, Magnet DAO creates exponential value for all its investors.</p>
    <p>Magnet DAO is the next stage of the tried and tested reserve currency model. While building a sufficient treasury is important for a protocol, the portfolio management of that treasury is equally as important. We are hyper focused on putting the treasury to use to generate return, including building, incubating, and investing in early-stage projects - opportunities that are typically not available to the average investor.</p>
    <p>For a in-depth view of our vision, you can read more here on <a href="https://magnetdao.medium.com/" title="Go to our blog">our Medium blog</a>.</p>
  </div>

)
