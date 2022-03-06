import React from "react";
import { Menu, Footer } from "./index";

export const Layout = ({ children }) => {    
    return <div>
        <Menu/>
        { children }
<Footer/>
    </div>
}