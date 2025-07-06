import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Expériences professionnelles</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2017 - présent"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Webdesigner / Intégrateur Front</h3>
            <h4 className="vertical-timeline-element-subtitle">Wylog Madagascar</h4>
            <p>
              UI design, intégration responsive, développement front-end (React, Vue.js, Next.js), création de newsletters, amélioration UX et gestion de mini-projets techniques.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2016"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Webdesigner & Intégratrice Junior</h3>
            <h4 className="vertical-timeline-element-subtitle">Smartelia Madagascar - Corporate & Co</h4>
            <p>
              Première expérience en tant que webdesigner junior : création de maquettes, visuels graphiques (logos, bannières), intégration HTML/CSS avec WordPress, en respectant les chartes clients.
Outils : Illustrator, Photoshop, WordPress
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;