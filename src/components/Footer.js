import React from "react";
import { Link } from "gatsby";
import { slugify } from "../common/helpers";

export const Footer = () => {
    return <div className={'bg-gray-100'}>
        <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between flex-col md:flex-row">
      
      <div className={'flex space-x-4 justify-center md:justify-start'}>
          <Link to="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <span className="font-bold">#LaptopyDlaUkrainy</span>
          </Link>
        </div>

        <div className="flex items-center space-x-1 flex-col md:flex-row">
          <Link to={`/#${slugify('FAQ')}`} className="py-5 px-3 text-gray-700 hover:text-gray-900">FAQ</Link>
          <Link to={`/#${slugify('Partnerzy')}`} className="py-5 px-3 text-gray-700 hover:text-gray-900">Partnerzy</Link>
          <Link to={`/#${slugify('Regulamin')}`} className="py-5 px-3 text-gray-700 hover:text-gray-900">Regulamin zbiórki</Link>
          <Link to={`/#${slugify('Kontakt')}`} className="py-5 px-3 text-gray-700 hover:text-gray-900">kontakt</Link>
        </div>
    </div>
  </div>
  </div>
}