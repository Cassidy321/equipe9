import React, { useState } from 'react';
import arbres from './data/arbres'; // Assurez-vous que le chemin est correct

const ListeArbres = () => {
  const [selectedArbre, setSelectedArbre] = useState(null);

  const handleClick = (arbre) => {
    setSelectedArbre(arbre);
  };

  const handleClose = () => {
    setSelectedArbre(null);
  };

  return (
    <div className="p-4 max-w-full m-10"> {/* conteneur étendu à la largeur complète */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full"> {/* Grille étendue sur toute la largeur */}
        <div>
      <h2 className="text-xl font-semibold mb-4">Découvez les espèces végétaux :</h2>
      </div>
        {arbres.map((arbre, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onClick={() => handleClick(arbre)}
          >
            <div
              className="relative h-60 rounded-lg shadow-lg overflow-hidden" // Augmentation de la hauteur à 60
              style={{
                backgroundImage: `url(${arbre.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Ombre noire */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
              {/* Texte centré */}
              <div className="absolute inset-0 flex justify-center items-center">
                <h3 className="text-white text-lg font-bold text-center">
                  {arbre.nom}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedArbre && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
            <h3 className="text-xl font-bold">{selectedArbre.nom}</h3>
            <p className="mb-2">{selectedArbre.description}</p>
            <p className="mb-2"><strong>Climat:</strong> {selectedArbre.climat}</p>
            <p className="mb-4"><strong>Bienfaits:</strong> {selectedArbre.bienfaits}</p>
            <img
              src={selectedArbre.image}
              alt={selectedArbre.nom}
              className="w-full h-auto mb-4 rounded"
            />
            <button
              onClick={handleClose}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListeArbres;
