import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-amber-500">Container Living Col</h2>
            <p className="text-gray-500 mt-2">Diseño industrial hecho a medida</p>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center">
          <p className="text-gray-600">© 2025 Container Living Col · Bogotá, Colombia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;