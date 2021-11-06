import React from 'react'
import { useTranslation } from 'next-i18next';
interface TokenomicsProps {

}

export const Tokenomics: React.FC<TokenomicsProps> = ({ }) => {
  const {t} = useTranslation('tokenomics');
  const title = t("title");
  const totalSupply = t("totalSupply",{returnObjects: true});
  const distribution = t("distribution",{returnObjects: true})
  return (
    <div className='tokenomics-container'>
      <TokenomicsTitle />
      <div className='tokenomics-row'>
        <TokenomicsImage />
        <TokenomicsText totalSupply={totalSupply} distribution={distribution} />
      </div>
    </div>
  )
}

const TokenomicsTitle = ({ }) => (
  <div className='tokenomics-title'>
    Tokenomics
  </div>
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
