import React, { useRef, useState } from 'react'; // React e hooks
import { Link, useNavigate } from 'react-router-dom'; // Navegação
import axios from 'axios'; // Biblioteca para requisições HTTP
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Ícones
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Ícones específicos
import '../styles/Header.css'; // Estilos

const Header = () => {
    const handleCardClick = (id) => {
        navigate(`/FullPost/${id}`);
    };
    const navigate = useNavigate(); // Hook para navegação
    const [posts, setPosts] = useState([]); // Estado para armazenar a lista de posts
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Estado para armazenar mensagens de erro

    const handleCategory = async (category) => {
        try {
            const response = await axios.get(`http://localhost:8080/blog/category/${category}`);
            navigate('/Category', { state: { posts: response.data } });
        } catch (error) {
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
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <div className="container1">
                <div className="logo1">
                    <img 
                        className="logo1-img" 
                        src="/images/Logo_FSMSSS__2_-removebg-preview.png" 
                        alt="Logotipo do Fórum Social Mundial da Saúde e Seguridade Social" 
                        aria-hidden="false" 
                    />
                </div>
                <br />
                <nav ref={navRef} aria-label="Navegação principal">
                    <ul className="nav1-list">
                        <li><Link to="/">Página Inicial</Link></li>
                        <li className="dropdown">
                            <Link to="#" aria-haspopup="true" aria-expanded="false">Quem somos</Link>
                            <ul className="dropdown-menu" aria-label="Submenu Quem Somos">
                                <li><Link to="/somos">Quem somos</Link></li>
                                <li><Link to="/historia">Nossa história</Link></li>
                                <li><Link to="/equipe">Equipe</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#" aria-haspopup="true" aria-expanded="false">Produção</Link>
                            <ul className="dropdown-menu" aria-label="Submenu Produção">
                                <li><Link to="/todos">Todos os posts</Link></li>
                                <li onClick={() => handleCategory('Curadoria')}>Curadoria</li>
                                <li onClick={() => handleCategory('co')}>Coluna de Opinião</li>
                                <li onClick={() => handleCategory('observActiva')}>ObservActiva</li>
                                <li onClick={() => handleCategory('ccs')}>Conversando com Seguridade</li>
                                <li onClick={() => handleCategory('nota')}>Nota</li>
                            </ul>
                        </li>
                        <li><Link to="/observa">ObservActiva</Link></li>
                        <li><Link to="/laboratorio">Laboratórios Políticos</Link></li>
                        <li><Link to="/plataforma">Plataforma de Ensino</Link></li>
                        <li className="dropdown">
                            <Link to="#" aria-haspopup="true" aria-expanded="false">RBCE</Link>
                            <ul className="dropdown-menu" aria-label="Submenu RBCE">
                                <li><Link to="/rbce">RBCE</Link></li>
                                <li><Link to="/campanha">Campanha 4 x 4</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/calendario">Calendário</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    <button 
                        className="nav-btn nav-close-btn" 
                        onClick={showNavbar} 
                        aria-label="Fechar menu"
                    >
                        <FontAwesomeIcon icon={faTimes} size="2x" />
                    </button>
                </nav>
                <button 
                    className="nav-btn" 
                    onClick={showNavbar} 
                    aria-label="Abrir menu"
                >
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </button>
            </div>
        </header>
    );
};

export default Header;






