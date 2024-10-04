import React from "react";
import "./App.css"; 
import Graphique from "./components/graphiqueAr";
import GraphiqueD from "./components/graphiqueD";
import TotalArbres from "./components/TotalArbres";
import ListeLibelleFrancais from "./components/libellefrancais";

function App() {
  return (
    <div className="flex flex-col items-center p-4 w-full"> {/* Centrer les éléments dans la colonne et ajuster la largeur */}
      <h1 className='text-bold text-2xl p-4 bg-green-200 items-center rounded-lg border border-green-500 text-center'> {/* Centrer le titre */}
        Quelques statistiques des arbres de Paris
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-4 space-y-4 lg:space-y-0 w-full items-center"> {/* Empiler les graphiques sur mobile et ajuster l'espace */}
        <div className="w-full max-w-full lg:max-w-md"> {/* Largeur maximale flexible pour mobile et fixe pour les grands écrans */}
          <Graphique />
        </div>
        <div className="w-full max-w-full lg:max-w-md"> {/* Ajustez la largeur max selon vos besoins */}
          <GraphiqueD />
        </div>
      </div>

      <TotalArbres />
      <ListeLibelleFrancais />
    </div>
  );
}

export default App;
