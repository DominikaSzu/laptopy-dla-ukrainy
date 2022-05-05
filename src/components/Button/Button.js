import React from "react";
import { Link } from "gatsby";
import { slugify } from "../../common/helpers";
import * as Styled from "./Button.styled";

export const Button = ({ useLink = false, path, content, className }) => {
return <Styled.Link>
    {
        useLink ?
        <Link className={ className } target="_blank" to={ `/#${slugify(path)}`}>{ content }</Link>
        : <a className={ className } href={ path } target="_blank">{content}</a>    
    }
</Styled.Link>
}