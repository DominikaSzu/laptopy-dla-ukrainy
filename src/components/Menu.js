import React, { useState } from "react";
import { Link } from "gatsby";
import { slugify } from "../common/helpers";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import { howToParticipate, howToGetHelped, partners, actionExplained } from "../common/data";

export const Menu = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(true);


    return <StyledNav>
  <StyledMenuWrapper>
    <div>
      
      <StyledLogo className="space-x-4">
          <a href="#">
            <span className="font-bold">#LaptopyDlaUkrainy</span>
          </a>
        </StyledLogo>

        <StyledLinkList className="space-x-1">
          <StyledLink>
            <Link to={`/#${slugify(howToParticipate.title)}`}>chcę pomóc</Link>
          </StyledLink>
          <StyledLink>
            <Link to={`/#${slugify(howToGetHelped.title)}`}>Мені потрібен ноутбук</Link>
            </StyledLink>
          <StyledLink>
            <Link to={`/#${slugify(actionExplained.title)}`}>o zbiórce</Link>
            </StyledLink>
            <StyledLink>
          <Link to={`/#${slugify('FAQ')}`}>FAQ</Link>
          </StyledLink>
          <StyledLink>
          <Link to={`/#${slugify(partners.title)}`}>partnerzy</Link>
          </StyledLink>
        </StyledLinkList>

      <StyledMobileButton>
        <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </StyledMobileButton>
    </div>
  </StyledMenuWrapper>

  <div className={`mobile-menu ${showMobileMenu ? 'hidden' : ''} md:hidden bg-white absolute w-full z-50`} style={{paddingBottom: "1rem"}}>
    <Link to={`/#${slugify(howToParticipate.title)}`} onClick={() => setShowMobileMenu(!showMobileMenu)}
    className="block py-2 px-4 text-sm hover:bg-gray-200">chcę pomóc</Link>
    <Link to={`/#${slugify(howToGetHelped.title)}`} onClick={() => setShowMobileMenu(!showMobileMenu)}
    className="block py-2 px-4 text-sm hover:bg-gray-200">Мені потрібен ноутбук</Link>
    <Link to={`/#${slugify(actionExplained.title)}`} onClick={() => setShowMobileMenu(!showMobileMenu)}
    className="block py-2 px-4 text-sm hover:bg-gray-200">o zbiórce</Link>
    <Link to={`/#${slugify('FAQ')}`} onClick={() => setShowMobileMenu(!showMobileMenu)}
    className="block py-2 px-4 text-sm hover:bg-gray-200">FAQ</Link>
    <Link to={`/#${slugify(partners.title)}`} onClick={() => setShowMobileMenu(!showMobileMenu)}
    className="block py-2 px-4 text-sm hover:bg-gray-200">partnerzy</Link> 
  </div>
    </StyledNav>;
}

const StyledNav = styled.nav`
background-color: #fff; 
position: -webkit-sticky;
position: sticky; 
top: 0;
z-index: 999;
`;

const StyledMenuWrapper = styled.div`
${tw`max-w-6xl mx-auto px-4`}
>div {
  ${tw`flex justify-between`}
}
`;

const StyledLogo = styled.div`
${tw`flex`}
a {
  ${tw`flex items-center py-5 px-2 text-gray-700 hover:text-gray-900`}
}`;

const StyledLinkList = styled.div`
${tw`hidden md:flex items-center`
}`;

const StyledLink = styled.div`
display: inline-block;
a{
  ${tw`my-5 mx-3 text-gray-700 hover:text-gray-900`}
  display: inline-block;
  position: relative;
	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 3px;
		bottom: 0;
		margin: -5px 0;
		background-color: #005bbb;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.4s ease-in-out 0s;
	}
	&:hover::before {
		visibility: visible;
		transform: scaleX(1);
	}
}
`;

const StyledMobileButton = styled.div`
${tw`md:hidden flex items-center`}
button svg {
  ${tw`w-6 h-6`}
}
`;