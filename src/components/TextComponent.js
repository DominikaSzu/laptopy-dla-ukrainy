import React from "react";
import {slugify} from "../common/helpers";
import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const TextComponent = ({title, content}) => {
    return <WrappedTextComponent 
    id={slugify(title)}>
        <h2>{title}</h2>
        {content && <p>{content}</p>}
    </WrappedTextComponent>
}

const WrappedTextComponent = styled.div`
${tw`max-w-6xl mx-auto px-4 my-14`}
h2 {
    ${tw`font-bold text-xl text-center my-6`}
}
`;