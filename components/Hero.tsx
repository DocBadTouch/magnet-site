import React from 'react';
import { useTranslation } from 'next-i18next';
import Radar from '../assets/img/radar.png';
import Image from 'next/image';
interface HeroProps {

}
const scrollToSection = (tag) => {
  document.getElementById(tag + "-section").scrollIntoView({ behavior: "smooth", block: "start" })
}
export const Hero: React.FC<HeroProps> = ({ }) => {
  const { t } = useTranslation('hero')
  const caption = t("caption",{ returnObjects: true })
  const metrics = t("metrics", { returnObjects: true })
  console.log("Metrics",metrics)
  return (
    <section id="hero">
      <HeroCaption props={caption} />
      <HeroImage />
      <HeroMetrics metrics={metrics} />
      <div className="crosshair"></div>
    </section>

  )
}

const HeroCaption = ({ props }) => (
  <div className="wrapper">
    <div className="caption">
      <h1>
        <div className="line1">{props.line1}</div>
        <div className="line2">{props.line2}</div>
      </h1>
      <div className="btn-group">
        <a href="#overview" className="btn btn-primary anchor"><span>{props.but1}</span></a>
        <a href="https://discord.gg/magnetdao" className="btn btn-secondary"><span>{props.but2}</span></a>
      </div>
    </div>
  </div>
)

const HeroImage = () => (
  <div className="radar">
    <Image src={Radar} alt="Radar background image"/>
  </div>

)

const HeroMetrics = ({ metrics }) => (
  <div className="metrics">
    <div className="flex-row">
      <HeroMetricsItem item={metrics.cAPY} valClass='percentage' xClass='primary'/>
      <HeroMetricsItem item={metrics.tBal} valClass='monentary' xClass= ''/>
    </div>
    <div className="flex-row">
      <HeroMetricsItem item={metrics.mCap} valClass='monentary' xClass= ''/>
      <HeroMetricsItem item={metrics.tvl}  valClass='monentary' xClass=''/>
    </div>
  </div>
)


const HeroMetricsItem = ({ item, valClass, xClass }) => (
  <div className={"metrics-item " + xClass}>
    <div className="label">{item.label}</div>
    <div className={"value " + valClass}><span>{item.value}</span></div>
  </div>
)