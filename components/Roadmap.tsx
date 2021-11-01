import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

interface RoadmapProps {

}

export const Roadmap: React.FC<RoadmapProps> = ({ }) => {

  return (
    <div>
      <div className='roadmap-container'>
        <RoadmapTitle />
      </div>
      <RoadmapTimeline />
    </div>
  )
}

const RoadmapTitle = ({ }) => (
  <div className='roadmap-title'>
    Roadmap
  </div>
)

const RoadmapTimeline = ({ }) => (
  <Timeline position='alternate'>
    <RoadmapItem title='Q4 - 2021' text='Discord, Twitter, and Telegram Launch. $MAG Token Launch. CoinGecko and CoinMarketCap Listings. Begin deploying treasury to further build out the team - emphasis on launching our first protocol ASAP' />
    <RoadmapItem title='Q1 - 2022' text='Launch of Magnet DAO Investment Thesis. Call with DAO for Development and Incubation Strategy Outline' />
    <RoadmapItem title='Q2 - 2022' text='DAO proposals begin - Tokenomics, Treasury Management, etc.
      Begin developing, incubating, and funding new protocols using 10% of the treasury
      First protocol we are focused on developing - native DAO tooling platform, expected launch in Q2-Q3 2022
      Other protocols will come next - direction of what to build will be governed by the DAO
      Magnet DAO will also incubate projects, helping early-stage blockchain projects with building their protocols and providing funding from the treasury in return for tokens, which Magnet DAO treasury will receive and hold
      Magnet DAO will also participate in early-stage funding rounds for projects if we see fit and if the DAO decides to do so - these tokens will be owned and held in the Magnet DAO treasury' />
    <RoadmapItem title='Q3 - 2022 and Beyond' text='Integrate native DAO tooling to make management seamless and integrated
      Promote key contributors to leadership positions in the DAO
      License our DAO tooling to other DAO’s looking for a management system
      Continue to develop, incubate, and fund new protocols
      At this stage, we will have initial products and will be building out networks and communities
      We’d like DAO members to help contribute as much as possible with these new protocols, ideally with people taking on positions in the sub-communities
      And much, much more!' />
  </Timeline>
)

const RoadmapItem = ({ title, text }) => (
    <TimelineItem className=''>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <div className='roadmap-item-title'>{title}</div>
        <div className='roadmap-item-text'>{text}</div>
      </TimelineContent>
    </TimelineItem>
)