import React from 'react';
import './Propos.css';

export default function Propos() {
    return (
        <div>
            <div className='titlePropos'>
               À propos
            </div>

            <div className='main'>
            <div className='image'>
            <img src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>

            <div className='textPropos'>
           <p>Notre objectif est de sensibiliser la population à l'importance des arbres dans notre environnement. <br />En calculant le nombre d'arbres à Paris par habitant, nous souhaitons encourager chacun à agir pour un avenir durable. <br /> Chaque arbre compte dans la lutte contre le changement climatique. <br />En plantant et protégeant les arbres, nous créons un espace de vie sain. Nous croyons que des actions locales peuvent avoir un impact global. <br /> Rejoignez-nous dans notre mission pour un Paris plus vert et respirez un air plus pur pour tous !</p>
            </div>
            </div>
            </div>
    )
}
