import React from 'react'

interface TokenomicsProps {

}

export const Tokenomics: React.FC<TokenomicsProps> = ({ }) => {

  return (
    <div className='tokenomics-container'>
      <TokenomicsTitle />
      <div className='tokenomics-row'>
        <TokenomicsImage />
        <TokenomicsText />
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

const TokenomicsText = ({ }) => (
  <div className='tokenomics-text'>
    <TokenomicsTextTitle title='Total Supply' />
    <TokenomicsTextItem text='Magnet DAO will have a maximum supply of 1 million $MAG. At launch, Total Circulating Supply will be 750,000 $MAG. Total Diluted Supply will be 1,000,000 million $MAG.' />
    <TokenomicsTextTitle title='Distribution' />
    <TokenomicsTextList />
    <TokenomicsTextItem text='20% of tokens will be held by the dev team.
      These tokens will vest linearly over 2 years.
      5% of tokens will be used for partnerships, promotions, etc.' />
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

const TokenomicsTextList = ({ }) => (
  <ul className='tokenomics-text-list'>
    <li>
      37.5% of $MAG’s Total Diluted Supply will be sold via a fair launch:
    </li>
    <ul className='tokenomics-text-list ml-4'>
      <li>Investors will be able to contribute USDC to our launchpad - the amount of AVAX contributed will establish a price for $MAG token</li>
      <li>We will be selling 350k</li>
      <li>Price will equal amount of $ raised / # of shares for sale (75% * 1 million= 750K tokens)</li>
      <li>For example: if we receive $5M of contributions to the pool, implied price of $MAG upon close of the funding round will be equal to $5M / 750k = $6.666 per MAG</li>
    </ul>
  </ul>
)
