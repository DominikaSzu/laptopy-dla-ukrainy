import React from "react";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {    
    return <div>
        <Menu/>
        { children }
<Footer/>
    </div>
}