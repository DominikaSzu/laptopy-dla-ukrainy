import React from "react";
import {slugify, signPlaceholder} from "../../common/helpers";
import * as Styled from "./TextComponent.styled";

export const TextComponent = ({title, content, link, addUnderline = false }) => {
    return <Styled.WrappedTextComponent 
    id={slugify(link || title)} 
    underline={ addUnderline }>
        <h2 data-text={ signPlaceholder }>{title}</h2>
        <div>{content}</div>
    </Styled.WrappedTextComponent>
}