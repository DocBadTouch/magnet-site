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
    const { t } = useTranslation('tokenomics')
    const token = t('token',{returnObjects: true});
    const items: {name,symbol, totalSupply,initialSupply, chain, contract} = t("token.items", { returnObjects: true }) 
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
        <TokenContent props={token}/>

        

      </div>
    </section>
  )
}
const TokenContent = (props)=>(
  <div className="contents">
          <p className="big">{props.text1}</p>
          <div>
            <div className="tokens">
              <div className="token-icons">
                <Image src={magToken} alt="MAG token icon" className="mag" />
                <Image src={avaxToken} alt="AVAX token icon" className="avax" />
              </div>
              <p>{props.text2}</p>
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