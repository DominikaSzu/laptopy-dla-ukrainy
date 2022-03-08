import React from "react";
import { Link } from "gatsby";
import { slugify } from "../common/helpers";
import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const MainSection = () => {
    return <WrappedMainSection className="my-44">
        <h1>Weź udział w akcji #LaptopydlaUkrainy</h1>
        <p>Oddając nam sprzęt pomożesz uchodźczyniom i uchodźcom z Ukrainy</p>
        <Link to={`/#${slugify('Jak mogę wziąć udział w inicjatywie?')}`}>Przekaż laptop</Link>
    </WrappedMainSection>
}

const WrappedMainSection = styled.div`
${tw`max-w-6xl mx-auto px-4 text-center`}
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
`;