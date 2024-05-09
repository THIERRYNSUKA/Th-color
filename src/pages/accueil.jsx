import React from 'react';
import kopo from "../assets/images/kopo.avif"
import { listeAcueil } from '../data/listeAccueil';

function Accueil() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center text-black py-20 h-full max-h-80" style={{ backgroundImage: "url('src/assets/images/bureau.jpg')" }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenue dans notre boutique de peinture</h1>
          <p className="text-4xl font-bold mb-4">Découvrez notre large sélection de peintures de qualité.</p>
          <a href="#" className="bg-white text-blue-500 py-2 px-4 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition duration-300">Voir les produits</a>
        </div>
      </section>

      
      
<div className="py-4">
    <div className="container mx-auto text-center ">
    
    <div className="grid grid-cols-3 gap-8">
      {listeAcueil.map((peint) => (
        <div key={peint.id} className="bg-gray-800 rounded-lg shadow-lg p-6">
          <img src={peint.cover} alt={peint.name} className="lmj-plant-item-cover cover mb-2 " />
          <div className="">
          {/* <p className="font-semibold">{peint.name}</p> */}
          <h3 className="text-lg font-semibold mb-2">{peint.category}</h3>
          <p>{peint.text}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  </div>

      {/* About Us Section */}
      
      <section className="bg-cover bg-center py-20" style={{ backgroundImage: "url('src/assets/images/peintures (22).jpg')" }}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-orange-600">À propos de nous</h2>
        <p className="text-3xl font-bold mb-8 text-orange-600">
          Notre boutique offre une gamme complète de peintures de qualité supérieure pour tous vos besoins créatifs.
        </p>
        <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300">En savoir plus</a>
      </div>
    </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-orange-600">Contactez-nous</h2>
          <p className="text-lg text-gray-700 mb-8">
            Vous avez des questions sur nos produits ou services ? N'hésitez pas à nous contacter.
          </p>
          <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300">Nous écrire</a>
        </div>
      </section>
    </div>
  );
};

export default Accueil;