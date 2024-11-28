import React from 'react';
import '../styles/Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Hero = () => {
    return (
        <section className="hero" aria-labelledby="hero-heading">
            <div 
                id="carouselExampleIndicators" 
                className="carousel slide" 
                data-bs-ride="carousel" 
                data-bs-interval="3000" 
                aria-label="Galeria de imagens do Fórum Social Mundial"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active" role="group" aria-roledescription="slide" aria-label="1 de 3">
                        <img 
                            src="/images/slide1.jpeg" 
                            className="d-block w-100" 
                            alt="Participantes do Fórum em um auditório" 
                        />
                    </div>
                    <div className="carousel-item" role="group" aria-roledescription="slide" aria-label="2 de 3">
                        <img 
                            src="/images/slide2.jpeg" 
                            className="d-block w-100" 
                            alt="Discussão em grupo durante o evento do Fórum" 
                        />
                    </div>
                    <div className="carousel-item" role="group" aria-roledescription="slide" aria-label="3 de 3">
                        <img 
                            src="/images/slide3.jpeg" 
                            className="d-block w-100" 
                            alt="Banner com a mensagem do Fórum Social Mundial" 
                        />
                    </div>
                </div>
                <button 
                    className="carousel-control-prev" 
                    type="button" 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide="prev" 
                    aria-label="Imagem anterior"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button 
                    className="carousel-control-next" 
                    type="button" 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide="next" 
                    aria-label="Próxima imagem"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <div className="text-content">
                <h2 id="hero-heading">Convidamos você a se juntar a nós na construção de um mundo mais solidário!</h2>
                <p>
                    O Fórum Social Mundial sobre Saúde e Seguridade Social tem como objetivo dialogar com a sociedade civil mundial comprometida com a luta pelo direito humano à saúde e à seguridade social.
                </p>
            </div>
        </section>
    );
};

export default Hero;

