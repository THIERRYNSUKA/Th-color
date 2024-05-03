import React from 'react';

const APropos = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">À Propos de Notre Boutique</h1>
          {/* Ajoutez ici des éléments de navigation ou un bouton de retour */}
        </div>
      </header>

      <section className="bg-cover bg-center py-20" style={{ backgroundImage: "url('src/assets/images/peintures (34).jpg')" }}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-orange-600">À propos de nous</h2>
        <p className="text-3xl font-bold mb-8 text-orange-600">
          Notre boutique offre une gamme complète de peintures de qualité supérieure pour tous vos besoins créatifs.
        </p>
        <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300">En savoir plus</a>
      </div>
    </section>


      {/* Main Content */}
      <div className="container mx-auto py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Qui Sommes-Nous?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Bienvenue chez [Nom de la Boutique], votre destination en ligne pour trouver des peintures originales
            et uniques. Nous nous engageons à fournir à nos clients des œuvres d'art de haute qualité qui enrichissent
            les espaces et captivent l'imagination.
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Notre mission est de rendre l'art accessible à tous en proposant une sélection variée de peintures
            qui s'adaptent à différents styles et budgets. Nous soutenons également les artistes talentueux en leur
            offrant une plateforme pour présenter leur travail exceptionnel.
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Pourquoi Choisir [Nom de la Boutique]?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Chez [Nom de la Boutique], nous croyons en la valeur de l'art pour enrichir la vie quotidienne.
            Nous garantissons la qualité et l'authenticité de chaque œuvre que nous proposons, tout en offrant
            une expérience client exceptionnelle.
          </p>
          {/* Ajoutez d'autres sections ou informations pertinentes */}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p> Notre Boutique de Peintures</p>
      </footer>
    </div>
  );
};

export default APropos;