import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faLaptopCode, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Figma",
    "XD",
    "Photoshop",
    "Illustrator",
    "Design system",
    "Wireframes",
    "Prototypes",
    "Responsive Design",
    "Maquettes fonctionnelles",
    "Charte graphique",
];

const labelsSecond = [
    "HTML5",
    "CSS3",
    "SASS / SCSS",
    "ReactJS",
    "Next.js",
    "Vue.js",
    "Typescript",
    "Wordpress",
    "Git",
];

const labelsThird = [
    "Agile / Scrum",
    "Emailing",
    "Encadrement d’équipe",
    "Conduite de projet",
    "Newsletters",
    "Maquettes vers code",
    "CMS personnalisé",
    "Accessibilité",
    "Support technique",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertises</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPalette} size="3x" />
                    <h3>Web Design & UI/UX</h3>
                    <p>Grâce à mon sens du design et à ma maîtrise des outils graphiques, je conçois des interfaces modernes, intuitives et centrées sur l’utilisateur, avec une forte attention au branding et à l’ergonomie.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Intégration & Front-End</h3>
                    <p>Je développe et intègre des interfaces responsives, performantes et optimisées SEO, avec un haut niveau de détail. Je travaille sur des projets en React, Vue.js et Next.js, en suivant des méthodologies agiles.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>Gestion de projet & Communication</h3>
                    <p>Je suis capable de mener des projets de bout en bout, de la conception à la livraison. Mon expérience en équipe et mon sens de l’organisation me permettent d’assurer un bon suivi client et une qualité constante.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;