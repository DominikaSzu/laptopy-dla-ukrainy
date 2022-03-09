import React from "react";
import { Link, graphql } from "gatsby";
import { slugify } from "../common/helpers";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import { howToParticipate } from "../common/data";

export const MainSection = () => {
    return <WrappedMainSection>
        <h1>Weź udział w zbiórce #LaptopydlaUkrainy</h1>
        <p>Oddając nam sprzęt pomożesz uchodźczyniom i uchodźcom z Ukrainy</p>
        <Link to={`/#${slugify(howToParticipate.title)}`}>Przekaż laptop</Link>
        <img src="../../cover.jpg" alt=""/>
    </WrappedMainSection>
}


const WrappedMainSection = styled.div`
${tw`max-w-6xl mx-auto px-4 text-center relative`}
margin-top: 8rem;
margin-bottom: 11rem;
h1 {
    ${tw`text-4xl md:text-6xl`}
}
p {
${tw`text-xl md:text-2xl`}
}
a {
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
img {
  position: absolute;
  top: 80px;
  z-index: -1;
  width: 90%;
  right: 0;
}
`;