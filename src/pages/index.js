import * as React from "react";
import { Layout, TextComponent, MainSection, FAQ } from "../components";
import { 
  aboutAction, 
  aboutUs, 
  actionExplained, 
  howToParticipate, 
  howToGetHelped,
  partners,
  partecipants,
  contact, 
  FAQquestions, 
  FAQquestionsGetHelp 
} from "../common/data"; 

const IndexPage = () => {
  return <Layout>
  <MainSection/>
  <TextComponent title={ aboutAction.title } 
  content={ aboutAction.content }/>
  <TextComponent title={ aboutUs.title } 
  content={ aboutUs.content }/>
  <TextComponent title={ actionExplained.title } 
  content={ actionExplained.content }/>
  <TextComponent title={ howToParticipate.title } 
  content={ howToParticipate.content }/>
  <TextComponent title={ howToGetHelped.title }
  addUnderline={ howToGetHelped.addUnderline } 
  link={ 'how-to-get-help' }
  content={ howToGetHelped.content }/>
  <FAQ title={ FAQquestionsGetHelp.title }
  header={ 'Популярні запитання' }
  questions={ FAQquestionsGetHelp.questions }/>
  <FAQ title={ FAQquestions.title }
  header={ 'FAQ' }
  questions={ FAQquestions.questions }/>
  <TextComponent title={ partners.title } 
  content={ partners.content }/>
  <TextComponent title={ partecipants.title } 
  content={ partecipants.content }/>
  <TextComponent title={ contact.title } 
  content={ contact.content }/>
</Layout>
}

export default IndexPage;