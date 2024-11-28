import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../styles/Sobre.module.css'

const Plataforma = () => {
    return (
        <div>
            <Header />
            <main>
                <div className={style.sobre}>
                    
                        <div className={style.sobre}>
                        <br></br><br></br>
                        <h1>EduActiva - Plataforma de Ensino-Aprendizagem</h1>
                        <br></br><br></br>
                        <p>A partir da experiência e atuação do Fórum Social Mundial da Saúde e da Seguridade Social em nosso Observatório de Conflitualidades em Políticas Sociais e Ambientais na América Latina e Caribe idealizamos a criação de uma plataforma de cursos voltados ao ensino e aprendizagem dos direitos fundamentais em sua mobilização e busca por incidência político-social. Assim nasceu a Plataforma EduActiva, o centro horizontal de formação, ensino e aprendizagem político-social do Fórum Social Mundial da Saúde e da Seguridade Social!
                        <br></br><br></br>A partir do entendimento dos fios estruturantes da  Declaração sobre o Direito ao Desenvolvimento de 1986, a Activa tem como objetivo a visão integral dos direitos humanos, políticos, econômicos e ambientais na busca pela justiça social e pelo fortalecimento das ferramentas de seguridade social - políticas e civis. Com isso, os cursos hospedados serão de criação externa - de grupos da sociedade civil organizada que desejem difundir seus conhecimentos e pautas - e internos - de criação do FSMSSS, a partir das pautas percebidas em nosso Observatório e também trazidas até nós.
                        <br></br><br></br>Buscando a visão integral e interdependentes do desenvolvimento - em suas muitas formas alternativas, fugindo do modelo neoliberal destrutivo - conectado diretamente ao gozo máximo dos direitos humanos, deixamos o convite a quem quiser colaborar com nossos cursos.
                        <br></br>
                        <br></br>
                        Site: <a href='eduactivafsmsss.com' target='_blank'><u>eduactivafsmsss.com</u></a> 
                        <br></br>
                        E-mail: <u>ensinofsmsss@gmail.com </u></p>
                    </div>
                </div>    
            </main>
            <Footer />
        </div>
    );
};

export default Plataforma;