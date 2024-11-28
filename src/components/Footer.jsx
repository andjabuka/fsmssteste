import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="visually-hidden">Rodapé do site com links para redes sociais</h2>
            
            <div className="social-icons" aria-label="Redes sociais">
                <a 
                    href="https://www.facebook.com/fsmsss01/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Visite nossa página no Facebook"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a 
                    href="https://www.linkedin.com/company/f%C3%B3rum-social-mundial-da-sa%C3%BAde-e-da-seguridade-social/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Visite nosso perfil no LinkedIn"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a 
                    href="https://www.instagram.com/fsm_saudeeseguridadesocial/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Visite nosso perfil no Instagram"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a 
                    href="https://www.youtube.com/@fsmsss-fsmdasaudeedaseguri1459" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Visite nosso canal no YouTube"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>

            <p>©{currentYear} por Fórum Social Mundial da Saúde e Seguridade Social.</p>
        </footer>
    );
};

export default Footer;
