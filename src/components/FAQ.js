import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/accordion";
  import { Box } from "@chakra-ui/react";
  import { FAQquestions } from "../common/data";
  import tw from "tailwind.macro";
import styled from "@emotion/styled";
import { slugify } from "../common/helpers";

export const FAQ = ({ title, header, questions }) => {
    return <WrappedComponent id={slugify(title)}>
        <h2>{ header }</h2>
        <WrappedAccordeon>
    <Accordion allowToggle>
        { questions.map((f, idx) => {
            return <WreppedAccordionItem key={idx}>
            <AccordionItem>
            <WrappedQuestion>
        <AccordionButton>
        <Box flex='1' textAlign='left'>
            {f.question}
            </Box>
            <AccordionIcon />
            </AccordionButton>
            </WrappedQuestion>
        <AccordionPanel>
            <WrappedAnswer>{f.answer}
            </WrappedAnswer>
            </AccordionPanel>
          </AccordionItem>
          </WreppedAccordionItem>
        }) }
    </Accordion>
    </WrappedAccordeon>
    </WrappedComponent>
}

const WrappedComponent = styled.div`
${tw`max-w-6xl mx-auto  my-14`}
h2 {
    ${tw`font-bold text-2xl text-center my-6`}
}
`;

const WrappedAccordeon = styled.div`
padding: 12px;
${tw`rounded-3xl border`}
`;

const WreppedAccordionItem = styled.div`
border-top: .5px solid rgb(226, 232, 240);
border-bottom: .5px solid rgb(226, 232, 240);
&:first-of-type{
    border-top-width: 0;
}
&:last-of-type {
    border-bottom-width: 0;
}
`;

const WrappedQuestion = styled.h3`
${tw`p-4`}
&:hover {
   background-color: #F5F5F5;
}
`;

const WrappedAnswer = styled.div`
${tw`p-2`}
ul {
   list-style-type: circle; 
   li {
        margin-left: 1rem;
    }
}
ol {
    list-style-type: lower-latin;
    li {
        margin-left: 1rem;
    }
}
`;