import React from 'react';
import './FAQ.css';

export default function FAQ() {
    return (
        <div>
            {/* Titre FAQ */}
            <div className='titleFAQ'>
                <h1>FAQ</h1>
            </div> 

            {/* Conteneur principal des cartes */}
            <div className="maincontainer">
                <div className="card">
                    <div className="content">
                        <h3>Quel est l'objectif de ce site ?</h3>
                        <p>
                        Notre site permet de calculer le nombre d'arbres par habitant dans différentes régions, afin de sensibiliser 
                        à l'importance de la reforestation et de la protection des forêts pour lutter contre le changement climatique.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <h3>Puis-je utiliser ces informations pour aider ma communauté ?</h3>
                        <p>
                        Absolument ! Nos calculs peuvent être utilisés pour des campagnes de sensibilisation, des projets de reforestation ou des initiatives locales visant à améliorer la couverture forestière de votre région.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <h3>Comment puis-je participer à des projets de plantation d'arbres ?</h3>
                        <p>
                        Nous travaillons en partenariat avec plusieurs organisations de reforestation. <br /> Vous trouverez des liens vers ces projets dans la section "Partenariats" de notre site, où vous pouvez vous impliquer ou faire des dons pour soutenir ces initiatives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
