import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-neutral-950">Nos Services</h1>
          {/* Ajoutez ici des éléments de navigation ou un bouton de retour */}
        </div>
      </header>

      <section className="bg-cover bg-center py-20" style={{ backgroundImage: "url('src/assets/images/zzz.png')" }}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-neutral-950">À propos de nous</h2>
        <p className="text-3xl font-bold mb-8 text-neutral-950">
          Notre boutique offre une gamme complète de peintures de qualité supérieure pour tous vos besoins créatifs.
        </p>
        <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300">En savoir plus</a>
      </div>
    </section>


      {/* Main Content */}
      <div className="container mx-auto py-8 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Service 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Consultation Artistique</h2>
            <p className="text-lg text-gray-700">
              Besoin de conseils pour choisir l'œuvre parfaite? Notre équipe d'experts en art est là pour vous guider
              dans votre sélection et répondre à toutes vos questions.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Livraison Rapide</h2>
            <p className="text-lg text-gray-700">
              Profitez de notre service de livraison rapide et sécurisé. Recevez votre commande chez vous en quelques jours.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Encadrement Personnalisé</h2>
            <p className="text-lg text-gray-700">
              Nous offrons des services d'encadrement personnalisés pour mettre en valeur votre nouvelle œuvre d'art.
              Choisissez parmi une variété de cadres pour compléter votre décoration.
            </p>
          </div>

          {/* Ajoutez d'autres services ici */}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Notre Boutique de Peintures</p>
      </footer>
    </div>
  );
};

export default Services;
