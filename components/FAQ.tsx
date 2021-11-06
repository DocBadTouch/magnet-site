import React, {Component} from 'react';
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

const mapAPrefix = (currPrefix,currObj, tFunc)=>{
  let answers = {}
  for(const q of Object.keys(currObj)) {
    answers[q] = tFunc(`${currPrefix+"."+q}`)
  } 
  return answers
}

     

export const FAQ: React.FC<FAQProps> = ({ }) => {
  const {t} = useTranslation("faq")
  console.log(t('MagnetDao.title'))
  return (
     <div className='faq-container' id="faq-section">
       <FAQTitle title={t('title')}/>
       <FAQTabContainer t={t} magFaqTitle={t('magnetDao.title')} ohmFaqTitle={t('ohmDao.title')}/>
     </div>
  )
}

const FAQTitle = ({title}) => (
  <div className='faq-title-container'>
   <span className='faq-title-text'>{title}</span>
  </div>
)

const FAQTabContainer = ({t, magFaqTitle, ohmFaqTitle}) => (
  <Tabs >
    <TabList className='faq-tab-title'>
      <Tab >{magFaqTitle}</Tab>
      <Tab >{ohmFaqTitle}</Tab>
    </TabList>
   <TabPanel>
    {Object.keys(magDaoQuestions).map((key) => (
      <FAQQuestion 
      key={key}
      prompt={t(`${magQPrefix+key}.q`)} 
      answers={t(`${magQPrefix+key}.a`, {returnObjects: true})}
      />
    ))}
    
   </TabPanel>
   <TabPanel>
   {
   Object.keys(ohmDaoQuestions).map((key) => (
      <FAQQuestion
      key={key} 
      prompt={t(`${ohmQPrefix+key}.q`)} 
      answers={t(`${ohmQPrefix+key}.a`, {returnObjects: true})}
      />
    ))}
   </TabPanel>
  </Tabs>
)
const FAQQuestion = ({prompt,answers}) => (
  <div  className='faq-question'>
    <Collapsible trigger={prompt}>
     {
     Object.entries(answers).map(x=><p key={x[0]} className="faq-answer">{x[1]}</p>)
     } 
    </Collapsible>
    <hr/>
  </div>
  
)