import React from "react";
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Quelques réalisations</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://xd.adobe.com/view/d56c2598-e931-4d87-b0e9-101350e55c79-803f/?fullscreen" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://xd.adobe.com/view/d56c2598-e931-4d87-b0e9-101350e55c79-803f/?fullscreen" target="_blank" rel="noreferrer"><h2>Maquette BO</h2></a>
                <p>Création d’interfaces UI/UX, gestion de projets digitaux, personnalisation technique, design graphique et optimisation workflows.</p>
            </div>
            <div className="project">
                <a href="https://xd.adobe.com/view/0940d73d-7e6a-4190-ac22-c7d30aead911-5c13/?fullscreen" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://xd.adobe.com/view/0940d73d-7e6a-4190-ac22-c7d30aead911-5c13/?fullscreen" target="_blank" rel="noreferrer"><h2>Wylog Madagascar</h2></a>
                <p>Création de maquettes UI/UX innovantes et développement de solutions digitales adaptées au marché malgache pour accompagner la transformation numérique.</p>
            </div>
            <div className="project">
                <a href="https://xd.adobe.com/view/c26bb893-7ef5-43d6-a065-e051080bde64-9738/?fullscreen" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://xd.adobe.com/view/c26bb893-7ef5-43d6-a065-e051080bde64-9738/?fullscreen" target="_blank" rel="noreferrer"><h2>Création maquette desktop et mobile</h2></a>
                <p>Conception de maquettes UI/UX responsive pour une page de questionnaire, optimisées pour une expérience utilisateur fluide sur tous types d’écrans.</p>
            </div>
            <div className="project">
                <a href="https://manuelonco.fr/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://manuelonco.fr/" target="_blank" rel="noreferrer"><h2>Manuel d’oncologie</h2></a>
                <p>Création d’une maquette desktop et de deux maquettes mobiles (« évolution ») pour un manuel pratique d’oncologie. Intégration front-end des interfaces avec respect des contraintes UX, lisibilité et navigation médicale optimisée.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>Strategic Initiatives for Software Publishers</h2></a>
                <p>Création de maquettes desktop et mobile, suivie de l’intégration responsive d’une interface applicative complète (front & back). Projet destiné aux éditeurs de logiciels, avec un design UI/UX structuré pour optimiser l’expérience utilisateur, la navigation multi-écrans et la cohérence visuelle à travers l’ensemble de la plateforme.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;