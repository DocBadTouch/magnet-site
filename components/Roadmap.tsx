import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useTranslation } from 'next-i18next';
import { SSL_OP_NO_TLSv1_1 } from 'constants';
interface RoadmapProps {

}

export const Roadmap: React.FC<RoadmapProps> = ({ }) => {
  const {t} = useTranslation("roadmap")
  const timeline = t("timeline",{returnObjects: true})
  const title = t("title")
  return (
    <div id="roadmap-section">
      <div className='roadmap-container'>
        <RoadmapTitle title={title} />
      </div>
      <div className='roadmap'>
        <RoadmapTimeline timeline={timeline}/>
      </div>
    </div>
  )
}

const RoadmapTitle = ({ title }) => (
  <div className='roadmap-title'>
    {title}
  </div>
)

const RoadmapTimeline = ({ timeline}) => (
  <Timeline position='alternate'>
    {timeline.map((tl)=>(
      <RoadmapItem  key={tl.title} title={tl.title} items={tl.items}></RoadmapItem>
    ))}
  </Timeline>
)

const RoadmapItem = ({ title, items }) => (
  <TimelineItem className='roadmap-item'>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <div className='roadmap-item-title'>{title}</div>
      <TimelineList items={items} />
    </TimelineContent>
  </TimelineItem>
)

const TimelineList = ({items})=>(
  <ul className="timeline-list">
    {items.map(item=>(
      <TimelineListItem key={item.text} item={item}></TimelineListItem>
    ))}
  </ul>
)
const TimelineListItem =({item}) =>(
  <li className={`timeline-list-item ${item.isComplete?"completed":"incomplete"}`}> 
  {item.text}
  {item.subItems?<TimelineList items={item.subItems} />:""}
  </li>
  
)