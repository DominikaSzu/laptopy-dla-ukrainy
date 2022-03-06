import React from "react";
import {slugify} from "../common/helpers";

export const TextComponent = ({title, content}) => {
    return <div className="max-w-6xl mx-auto px-4 my-14" 
    id={slugify(title)}>
        <h2 className="font-bold text-xl text-center my-6">{title}</h2>
        {content && <p>{content}</p>}
    </div>
}