import React from "react";
import { Menu, Footer } from "../index";
import { Helmet } from "react-helmet";


export const Layout = ({ children }) => {    
    return <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Laptopy dla Ukrainy</title>
          <link rel="canonical" href="https://laptopydlaukrainy.pl/" />
        </Helmet>
        <Menu/>
        { children }
<Footer/>
    </div>
}