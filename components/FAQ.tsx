import React, { Component } from 'react';
import Collapsible from 'react-collapsible'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useTranslation } from 'next-i18next';
import faq from "../public/locales/en/faq.json"
interface FAQProps {

}
const magtitle = faq.magnetDao.title
const magDaoQuestions = faq.magnetDao.questions
const ohmDaoQuestions = faq.ohmDao.questions
const magQPrefix = 'magnetDao.questions.'
const ohmQPrefix = 'ohmDao.questions.'

const mapAPrefix = (currPrefix, currObj, tFunc) => {
  let answers = {}
  for (const q of Object.keys(currObj)) {
    answers[q] = tFunc(`${currPrefix + "." + q}`)
  }
  return answers
}



export const FAQ: React.FC<FAQProps> = ({ }) => {
  const { t } = useTranslation("faq")
  //console.log(t('MagnetDao.title'))
  return (
    <section id="faq">
      <div className="wrapper">
        <div className="outline-title left">
          <span className="outline">FAQ</span>
          <h2>FAQ</h2>
        </div>
        <div className="crosshair"></div>
      </div>
      <FAQTabContainer t={t} magFaqTitle={t('magnetDao.title')} ohmFaqTitle={t('ohmDao.title')} />
    
    </section>
  )
}

const FAQTabContainer = ({ t, magFaqTitle, ohmFaqTitle }) => (
  <Tabs  >
    <TabList className='react-tabs__tab-list faq-tab-title-container '>
    <div className="wrapper">
      <Tab className='react-tabs__tab faq-tab-title' >{magFaqTitle}</Tab>
      <Tab className='react-tabs__tab faq-tab-title'>{ohmFaqTitle}</Tab>
    </div>
    </TabList>
    <div class="tabscont">
    <div className="wrapper">
    <TabPanel className='faq-tab-panel'>
      {Object.keys(magDaoQuestions).map((key) => (
        <FAQQuestion
          key={key}
          prompt={t(`${magQPrefix + key}.q`)}
          answers={t(`${magQPrefix + key}.a`, { returnObjects: true })}
        />
      ))}

    </TabPanel>
    <TabPanel className='faq-tab-panel'>
      {
        Object.keys(ohmDaoQuestions).map((key) => (
          <FAQQuestion
            key={key}
            prompt={t(`${ohmQPrefix + key}.q`)}
            answers={t(`${ohmQPrefix + key}.a`, { returnObjects: true })}
          />
        ))}
    </TabPanel>
    </div>
    </div>
  </Tabs>
)
const FAQQuestion = ({ prompt, answers }) => (
  <div className='faq-question'>
    <Collapsible trigger={prompt}>
      {
        Object.entries(answers).map(x => <p key={x[0]} className="faq-answer">{x[1]}</p>)
      }
    </Collapsible>
    
  </div>

)