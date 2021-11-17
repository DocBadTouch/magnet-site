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
    <p className="big">Magnet DAO is the evolution of the reserve currency protocol. The DAO uses its protocol controlled value to reward token holders with market-beating yields. At the same time, it uses its treasury reserves to invest in and incubate innovative projects.</p>
    <p>Unlike first-generation reserve currency protocols, the goal of Magnet DAO isn’t just to grow its market cap and treasury. Instead, it uses 10% of bond profits to invest in high-quality crypto assets, effectively turning the DAO into an on-chain venture fund. The DAO will also help incubate and build projects from the earliest stages. Since all fees and value accrued from these protocols are distributed directly to token holders, Magnet DAO creates exponential value for all its investors.</p>
    <p>Magnet DAO is the next stage of the tried and tested reserve currency model. While building a sufficient treasury is important for a protocol, the portfolio management of that treasury is equally as important. We are hyper focused on putting the treasury to use to generate return, including building, incubating, and investing in early-stage projects - opportunities that are typically not available to the average investor.</p>
    <p>For a in-depth view of our vision, you can read more here on <a href="https://magnetdao.medium.com/" title="Go to our blog">our Medium blog</a>.</p>
  </div>

)
