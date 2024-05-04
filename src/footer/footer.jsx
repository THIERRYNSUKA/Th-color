import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Suivez-nous</h3>
          <div className="mt-4 flex justify-center md:justify-start">
            <a href="#" className="mr-4">
              <i className="fab fa-facebook-f">Facebook</i>
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-twitter">Twitter</i>
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-instagram">Instagram</i>
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-pinterest">Pinterest</i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Newsletter</h3>
          <p className="mt-4">Inscrivez-vous à notre newsletter pour recevoir les dernières mises à jour.</p>
          <form className="mt-4">
            <input type="email" placeholder="Entrez votre adresse e-mail" className="px-4 py-2 rounded-lg bg-gray-800 text-white w-full" />
            <button type="submit" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg mt-2">S'abonner</button>
          </form>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h3 className="text-xl font-bold">Contactez-nous</h3>
          <p className="mt-4">22 Rue de la Maternite,<br />243 Kinshasa, RD Congo</p>
          <p className="mt-2">thcolor@gmail.com</p>
          <p className="mt-2">+243899296111</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-8 text-center">
        <p>&copy; 2024 MaGalerie. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;