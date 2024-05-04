import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Contactez-nous</h1>
          {/* Ajoutez ici des éléments de navigation ou un bouton de retour */}
        </div>
      </header>

      <section className="bg-cover bg-center py-20" style={{ backgroundImage: "url('src/assets/images/acre.jpg')" }}>
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
        <div className="max-w-lg mx-auto">
          {/* Contact Form */}
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nom Complet</label>
              <input
                type="text"
                id="name"
                placeholder="Entrez votre nom complet"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Adresse Email</label>
              <input
                type="email"
                id="email"
                placeholder="Entrez votre adresse email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                placeholder="Écrivez votre message ici"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Envoyer
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div className="bg-white shadow-md rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Informations de Contact</h2>
            <p className="text-lg text-gray-700 mb-4">
              Téléphone: (243) 8992-9611
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Email: thcolor@gmail.com
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Adresse: 22 Rue de la Maternite, Kinshasa, Rd Congo
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Notre Boutique de Peintures</p>
      </footer>
    </div>
  );
};

export default Contact;