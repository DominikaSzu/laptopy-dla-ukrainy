import styled from "@emotion/styled";

export const Link = styled.span`
a{
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
}}
`;