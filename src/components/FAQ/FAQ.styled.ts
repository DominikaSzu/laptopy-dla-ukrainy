import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const WrappedComponent = styled.div`
${tw`max-w-6xl mx-auto  my-14`}
h2 {
    ${tw`font-bold text-2xl text-center my-6`}
}
`;

export const WrappedAccordeon = styled.div`
padding: 12px;
${tw`rounded-3xl`}
`;

export const WreppedAccordionItem = styled.div`
border-top: .5px solid rgb(226, 232, 240);
border-bottom: .5px solid rgb(226, 232, 240);
&:first-of-type{
    border-top-width: 0;
}
&:last-of-type {
    border-bottom-width: 0;
}
`;

export const WrappedQuestion = styled.h3`
${tw`p-4`}
&:hover {
   background-color: #F5F5F5;
}
`;

export const WrappedAnswer = styled.div`
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