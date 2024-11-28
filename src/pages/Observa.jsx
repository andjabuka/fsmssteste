import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Observa.module.css'
import React, { useRef, useState } from 'react'; // React e hooks
import {useNavigate } from 'react-router-dom'; // Navegação
import axios from 'axios'; // Biblioteca para requisições HTTP


    

const Observa = () => {

    const handleCardClick = (id) => {
        navigate(`/FullPost/${id}`);
    };
    const navigate = useNavigate(); // Hook para navegação
    const [posts, setPosts] = useState([]); // Estado para armazenar a lista de posts
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Estado para armazenar mensagens de erro
    const handleCategory = async(category)=>{
        try {
            const response = await axios.get(`http://localhost:8080/blog/category/${category}`);
            navigate('/Category',{state:{posts:response.data}});
        } catch (error)
        {
            console.error(`Erro ao buscar posts da categoria ${category}`, error);
            setError("Erro ao carregar posts da categoria. Tente novamente.");    
        }
    };
    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/blog/list');
            if (response.status === 200 && response.data.length > 0) {
                const sortedPosts = response.data.sort((a, b) => new Date(b.datacreation) - new Date(a.datacreation));
                setPosts(sortedPosts);
            }
        } catch (error) {
            console.error("Erro ao carregar os posts: ", error);
            setError("Erro ao carregar os posts. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };
    const navRef = useRef();

    const showNavbar = () => {
        console.log(navRef.current); // Verifica se o `ref` está funcionando
        navRef.current.classList.toggle("responsive_nav");
    };
  
    return (
        <div>
            <Header />
            <main>
                <div className={styles.obscontainer}>

                <div 
                    className={`${styles.imageCenter1} observaimg-container`} 
                    onClick={() => handleCategory('observActiva')} 
                style={{ cursor: 'pointer' }}
>
                <img 
                className="observaimg" 
                src="/images/observatorio.webp" 
                alt="Logo" 
                 />
                </div>
                
                    <div className={styles.textSection}>

                        <p>O <strong>Observatório de Conflitualidades em Políticas Sociais e Ambientais na América Latina e Caribe </strong>(ObservActiva) é uma iniciativa que se dedica à captação, observação e análise sistemática de conflitos socioambientais envolvendo a sociedade civil e o Estado e outro setor, como o privado. Nosso foco principal está na investigação de litígios relacionados aos direitos sociais, entendidos de forma ampla, tendo como marco referencial a <strong>Declaração sobre o Direito ao Desenvolvimento (1986).</strong>
                        <br></br><br></br>
                        Desde a sua criação, a ObservActiva tem produzido, de forma contínua, relatórios de pesquisa que abordam as dinâmicas sociais e ambientais nas diversas regiões da América Latina e do Caribe. Até o momento, publicamos 6 relatórios de pesquisa, além de documentos colaborativos com organizações parceiras, como a <i>Red Latinoamericana por Justicia Económica y Social</i> (Latindadd), e diversas notas informativas.  
                         <span onClick={() => handleCategory('observActiva')} style={{  textDecoration: 'underline', cursor: 'pointer' }}
                >
                    <strong>Acesse nossos materiais para mais detalhes</strong>
                </span>
                        <br></br> <br></br>
                        <br></br> <br></br>
                        No final desta página, você encontrará nossas informações de contato, além de um infográfico que apresenta, de forma resumida, os dados mapeados pela ObservActiva até o momento. O infográfico inclui, entre outras informações, os territórios de maior dificuldade identificados pela nossa equipe de pesquisa e os maiores agrupamentos de conflitos.</p> 
                        <br></br>
                        

                    </div>

                    <div className={styles.imagesSideBySide}>
                    <div onClick={() => handleCategory('observActiva')} 
                style={{ cursor: 'pointer' }}>
                    <img 
                    className={styles.observaimg} 
                    src="/images/relatorio.webp" 
                    alt="Logo Relatório" 
                        />
                    </div>

                        <a href="https://ee-eu.kobotoolbox.org/x/wvGcywe2" target="_blank" rel="noopener noreferrer"> 
                            <img className={styles.observaimg2} src="/images/formulario.webp" alt="Logo" /></a>
                    </div>

                    <div className={styles.textSection}>
                        <h3>COMO PARTICIPAR</h3>
                        <br></br>

                        <p>Se você tem interesse nas áreas da nossa pesquisa, é possível participar como pesquisador(a) ou curador(a) da ObservActiva, entre <strong><u><a href='/contato' target='_blank' rel="noopener noreferrer">em contato</a></u></strong> conosco para saber mais sobre as oportunidades de participação voluntária.</p>
                        <br></br><p>Além disso, se sua organização deseja se tornar um núcleo-parceiro da nossa rede, também ficaremos felizes em receber seu contato.</p>

                    </div>
                    <div className={styles.imageCenter2}>
                        <img className="observaimg" src="/images/dados.jpeg" alt="Logo" />
                        <p>*Os dados indicados neste infográfico foram coletados em março de 2024. </p>
                    </div>
                    
                </div>    
            </main>
            <Footer />
        </div>
    );
};

export default Observa;