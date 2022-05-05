import React from "react";
import {slugify, signPlaceholder} from "../common/helpers";
import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const TextComponent = ({title, content, link, addUnderline = false }) => {
    return <WrappedTextComponent 
    id={slugify(link || title)} 
    underline={ addUnderline }>
        <h2 data-text={ signPlaceholder }>{title}</h2>
        <div>{content}</div>
    </WrappedTextComponent>
}

const WrappedTextComponent = styled.div`
${tw`max-w-6xl mx-auto px-4 my-14`}
margin-bottom: 3rem;
h2 {
    ${tw`font-bold text-2xl text-center my-8`}
    position: relative;
    &::before {
        position: absolute;
        top: .5rem;
        content: ${ props => props.underline ? 'attr(data-text)' : 'none' };
        color: transparent;
        text-decoration: ${ props => props.underline ? 'underline wavy #005bbb' : 'none' }
    }

    @media (max-width: 450px) {
        &::before {
            content: none;
        }
    }
}
.form-button--wrapper {
${tw`text-center`}
}
.form-button {
    display: inline-block;
background: #005bbb;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
transition: 0.4s;
color: #fff;
&:hover,
  &:focus { 
    border-color: #ffd500;
    color: #005bbb;
  }
  &:hover,
&:focus {
  box-shadow: inset 0 -3.25em 0 0 #ffd500;
}
}

.fb-group {
    position: relative;
    color: #005bbb;
    word-break: break-all;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
    height: 2px;
    background: #005bbb;
    bottom: -3px;
    }

    @media (max-width: 450px) {
        &::before {
            content: none;
        }
    }
}

.information__box {
    border: 2px solid #005bbb;
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 3rem;

    p:last-of-type {
        margin-bottom: 0;
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
    row-gap: 1.5rem;

    a, div.wiewiorka {
        height: 60px;
        display: inline-block;
        transition: transform .4s;

        img {
            height: 100%;
        }

        &.ppg {
            height: 50px;
        }

        &.otwartykrk {
            height: 90px;
        }

        &.poweredbymeaning, 
        &.bplusb {
            height: 80px;
        }

        &:hover {
            transform: scale(1.1);
        }
    }

    &.action-supporters {
        justify-content: space-evenly;
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