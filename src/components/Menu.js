import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "gatsby";
import { slugify } from "../common/helpers";

export const Menu = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(true);


    return <StyledMenu>
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">
      
      <div className={'flex space-x-4'}>
          <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <span className="font-bold">#LaptopyDlaUkrainy</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          <Link to={`/#${slugify('Jak mogę wziąć udział w inicjatywie?')}`} className="py-5 px-3 text-gray-700 hover:text-gray-900">chcę pomóc</Link>
          <Link to={`/#${slugify('Potrzebuję pomocy')}`} className="py-5 px-3 text-gray-700 hover:text-gray-900">potrzebuję pomocy</Link>
          <Link to={`/#${slugify('')}`} className="py-5 px-3 text-gray-700 hover:text-gray-900">o akcji</Link>
          <Link to={`/#${slugify('Partnerzy')}`} className="py-5 px-3 text-gray-700 hover:text-gray-900">partnerzy</Link>
          <Link to={`/#${slugify('Kontakt')}`} className="py-5 px-3 text-gray-700 hover:text-gray-900">kontakt</Link>
        </div>

      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div className={`mobile-menu ${showMobileMenu ? 'hidden' : ''} md:hidden`}>
    <Link to={`/#${slugify('Jak mogę wziąć udział w inicjatywie?')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">chcę pomóc</Link>
    <Link to={`/#${slugify('Potrzebuję pomocy')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">potrzebuję pomocy</Link>
    <Link to={`/#${slugify('')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">o akcji:</Link>
    <Link to={`/#${slugify('FAQ')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">FAQ</Link>
    <Link to={`/#${slugify('Regulamin')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">regulamin zbiórki</Link>
    <Link to={`/#${slugify('Partnerzy')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">partnerzy</Link>
    <Link to={`/#${slugify('Kontakt')}`} className="block py-2 px-4 text-sm hover:bg-gray-200">kontakt</Link>  
  </div>
    </StyledMenu>;
}

const StyledMenu = styled.nav`
`;