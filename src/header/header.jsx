import React from 'react';
import NavBar from '../componemts/navbar';

function Header  () {
  return (
    <header className="bg-gray-800 text-white py-8">
      <div >
        <div  className="container mx-auto flex justify-between items-center px-4">
             {/* Logo */}
          <div className="flex items-center">
          <img src="src/assets/images/logo site.png" alt="Logo" className="h-12 w-auto mr-4" />
          <span className="text-xl font-bold">TH Color</span>
          </div>
         {/* Barre de recherche (exemple simple) */}
         <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full bg-white-700 text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-gray-400"
          />
          </div>
          {/* Connexion et panier */}
          <div className='flex space-x-4 text-lg'>
          <a href="/login" className="hover:text-gray-400">Connexion</a>
          <a href="/cart" className="hover:text-gray-400">Panier</a>
          </div>
        
        </div>
        
      </div>
      <div>
        
      </div>
      <NavBar/>
    </header>
  );
};

export default Header;