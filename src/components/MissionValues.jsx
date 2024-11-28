import React from 'react';
import '../styles/MissionValues.css';

const MissionValues = () => {
    return (
        <section className="mission-values" aria-labelledby="mission-heading">
            <div className="image-container1">
                <img 
                    src="/images/post4.webp" 
                    alt="Imagem representando a missão e os valores, com foco no impacto econômico do Brasil" 
                />
            </div>
            <div className="text-container1">
                <h2 id="mission-heading">
                    A DÍVIDA EXTERNA DO BRASIL E SEU IMPACTO NA ECONOMIA E NO DESENVOLVIMENTO DO PAÍS
                </h2>
                <p>
                    Primeiramente, vale ressaltar o que é a dívida externa do Brasil? Pois bem, a dívida externa do Brasil é a soma dos débitos do país, financiamentos e empréstimos feitos no exterior pelo governo federal, para beneficiar empresas estatais ou privadas. Ou seja, a dívida externa do Brasil é a soma de todos os empréstimos contraídos no exterior feitos pelo governo e esse preço pode impactar fortemente não só o mercado financeiro, mas também o funcionamento do Estado.
                </p>
                <button aria-label="Saiba mais sobre o impacto da dívida externa do Brasil">
                    <a href="pages/noticia4.html">Saiba Mais</a>
                </button>
            </div>
        </section>
    );
};

export default MissionValues;

