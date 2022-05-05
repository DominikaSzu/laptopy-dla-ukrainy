import React from "react";
import { howToParticipate } from "../../common/data";
import { Button } from "../../components";
import * as Styled from "./MainSection.styled";

export const MainSection = () => {
    return <Styled.WrappedMainSection>
        <h1>Weź udział w zbiórce #LaptopydlaUkrainy</h1>
        <p>Oddając nam sprzęt pomożesz uchodźczyniom i uchodźcom z Ukrainy</p>
        <Button path={ howToParticipate.title } 
        useLink={ true }
        content={ 'Przekaż laptop' } />
        <img src="../../cover.jpg" alt=""/>
    </Styled.WrappedMainSection>
}