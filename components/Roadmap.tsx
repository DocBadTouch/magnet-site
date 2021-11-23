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
  const {t} = useTranslation('roadmap')
  const timeline = t("timeline",{returnObjects: true})
  const title: String = t("title")
  return (
    <section id="roadmap">
        <div className="wrapper">

            <div className="outline-title left">
                <span className="outline">Roadmap</span>
                <h2>Roadmap</h2>
            </div>

            <div className="timeline">
                  <div className="step checked">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q4 2021</span><p> Discord, Twitter, and Telegram Launch</p></div>
                    </div>
                  </div>
                  <div className="step checked">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q4 2021</span><p> Team build out</p></div>
                    </div>
                  </div>
                  <div className="step checked">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q4 2021</span><p> Form partnerships in the Avalanche ecosystem</p></div>
                    </div>
                  </div>
                  <div className="step checked">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q4 2021</span><p> Complete AMAs with prospective projects for incubation fund</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q4 2021</span><p>$MAG token sale</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q4 2021</span><p> Receive Tier 1 audits for all smart contracts</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q4 2021</span><p> Launch MAG protocol and liquidity</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q4 2021</span><p>CoinGecko and CoinMarketCap Listings</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q1 2022</span><p>DAO proposals for Magnet DAO begin - tokenomics, treasury management, innovation fund deployment, etc.</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q1 2022</span><p>Propose various upgrades for the protocol - such as variable-rate ROI for bonding based on length of vesting, adding bonus rewards for diamond hands stakers, “zapping” liquidity for easier bonding</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q1 2022</span><p>Investment Thesis Call with DAO for Development and Incubation Strategy Outline</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q2 2022</span><p>Begin developing, incubating, and funding new protocols using the Innovation Fund</p>
                      <p>Direction of where to deploy funds will be governed by the DAO</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q2 2022</span><p>Begin development of native DAO tooling platform</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q2 2022</span><p> Begin development or incubate a novel, liquid-staking solution for stablecoins, native to AVAX</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q2 2022</span><p> Magnet DAO begins to incubate and invest in projects, helping early-stage crypto projects with building their protocols and providing funding from the innovation fund in return for tokens, which Magnet DAO treasury will receive and hold</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q3 2022</span><p>Integrate native DAO tooling to make management seamless and integrated</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q3 2022</span><p>Promote key contributors to leadership positions in the DAO</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q3 2022</span><p>License our DAO tooling to other DAO’s looking for a management system</p></div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="wrap">
                      <div className="pointer">
                        <div className="bubble"></div>
                        <div className="line"></div>
                      </div>
                      <div className="content"><span>Q3 2022 and Beyond</span><p>Continue to develop, incubate, and fund new protocols and get the DAO involved as much as possible in new initiatives</p></div>
                    </div>
                  </div>
              </div>
            </div>


        <div className="angle"></div>
    </section>
  )
}