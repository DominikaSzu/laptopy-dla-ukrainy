import * as React from "react";
import { Layout, TextComponent, MainSection, FAQ } from "../components";
import { 
  aboutAction, 
  aboutUs, 
  actionExplained, 
  howToParticipate, 
  howToGetHelped,
  partners,
  contact } from "../common/data"; 

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
  content={ howToGetHelped.content }/>
  <FAQ/>
  <TextComponent title={ partners.title } 
  content={ partners.content }/>
  <TextComponent title={ contact.title } 
  content={ contact.content }/>
</Layout>
}

export default IndexPage;