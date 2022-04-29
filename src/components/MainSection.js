import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import { howToParticipate } from "../common/data";
import { Button } from "../components";

export const MainSection = () => {
    return <WrappedMainSection>
        <h1>Weź udział w zbiórce #LaptopydlaUkrainy</h1>
        <p>Oddając nam sprzęt pomożesz uchodźczyniom i uchodźcom z Ukrainy</p>
        <Button path={ howToParticipate.title } 
        useLink={ true }
        content={ 'Przekaż laptop' } />
        <img src="../../cover.jpg" alt=""/>
    </WrappedMainSection>
}


const WrappedMainSection = styled.div`
${tw`max-w-6xl mx-auto px-4 text-center relative`}
margin-top: 8rem;
margin-bottom: 11rem;
h1 {
    ${tw`text-4xl md:text-6xl`}
    
    @media (max-width: 380px) {
        word-break: break-all;
    }
}
p {
${tw`text-xl md:text-2xl`}
}
img {
  position: absolute;
  top: 80px;
  z-index: -1;
  width: 90%;
  right: 0;
}
@media (max-width: 600px) {
   img {
       top: 150px;
   } 
}
@media (max-width: 450px) {
   img {
       top: 200px;
   } 
}
@media (max-width: 370px) {
   img {
       top: 300px;
   } 
}
`;