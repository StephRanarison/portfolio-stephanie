import React from "react";
import "../assets/styles/Project.scss";

// Import des images locales
import helixcareImg from "../assets/images/helix.png";
import curesureImg from "../assets/images/curesure.png";
import viralgrowthImg from "../assets/images/viralG.png";
import lyannajImg from "../assets/images/lyannajM.png";
import gohighlevelImg from "../assets/images/expatSerein.png";

const projectsData = [
  {
    id: 1,
    title: "HelixCare – UI/UX",
    category: "Maquette Figma · Application santé",
    description: "Design d’une interface patient fluide, avec suivi des rendez-vous, téléconsultation et espace médical. Approche centrée utilisateur et composants réutilisables.",
    image: helixcareImg,
    link: "https://www.figma.com/proto/DUAAxO697pSSH0P0tQUmqc/HelixCare",
    tags: ["Figma", "UI/UX", "Design system", "Prototypage"],
    contain: true
  },
  {
    id: 2,
    title: "CureSure",
    category: "Maquette Figma · Plateforme bien-être",
    description: "Création d’un parcours d’inscription et de gestion de rendez-vous pour professionnels de santé. Interface épurée, accessible et responsive.",
    image: curesureImg,
    link: "https://www.figma.com/proto/pJyrvwqT9ltffneswkGyKg/CureSure",
    tags: ["Figma", "Wireframes", "UX research", "UI"],
    contain: false
  },
  {
    id: 3,
    title: "Viral Growth – Optin Europe",
    category: "Landing page · Intégration",
    description: "Page d’optin haute conversion pour un programme stratégique dirigeants. Structure persuasive, micro‑interactions et design responsif.",
    image: viralgrowthImg,
    link: "https://viralgrowth.fr/optin-europe-page",
    tags: ["HTML/CSS", "JavaScript", "Responsive", "UX"],
    contain: false
  },
  {
    id: 4,
    title: "Mouvement Lyannaj – Challenge Immo",
    category: "Landing page · Intégration + Newsletter",
    description: "Page d’inscription à un challenge immobilier. Design impactant, formulaire international et template newsletter associé.",
    image: lyannajImg,
    link: "https://www.mouvementlyannaj.com/optin-fb-new/",
    tags: ["HTML/CSS", "Form", "Responsive", "Email"],
    contain: false
  },
  {
    id: 5,
    title: "Expatserein – Diagnostic 80/10/3",
    category: "Landing page · Quiz interactif",
    description: "Page de diagnostic certifié pour entrepreneurs français au Portugal. Quiz en 60 secondes générant un PDF personnalisé sur 3 piliers : fiscal, business et IA.",
    image: gohighlevelImg,
    link: "https://expatserein.com/diagnostic-80-10-3-8702",
    tags: ["HTML/CSS", "JavaScript", "Form", "UX", "Responsive"],
    contain: false
  }
];

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Quelques réalisations</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image" style={project.contain ? { background: "transparent" } : {}}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    objectFit: project.contain ? "contain" : "cover",
                    background: project.contain ? "transparent" : "none"
                  }}
                />
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    Voir le projet →
                  </a>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;