import React from "react";
import { useTranslation } from 'next-i18next';
import magToken from '../assets/img/mag-token.svg';
import avaxToken from '../assets/img/avax-token.svg';
import Image from 'next/image';

interface TokenProps {

}
/*
export const Token: React.FC<TokenProps> = ({ }) => {
  const { t } = useTranslation('tokenomics');
  const token = t('token');
  const items = t('token.items', {returnObjects: true})
 */
  export const Token: React.FC<TokenProps> = ({ }) => {
    const { t } = useTranslation('token')
    const text1 = t('text1');
    const text2 = t('text2');
    
    const items: {name,symbol, totalSupply,initialSupply, chain, contract} = t("items", { returnObjects: true }) 
  return (
    <section id="token">
      <div className="wrapper">
        <div className="tokeninfo">
          <div className="items-background">
            <div className="flex-row">
              <TokenItem label={items.name.label} value={items.name.text}/>
              <TokenItem label={items.symbol.label} value={items.symbol.text}/>
            </div>
            <div className="flex-row">
              <TokenItem label={items.totalSupply.label} value={items.totalSupply.text}/>
              <TokenItem label={items.initialSupply.label} value={items.initialSupply.text}/>
            </div>
            <div className="flex-row">
              <TokenItem label={items.chain.label} value={items.chain.text}/>
              <TokenItem label={items.contract.label} value={items.contract.text}/>
            </div>
          </div>
        </div>
        <TokenContent text1={text1} text2={text2}/>
      </div>
    </section>
  )
}
const TokenContent = ({text1,text2})=>(
  <div className="contents">
          <p className="big">{text1}</p>
          <div>
            <div className="tokens">
              <div className="token-icons">
                <Image src={magToken} alt="MAG token icon" className="mag" layout="intrinsic" height={75} width={75}/>
                <Image src={avaxToken} alt="AVAX token icon" className="avax" layout="intrinsic" height={75} width={75} objectPosition={-1}/>
              </div>
              <p>{text2}</p>
            </div>
          </div>
        </div>
)
const TokenItem = ({ label, value }) => (
  <div className="tokeninfo-item">
    <div className="label">{label}</div>
    <div className="value">{value}</div>
  </div>
)