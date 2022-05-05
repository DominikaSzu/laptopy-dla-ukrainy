import React, { useState } from "react";
import { Link } from "gatsby";
import { slugify } from "../../common/helpers";
import { howToParticipate, partners, actionExplained } from "../../common/data";
import * as Styled from "./Menu.styled";

export const Menu = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(true);


    return <Styled.Nav>
  <Styled.MenuWrapper>
    <div>
      
      <Styled.Logo className="space-x-4">
          <a href="#">
            <span className="font-bold">#LaptopyDlaUkrainy</span>
          </a>
        </Styled.Logo>

        <Styled.LinkList className="space-x-1">
          <Styled.Link>
            <Link to={`/#${slugify(howToParticipate.title)}`}>chcę pomóc</Link>
          </Styled.Link>
          <Styled.Link>
            <Link to={`/#${slugify('how-to-get-help')}`}>Мені потрібен ноутбук</Link>
            </Styled.Link>
            <Styled.Link>
            <Link to={`/#${slugify('FAQ-zbiorka')}`}>Популярні запитання</Link>
            </Styled.Link>
          <Styled.Link>
            <Link to={`/#${slugify(actionExplained.title)}`}>o zbiórce</Link>
            </Styled.Link>
            <Styled.Link>
          <Link to={`/#${slugify('FAQ')}`}>FAQ</Link>
          </Styled.Link>
          <Styled.Link>
          <Link to={`/#${slugify(partners.title)}`}>partnerzy</Link>
          </Styled.Link>
        </Styled.LinkList>

      <Styled.MobileButton>
        <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </Styled.MobileButton>
    </div>
  </Styled.MenuWrapper>

  <div className={`mobile-menu ${showMobileMenu ? 'hidden' : ''} lg:hidden bg-white absolute w-full z-50`} style={{paddingBottom: "1rem"}}>
    <Link to={`/#${slugify(howToParticipate.title)}`} onClick={() => setShowMobileMenu(!showMobileMenu)}
    className="block py-2 px-4 text-sm hover:bg-gray-200">chcę pomóc</Link>
    <Link to={`/#${slugify('how-to-get-help')}`} onClick={() => setShowMobileMenu(!showMobileMenu)}
    className="block py-2 px-4 text-sm hover:bg-gray-200">Мені потрібен ноутбук</Link>
    
    <Link to={`/#${slugify('FAQ-zbiorka')}`} onClick={() => setShowMobileMenu(!showMobileMenu)}
    className="block py-2 px-4 text-sm hover:bg-gray-200">Популярні запитання</Link>
    
    <Link to={`/#${slugify(actionExplained.title)}`} onClick={() => setShowMobileMenu(!showMobileMenu)}
    className="block py-2 px-4 text-sm hover:bg-gray-200">o zbiórce</Link>
    <Link to={`/#${slugify('FAQ')}`} onClick={() => setShowMobileMenu(!showMobileMenu)}
    className="block py-2 px-4 text-sm hover:bg-gray-200">FAQ</Link>
    <Link to={`/#${slugify(partners.title)}`} onClick={() => setShowMobileMenu(!showMobileMenu)}
    className="block py-2 px-4 text-sm hover:bg-gray-200">partnerzy</Link> 
  </div>
    </Styled.Nav>;
}