import React from 'react'
import { useTranslation } from 'next-i18next';
import {SectionHeader} from './SectionHeader'
import tokePie from '../assets/img/tokenomics-pie-chart.svg'
interface TokenomicsProps {

}

export const Tokenomics: React.FC<TokenomicsProps> = ({ }) => {
  const {t} = useTranslation('tokenomics');
  const title: String = t("title");
  const totalSupply = t("totalSupply",{returnObjects: true});
  const distribution = t("distribution",{returnObjects: true})
  return (
    <section id="tokenomics">
        <div className="wrapper">

            <div className="outline-title left">
                <span className="outline">Tokenomics</span>
                <h2>Tokenomics</h2>
            </div>

            <div className="col-left">
                <h3>Token supply</h3>
                <p>At launch, Magnet DAO will have a Total Circulating Supply of 750,000 $MAG and a Total Diluted Supply of 1,000,000 $MAG.</p>
                <h3>Distribution</h3>
                <p>Magnet DAO will be selling 50% of the Total Diluted Supply at launch. 25% of tokens will be used for liquidity providing, 20% of tokens are team tokens (locked and vested), and 5% of tokens are for marketing and partnerships.</p>
                <p>The proceeds raised from the sale will be used as follows: 40% to the treasury, 40% to liquidity providing, and 20% to a stable coin fund to help fund team operations.</p>
            </div>

            <div className="col-right">
              
                <img data-srcset="../assets/img/tokenomics-pie-chart.svg" alt="Pie chart of the tokenomics"/>
            </div>

        </div>

        <div className="crosshair"></div>
    </section>
  )
}

const TokenomicsTitle = ({ title }) => (
  
    <SectionHeader title={title} xTitleClassName='tokenomics-title'></SectionHeader>
  
)

const TokenomicsImage = ({ }) => (
  <div className='tokenomics-image'>

  </div>
)

const TokenomicsText = ({totalSupply,distribution }) => (
  <div className='tokenomics-text'>
    <TokenomicsTextTitle title={totalSupply.title} />
    <TokenomicsTextItem text={totalSupply.text} />
    <TokenomicsTextTitle title={distribution.title} />
    <TokenomicsTextList distribution={distribution} />
    <TokenomicsTextItem text={distribution.text1} />
  </div>
)

const TokenomicsTextTitle = ({ title }) => (
  <div className='tokenomics-text-title'>
    {title}
  </div>
)

const TokenomicsTextItem = ({ text }) => (
  <div className='tokenomics-text-item'>
    {text}
  </div>
)

const TokenomicsTextList = ({ distribution}) => (
  <ul className='tokenomics-text-list'>
    <li>
      {distribution.b0}
    </li>
    <ul className='tokenomics-text-list ml-4'>
      <li>{distribution.b1}</li>
      <li>{distribution.b2}</li>
      <li>{distribution.b3}</li>
      <li>{distribution.b4}</li>
    </ul>
  </ul>
)
