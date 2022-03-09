import React from "react";
import { Link } from "gatsby";
import { slugify } from "../common/helpers";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import { howToParticipate, howToGetHelped, partners, actionExplained } from "../common/data";

export const Footer = () => {
    return <StyledFooterContainer>
        <div>
    <StyledFooterContent>
      <StyledLogoWrapper className="space-x-4">
          <Link to="#">
            <span className="font-bold">#LaptopydlaUkrainy</span>
          </Link>
        </StyledLogoWrapper>

        <StyledLinkList className='space-x-1'>
          <Link to={`/#${slugify('FAQ')}`}>FAQ</Link>
          <Link to={`/#${slugify(actionExplained.title)}`}>o zbiórce</Link>
          <Link to={`/#${slugify(partners.title)}`}>Partnerzy</Link>
        </StyledLinkList>
    </StyledFooterContent>
  </div>
  </StyledFooterContainer>
}

const StyledFooterContainer = styled.div`
${tw`bg-gray-100`}
> div {
${tw`max-w-6xl mx-auto px-4`}
}`;

const StyledFooterContent = styled.div`
${tw`flex justify-between flex-col md:flex-row`}`;

const StyledLogoWrapper = styled.div`
${tw`flex justify-center md:justify-start`}
a {
  ${tw`flex items-center py-5 px-2 text-gray-700 hover:text-gray-900`}
}
`;

const StyledLinkList = styled.div`
${tw`flex items-center  flex-col md:flex-row`}
a {
  ${tw`py-5 px-3 text-gray-700 hover:text-gray-900`}
}
`;