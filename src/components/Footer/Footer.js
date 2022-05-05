import React from "react";
import { Link } from "gatsby";
import { slugify } from "../../common/helpers";
import { partners, actionExplained } from "../../common/data";
import * as Styled from "./Footer.styled";

export const Footer = () => {
    return <Styled.FooterContainer>
        <div>
    <Styled.FooterContent>
      <Styled.LogoWrapper className="space-x-4">
          <Link to="#">
            <span className="font-bold">#LaptopydlaUkrainy</span>
          </Link>
        </Styled.LogoWrapper>

        <Styled.LinkList className='space-x-1'>
          <Link to={`/#${slugify('FAQ')}`}>FAQ</Link>
          <Link to={`/#${slugify(actionExplained.title)}`}>o zbiórce</Link>
          <Link to={`/#${slugify(partners.title)}`}>Partnerzy</Link>
        </Styled.LinkList>
    </Styled.FooterContent>
  </div>
  </Styled.FooterContainer>
}