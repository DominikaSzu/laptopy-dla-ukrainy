import * as React from "react";
import { useState } from "react";
import * as Styled from "./DoubleFAQ.styled";
import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
import { FAQ } from "../FAQ/FAQ";
import 'react-tabs/style/react-tabs.css';

export const DoubleFAQ = ({ FAQGetHelpUA, FAQGetHelpPL }) => {
    const [tabIndex, setTabIndex] = useState(0);
    return <Styled.FAQWrapper>
    <Styled.Header>Популярні запитання</Styled.Header>
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>{console.log(tabIndex)}
            <Tab>
                <img alt={'Українська версія'} src={ '../../ua.png' } />
            </Tab>
            <Tab>
                <img alt={ 'Polska wersja' } src={ '../../pl.png' } />
            </Tab>
        </TabList>

        <TabPanel>
        <FAQ title={ FAQGetHelpUA.title }
        questions={ FAQGetHelpUA.questions }/>
        </TabPanel>

        <TabPanel>
        <FAQ title={ FAQGetHelpPL.title }
        questions={ FAQGetHelpPL.questions }/>
        </TabPanel>
    </Tabs>
    </Styled.FAQWrapper>
}