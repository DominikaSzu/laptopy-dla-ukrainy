import React from "react";
import {slugify} from "../common/helpers";
import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const TextComponent = ({title, content}) => {
    return <WrappedTextComponent 
    id={slugify(title)}>
        <h2>{title}</h2>
        <div>{content}</div>
    </WrappedTextComponent>
}

const WrappedTextComponent = styled.div`
${tw`max-w-6xl mx-auto px-4 my-14`}
margin-bottom: 3rem;
h2 {
    ${tw`font-bold text-2xl text-center my-8`}
}
.form-button {
    display: inline-block;
    color: #005bbb;
    margin: .75rem 0;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        background-color: #005bbb;
        height: 1.5px;
        bottom: -3px;
        left: 0;
    }
}

p {
    margin-bottom: 1.5rem;
}

ol li {
    list-style-type: decimal;
    margin-left: 1rem;
}

.logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 3rem 0;

    a {
        height: 60px;
        display: inline-block;

        img {
            height: 100%;
        }

        &.ppg {
            height: 50px;
        }
    }

    @media (max-width: 767px) {
        flex-direction: column;

        a {
            margin-bottom: 2rem;
        }
    }
}

.contact-card {
    text-align: center;
    p {
        margin-bottom: .3rem;
    }
}
`;