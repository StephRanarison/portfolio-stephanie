import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPalette } from '@fortawesome/free-solid-svg-icons';
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div className="timeline" id="history">
      <div className="timeline-container">
        <h2 className="timeline-title">Expériences professionnelles</h2>

        {/* WYLOG MADAGASCAR - Janvier 2017 à aujourd'hui */}
        <div className="exp-card exp-card-main">
          <div className="exp-header">
            <div className="exp-icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="exp-period">
              <span className="exp-badge">En poste</span>
              <span className="exp-date">Janvier 2017 – Aujourd'hui</span>
            </div>
          </div>
          <h3>UX/UI Designer – Web & Performance Digitale</h3>
          <p className="exp-company">WYLOG MADAGASCAR</p>

          {/* Détail des missions par période */}
          <div className="exp-detail">
            
            <div className="exp-detail-item">
              <div className="exp-detail-header">
                <span className="exp-detail-date">2020 – Aujourd'hui</span>
                <span className="exp-detail-title">UX/UI Designer – Web & Performance</span>
              </div>
              <ul>
                <li>Conception de maquettes UI et intégration de sites web responsives orientés expérience utilisateur</li>
                <li>Création de templates et interfaces web modernes pour améliorer la cohérence et la navigation</li>
                <li>Design et optimisation de newsletters responsives pour la communication digitale</li>
                <li>Développement d'applications web avec Next.js dans une optique d'optimisation des performances</li>
                <li>Développement de fonctionnalités web sur mesure pour plateformes collaboratives</li>
                <li>Encadrement de stagiaires et architecture front-end scalable</li>
              </ul>
            </div>

            <div className="exp-detail-item">
              <div className="exp-detail-header">
                <span className="exp-detail-date">Août 2020 – Déc 2020</span>
                <span className="exp-detail-title">Intégrateur Front-End / UX – Mission (journalisme)</span>
              </div>
              <ul>
                <li>Intégration de maquettes UI en interfaces web dynamiques pour une application métier</li>
                <li>Amélioration de l'ergonomie et de l'expérience utilisateur</li>
                <li>Développement de fonctionnalités interactives en JavaScript et Vue.js</li>
                <li>Optimisation de l'affichage responsive multi-supports</li>
              </ul>
            </div>

            <div className="exp-detail-item">
              <div className="exp-detail-header">
                <span className="exp-detail-date">Janv 2017 – Janv 2020</span>
                <span className="exp-detail-title">Web Designer / Lead Front-End (sous-régie)</span>
              </div>
              <ul>
                <li>Conception complète de sites web de A à Z (brief, design, intégration, mise en ligne)</li>
                <li>Création d'identités visuelles complètes : logos, chartes graphiques, palettes</li>
                <li>Optimisation de l'expérience utilisateur (UX/UI) : navigation, structure des contenus</li>
                <li>Encadrement et formation de collaborateurs et stagiaires</li>
                <li>Gestion de projets et relation client avec suivi des besoins</li>
              </ul>
            </div>

          </div>

          <div className="exp-techs">
            <span>HTML</span><span>CSS</span><span>SASS</span><span>JavaScript</span><span>React</span>
            <span>Next.js</span><span>TypeScript</span><span>VueJS</span><span>Vite</span><span>MUI</span>
            <span>Git</span><span>Adobe XD</span><span>Photoshop</span><span>Illustrator</span>
          </div>
        </div>

        {/* SMARTELIA MADAGASCAR */}
        <div className="exp-card">
          <div className="exp-header">
            <div className="exp-icon">
              <FontAwesomeIcon icon={faPalette} />
            </div>
            <div className="exp-period">
              <span className="exp-date">2015 – 2016</span>
            </div>
          </div>
          <h3>Webdesigner junior</h3>
          <p className="exp-company">SMARTELIA MADAGASCAR / CORPORATE & CO</p>
          <ul>
            <li>Conception de maquettes web (hiérarchie visuelle, ergonomie)</li>
            <li>Création de supports graphiques (logos, bannières, visuels web)</li>
            <li>Intégration de sites web via WordPress et HTML/CSS</li>
          </ul>
          <div className="exp-techs">
            <span>Photoshop</span><span>Illustrator</span><span>WordPress</span><span>HTML</span><span>CSS</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Timeline;