import React from "react";

export const Footer = () => {
    return <div className={'bg-gray-100'}>
        <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between flex-col md:flex-row">
      
      <div className={'flex space-x-4 justify-center md:justify-start'}>
          <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <span className="font-bold">#LaptopyDlaUkrainy</span>
          </a>
        </div>

        <div className="flex items-center space-x-1 flex-col md:flex-row">
          <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">FAQ</a>
          <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Partnerzy</a>
          <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Regulamin zbiórki</a>
          <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">kontakt</a>
        </div>
    </div>
  </div>
  </div>
}