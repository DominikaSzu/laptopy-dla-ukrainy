import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/accordion";
  import { Box } from "@chakra-ui/react";
import { slugify } from "../../common/helpers";
import * as Styled from "./FAQ.styled";

interface IFAQ {
    title: string;
    header?: string;
    questions: any[];
}

export const FAQ = ({ title, header, questions }: IFAQ) => {
    return <Styled.WrappedComponent id={slugify(title)}>
        { header && <h2>{ header }</h2> }
        <Styled.WrappedAccordeon>
    <Accordion allowToggle>
        { questions.map((f, idx) => {
            return <Styled.WreppedAccordionItem key={idx}>
            <AccordionItem>
            <Styled.WrappedQuestion>
        <AccordionButton>
        <Box flex='1' textAlign='left'>
            {f.question}
            </Box>
            <AccordionIcon />
            </AccordionButton>
            </Styled.WrappedQuestion>
        <AccordionPanel>
            <Styled.WrappedAnswer>{f.answer}
            </Styled.WrappedAnswer>
            </AccordionPanel>
          </AccordionItem>
          </Styled.WreppedAccordionItem>
        }) }
    </Accordion>
    </Styled.WrappedAccordeon>
    </Styled.WrappedComponent>
}