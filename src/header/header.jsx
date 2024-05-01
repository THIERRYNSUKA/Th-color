import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-8">
      <div >
        <div  className="container mx-auto flex justify-between items-center px-4">
             {/* Logo */}
          <div className="flex items-center">
          <img src="/path/to/your/logo.svg" alt="Logo" className="h-8 w-auto mr-4" />
          <span className="text-xl font-bold">Mon Site</span>
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
          <div className='flex space-x-4'>
          <a href="/login" className="hover:text-gray-400">Connexion</a>
          <a href="/cart" className="hover:text-gray-400">Panier</a>
          </div>
        
        </div>
        <div className="container mx-auto flex justify-between items-center px-4">
            {/* Liens de navigation */}
        <nav className="flex items-center space-x-4">
          {/* Liens vers les pages */}
          <a href="/" className="hover:text-gray-400">Accueil</a>
          <a href="/about" className="hover:text-gray-400">À propos</a>
          <a href="/services" className="hover:text-gray-400">Services</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/blog" className="hover:text-gray-400">Blog</a>
          <a href="/produit" className="hover:text-gray-400">Produit</a>

          
        </nav>
        </div>
       

       

        
      </div>
    </header>
  );
};

export default Header;