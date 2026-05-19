import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faLaptopCode, faTools, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

function Expertise() {
  return (
    <div className="expertise" id="expertise">
      <div className="expertise-container">
        <h2 className="expertise-title">Compétences</h2>
        <div className="expertise-grid">
          
          {/* UX/UI & Design */}
          <div className="expertise-card">
            <div className="expertise-icon">
              <FontAwesomeIcon icon={faPalette} />
            </div>
            <h3>UX/UI & Design</h3>
            <p>UX research, wireframing, prototypage, design system, branding, responsive, CRO.</p>
            <div className="expertise-chips">
              {["UX research", "Wireframing", "Prototypage", "Design system", "Branding", "Responsive", "CRO"].map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Front-End */}
          <div className="expertise-card">
            <div className="expertise-icon">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <h3>Front-End</h3>
            <p>HTML5, CSS3, SASS, JavaScript, TypeScript, React, Next.js, Vue.js, Vite, MUI.</p>
            <div className="expertise-chips">
              {["HTML5", "CSS3", "SASS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Vite", "MUI"].map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Outils & méthodes */}
          <div className="expertise-card">
            <div className="expertise-icon">
              <FontAwesomeIcon icon={faTools} />
            </div>
            <h3>Outils & méthodes</h3>
            <p>Figma, Adobe XD, Photoshop, Illustrator, Git, WordPress, Agile, Jira.</p>
            <div className="expertise-chips">
              {["Figma", "Adobe XD", "Photoshop", "Illustrator", "Git", "WordPress", "Agile", "Jira"].map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Performance & SEO */}
          <div className="expertise-card">
            <div className="expertise-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Performance & SEO</h3>
            <p>Core Web Vitals, Lighthouse, optimisation Next.js, performance front-end, amélioration UX.</p>
            <div className="expertise-chips">
              {["Core Web Vitals", "Lighthouse", "Optimisation Next.js", "Performance front-end", "CRO", "UX amélioration"].map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;