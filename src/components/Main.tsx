import React from "react";
import avatar from "../assets/images/Stéphanie.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero__left">
        <span className="hero__tag">Web designer & Intégratrice front</span>
        <h1 className="hero__title">
          Stéphanie <span className="hero__accent">Ranarison</span>
        </h1>
        <p className="hero__description">
          Je conçois des interfaces intuitives, accessibles et alignées<br />
          avec les besoins réels de vos utilisateurs.
        </p>
        <div className="hero__buttons">
          <button className="btn btn--primary" onClick={scrollToProjects}>
            Voir mes projets
          </button>
          <button className="btn btn--secondary" onClick={scrollToContact}>
            Me contacter
          </button>
        </div>
        <div className="hero__social">
          <a href="https://www.linkedin.com/in/stephanie-ranarison/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="hero__right">
        <div className="hero__avatar">
          <img src={avatar} alt="Stéphanie Ranarison" />
        </div>
      </div>
    </section>
  );
}

export default Main;