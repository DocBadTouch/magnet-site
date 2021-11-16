import React from "react";
import { useTranslation } from 'next-i18next';

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
                <img data-srcset="../assets/img/mag-token.svg" className="mag" alt="Magnet Token logo" />
                <img data-srcset="../assets/img/avax-token.svg" className="avax" alt="Avalanche Token logo" />
              </div>
              <p>$MAG is launching natively on Avalanche (AVAX) and will be available for swapping on Trader Joe. We plan to expand to cross-chain in the future.</p>
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