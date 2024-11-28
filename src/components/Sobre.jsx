import React from 'react';
import style from '../styles/Sobre.module.css';

const Home = () => {
    return (
        <div>
            <main role="main" aria-labelledby="about-heading">
                <div className={style.sobre}>
                    <br />
                    <h1 id="about-heading">Sobre o Fórum Social Mundial da Saúde e Seguridade Social</h1>
                    <p>
                        O Fórum Social Mundial da Saúde e Seguridade Social tem o propósito de dialogar com a sociedade civil mundial comprometida com a luta pelo direito humano à saúde e à seguridade social, 
                        consideradas como bens públicos, opondo-se ao discurso e prática neoliberal que a situam no campo dos serviços, transformando-a numa mercadoria geradora de lucro. Defende um sistema de 
                        proteção social que inclui seguridade civil, social, econômica e ambiental.
                    </p>
                    <p>
                        Desta forma, a partir de uma perspectiva atuante, o FSMSSS pretende ser um <strong>espaço viabilizador de estratégias de incidência política, utilizado e alimentado pela sociedade civil,</strong> para 
                        que a materialidade do direito às proteções sociais ampliadas seja pleiteada e a democracia seja exercida ativamente pela população.
                    </p>
                    <p>
                        Atua, portanto, através de projetos que fomentam e articulam redes de sociedade civil envolvendo organizações sindicais, do terceiro setor, movimentos populares, culturais, ambientais e comunidade acadêmica, particularmente na América Latina e Caribe, por meio da formação crítica dos atores e disponibilizando insumos e estrutura para que as estratégias de incidência política sejam melhor formuladas.
                    </p>
                    <blockquote aria-label="Convite inclusivo">
                        <h5>Convidamos todes a unir-se a nós nesta construção de um mundo mais solidário!</h5>
                    </blockquote>
                </div>
            </main>
        </div>
    );
};

export default Home;

