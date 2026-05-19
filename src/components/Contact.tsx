import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      setIsSent(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setIsSent(false), 3000);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-tag">Me contacter</span>
          <h2 className="contact-title">Parlons de votre projet</h2>
          <p className="contact-subtitle">
            Un projet en tête qui attend de voir le jour ? Collaborons et concrétisons-le ensemble !
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Coordonnées */}
          <div className="contact-info">
            <h3>Mes coordonnées</h3>
            <div className="contact-details">
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:Steph.ranarison@gmail.com">Steph.ranarison@gmail.com</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+261342823744">+261 34 28 237 44</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Antananarivo, Madagascar</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faLinkedin} />
                <a href="https://www.linkedin.com/in/stephanie-ranarison/" target="_blank" rel="noreferrer">
                  linkedin.com/in/stephanie-ranarison
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Envoyez-moi un message</h3>
            <div className="form-group">
              <input
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={nameError ? 'error' : ''}
              />
              {nameError && <span className="error-message">Nom requis</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? 'error' : ''}
              />
              {emailError && <span className="error-message">Email requis</span>}
            </div>

            <div className="form-group">
              <textarea
                placeholder="Votre message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={messageError ? 'error' : ''}
              />
              {messageError && <span className="error-message">Message requis</span>}
            </div>

            <button type="submit" className="btn btn--primary">
              <FontAwesomeIcon icon={faPaperPlane} />
              Envoyer le message
            </button>

            {isSent && <div className="success-message">Message envoyé avec succès ! ✨</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;