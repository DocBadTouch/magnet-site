import React from 'react';
import { useTranslation } from 'next-i18next';
import Radar from '../assets/img/radar.png';
import Image from 'next/image';
interface OverviewProps {

}
const scrollToSection = (tag) => {
  document.getElementById(tag + "-section").scrollIntoView({ behavior: "smooth", block: "start" })
}
export const Overview: React.FC<OverviewProps> = ({ }) => {
  const { t } = useTranslation('overview')
  const title: String = t("catchphrase")
  const button1Text: String = t("but1")
  const button2Text: String = t("but2")
  const stats = t("stats", { returnObjects: true })

  return (
    <section id="hero">
      <OverviewCaption props={{ line1: "Revolutionizing", line2: "early-stage investing", button1Text: "Overview", button2Text: "Join Discord" }} />
      <OverviewImage />
      <OverviewMetrics stats={stats} />
      <div className="crosshair"></div>
    </section>

  )
}

const OverviewCaption = ({ props }) => (
  <div className="wrapper">
    <div className="caption">
      <h1>
        <div className="line1">{props.line1}</div>
        <div className="line2">{props.line2}</div>
      </h1>
      <div className="btn-group">
        <a href="#overview" className="btn btn-primary anchor"><span>{props.button1Text}</span></a>
        <a href="https://discord.gg/magnetdao" className="btn btn-secondary"><span>{props.button2Text}</span></a>
      </div>
    </div>
  </div>
)

const OverviewImage = () => (
  <div className="radar">
    <Image src={Radar} alt="Radar background image"/>
  </div>

)

const OverviewMetrics = ({ stats }) => (
  <div className="metrics">
    <div className="flex-row">
      <OverviewMetricsItem props={{ text: stats.currAPY.title, number: stats.currAPY.value, valClass: 'percentage', xClass: 'primary' }} />
      <OverviewMetricsItem props={{ text: stats.treasuryBal.title, number: stats.treasuryBal.value, valClass: 'monentary' }} />
    </div>
    <div className="flex-row">
      <OverviewMetricsItem props={{ text: stats.mCap.title, number: stats.mCap.value, valClass: 'monentary' }} />
      <OverviewMetricsItem props={{ text: stats.tvl.title, number: stats.tvl.value, valClass: 'monentary' }} />
    </div>
  </div>
)


const OverviewMetricsItem = ({ props }) => (
  <div className={"metrics-item " + props.xClass}>
    <div className="label">{props.text}</div>
    <div className={"value " + props.valClass}><span>{props.number}</span></div>
  </div>
)