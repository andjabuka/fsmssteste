import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" aria-labelledby="contact-section">
            <h2 id="contact-section" className="visually-hidden">Formulário de Contato</h2>
            <div className="contact-info">
                <p>
                    <img 
                        src="/images/o-email.png" 
                        alt="Ícone Email" 
                        className="contact-icon" 
                        aria-hidden="true" // Ícone decorativo
                    />
                    <a href="mailto:forumsocialmundialsss@gmail.com" 
                       aria-label="Enviar e-mail para forumsocialmundialsss@gmail.com">
                        forumsocialmundialsss@gmail.com
                    </a>
                </p>
            </div>
            <div className="contact-form" id="contato">
                <form action="https://formsubmit.co/forumsocialmundialsss@gmail.com" method="POST" role="form" aria-labelledby="contact-form">
                    <h3 id="contact-form" className="visually-hidden">Preencha o formulário abaixo para entrar em contato</h3>
                    <div className="input-group">
                        <label htmlFor="name" className="visually-hidden">Seu Nome</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Seu Nome" 
                            className="rounded-input half-input" 
                            aria-required="true"
                            aria-label="Digite seu nome"
                        />
                        <label htmlFor="email" className="visually-hidden">Seu Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Seu Email" 
                            className="rounded-input half-input" 
                            aria-required="true"
                            aria-label="Digite seu e-mail"
                        />
                    </div>
                    <label htmlFor="subject" className="visually-hidden2">Assunto</label>
                    <input 
                        type="text" 
                        name="subject" 
                        id="subject" 
                        placeholder="Assunto" 
                        className="rounded-input full-input" 
                        aria-required="true"
                        aria-label="Digite o assunto do seu contato"
                    />
                    <button 
                        type="submit" 
                        className="submit-btn" 
                        aria-label="Enviar formulário de contato"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

