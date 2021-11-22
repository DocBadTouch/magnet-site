import React from 'react';
import { useTranslation } from 'next-i18next';
import Radar from '../assets/img/radar.png';
import Image from 'next/image';
import { Parallax } from './Parrallax';
import useIntersect from '../hooks/useIntersect'
interface HeroProps {

}
const scrollToSection = (tag) => {
  document.getElementById(tag + "-section").scrollIntoView({ behavior: "smooth", block: "start" })
}
export const Hero: React.FC<HeroProps> = ({ }) => {
  const { setNode: ref, entry, merp } = useIntersect({});
  const { t } = useTranslation('hero')
  const caption = t("caption", { returnObjects: true })
  const metrics = t("metrics", { returnObjects: true })
  const factor = 50; //This is the factor for controlling the parallax on the metrics section.
  return (
    <section ref={ref} id="hero">
      <HeroCaption props={caption} />
      <HeroImage />
      <HeroMetrics metrics={metrics} ratio={merp} factor={factor} />
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

const HeroImage = (percentage) => (

  <div className="radar">
      <Image src={Radar} alt="Radar background image" />
  </div>


)

const HeroMetrics = ({ metrics, ratio, factor }) => {


  return (
    //The style with the transform in the outer div is dynamic and is controlling the parallax effect
    <div className="metrics" style={{ transform: `translate(0,${factor * ratio.current}px)` }}>
      <div style={{ width: "1px", height: "100vh", top: "-200%", position: "absolute" }}>f</div>
      <div className="flex-row">
        <HeroMetricsItem item={metrics.cAPY} valClass='percentage' xClass='primary' />
        <HeroMetricsItem item={metrics.tBal} valClass='monetary' xClass='' />
      </div>
      <div className="flex-row">
        <HeroMetricsItem item={metrics.mCap} valClass='monetary' xClass='' />
        <HeroMetricsItem item={metrics.tvl} valClass='monetary' xClass='' />
      </div>
    </div>


  )
}


const HeroMetricsItem = ({ item, valClass, xClass }) => (
  <div className={"metrics-item " + xClass}>
    <div className="label">{item.label}</div>
    <div className={"value " + valClass}><span>{item.value}</span></div>
  </div>
)