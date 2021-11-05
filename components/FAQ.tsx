import React, {Component} from 'react';
import Collapsible from 'react-collapsible'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
interface FAQProps {
  
}
const getFaqProps = ()=>{
  //Retrieve FAQ Info from and Easy to maintain/update place.
  return {
    magFaq:{
      title: "Magnet DAO - Specific FAQ",
      questions: [
        {prompt: "Are you an Ohm fork?", answer: "Yes, but we are awesome"}
      ]
    }, 
    ohmFaq:{
      title: "Ohm DAO - Related FAQ",
      questions: [
        {prompt: "Does Ohm Suck?", answer: "Yes, when compared to Magnet DAO"}

      ]

    }}
     
}
export const FAQ: React.FC<FAQProps> = ({ }) => {
  const faqProps = getFaqProps();
  return (
     <div className='faq-container'>
       <FAQTitle/>
       <FAQTabContainer magnetDaoFaq={faqProps.magFaq} ohmDaoFaq={faqProps.ohmFaq}/>
     </div>
  )
}

const FAQTitle = ({}) => (
  <div className='faq-title-container'>
   <span className='faq-title-text'>Frequently Asked Questions</span>
  </div>
)

const FAQTabContainer = ({magnetDaoFaq,ohmDaoFaq}) => (
  <Tabs >
    <TabList className='faq-tab-title'>
      <Tab >{magnetDaoFaq.title}</Tab>
      <Tab >{ohmDaoFaq.title}</Tab>
    </TabList>
   <TabPanel>
   {magnetDaoFaq.questions.map((question: {prompt: string,answer: string})=>(
     <FAQQuestion prompt={question.prompt} answer={question.answer}/>
   ))}
   </TabPanel>
   <TabPanel>
   {ohmDaoFaq.questions.map((question: {prompt: string,answer: string})=>(
     <FAQQuestion prompt={question.prompt} answer={question.answer}/>
   ))}
   </TabPanel>
  </Tabs>
)
const FAQQuestion = ({prompt,answer}) => (
  <div className='faq-question'>
    <Collapsible trigger={prompt} triggerClassName='faq-prompt'>
     <p className="faq-answer">{answer}</p>
    </Collapsible>
    <hr/>
  </div>
  
)