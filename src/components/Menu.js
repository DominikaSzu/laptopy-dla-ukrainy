import React, { useState } from "react";
import { Link } from "gatsby";
import { slugify } from "../common/helpers";
import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const Menu = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(true);


    return <nav>
  <StyledMenuWrapper>
    <div>
      
      <StyledLogo className="space-x-4">
          <a href="#">
            <span className="font-bold">#LaptopyDlaUkrainy</span>
          </a>
        </StyledLogo>

        <StyledLinkList className="space-x-1">
          <Link to={`/#${slugify('Jak mogę wziąć udział w inicjatywie?')}`}>chcę pomóc</Link>
          <Link to={`/#${slugify('Potrzebuję pomocy')}`}>potrzebuję pomocy</Link>
          <Link to={`/#${slugify('')}`}>o akcji</Link>
          <Link to={`/#${slugify('Partnerzy')}`}>partnerzy</Link>
          <Link to={`/#${slugify('Kontakt')}`}>kontakt</Link>
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

  <div className={`mobile-menu ${showMobileMenu ? 'hidden' : ''} md:hidden bg-white absolute w-full`}>
    <Link to={`/#${slugify('Jak mogę wziąć udział w inicjatywie?')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">chcę pomóc</Link>
    <Link to={`/#${slugify('Potrzebuję pomocy')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">potrzebuję pomocy</Link>
    <Link to={`/#${slugify('')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">o akcji:</Link>
    <Link to={`/#${slugify('FAQ')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">FAQ</Link>
    <Link to={`/#${slugify('Regulamin')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">regulamin zbiórki</Link>
    <Link to={`/#${slugify('Partnerzy')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">partnerzy</Link>
    <Link to={`/#${slugify('Kontakt')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">kontakt</Link>  
  </div>
    </nav>;
}

const StyledMenuWrapper = styled.div`
${tw`max-w-6xl mx-auto px-4`}
>div {
  ${tw`flex justify-between`}
}`;

const StyledLogo = styled.div`
${tw`flex`}
a {
  ${tw`flex items-center py-5 px-2 text-gray-700 hover:text-gray-900`}
}`;

const StyledLinkList = styled.div`
${tw`hidden md:flex items-center`}
a {
  ${tw`py-5 px-3 text-gray-700 hover:text-gray-900`}
}`;

const StyledMobileButton = styled.div`
${tw`md:hidden flex items-center`}
button svg {
  ${tw`w-6 h-6`}
}
`;