import React from 'react'
import { useTranslation } from 'next-i18next';

import tokePie from '../assets/img/tokenomics-pie-chart.svg'
import Image from 'next/image';
interface TokenomicsProps {

}

export const Tokenomics: React.FC<TokenomicsProps> = ({ }) => {
  const { t } = useTranslation('tokenomics');
  const title: String = t("title");
  const totalSupply = t("totalSupply", { returnObjects: true });
  const distribution = t("distribution", { returnObjects: true })
  return (
    <section id="tokenomics">
      <div className="wrapper">
        <TokenomicsTitle title={title} />
        <TokenomicsText totalSupply={totalSupply} distribution={distribution} />
        <TokenomicsImage />
      </div>
      <div className="crosshair"></div>
    </section>
  )
}

const TokenomicsTitle = ({ title }) => (
  <div className="outline-title left">
    <span className="outline">{title}</span>
    <h2>{title}</h2>
  </div>
)

const TokenomicsImage = ({ }) => (
  <div className="col-right">
    <Image src={tokePie} alt="Pie chart of the tokenomics" />
  </div>
)

const TokenomicsText = ({ totalSupply, distribution }) => (
  <div className="col-left">
    <h3>{totalSupply.title}</h3>
    <p>{totalSupply.text1}</p>
    <h3>{distribution.title}</h3>
    <p>{distribution.text1}</p>
    <p>{distribution.text2}<a href={distribution.link}>{distribution.text3}</a>{distribution.text4}</p>
  </div>
)