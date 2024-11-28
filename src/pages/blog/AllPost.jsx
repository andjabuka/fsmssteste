import React, { useState, useEffect } from 'react'; // Criar as interfaces de usuário
import axios from 'axios'; // Biblioteca para fazer as requisições
import { useNavigate } from 'react-router-dom'; // Para navegação
import DOMPurify from 'dompurify'; // Biblioteca para sanitizar HTML e prevenir ataques XSS
import'./style/AllPost.css';

function AllPost({ refreshKey }) {
    const [posts, setPosts] = useState([]); // Estado para armazenar a lista de posts
    const [loading, setLoading] = useState(true); // Estado para indicar se os posts estão sendo carregados
    const [error, setError] = useState(null); // Estado para armazenar mensagens de erro
    const navigate = useNavigate(); // Hook para navegação

    // Função para buscar posts
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
    // Efeito para buscar posts e configurar o intervalo de atualização
    useEffect(() => {
        fetchPosts();
        const interval = setInterval(fetchPosts, 5000);

        return () => clearInterval(interval); // Limpar o intervalo na desmontagem do componente
    }, [refreshKey]);

    // Navega para a página de visualização completa do post com base no ID
    const handleCardClick = (id) => {
        navigate(`/FullPost/${id}`);
    };
    
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
   
    return (
        <div className="PostsList">
            <h1 className="PostsList__title">Todos os Posts</h1>
            <div className="post__actions">
     
                 {/* Botão específico para a categoria "opinião" */}
                  <button onClick={() => handleCategory('co')}className="btn-primary">
                   Coluna de Opinião
                 </button> 

                 {/* Botão específico para a categoria "seguridade" */}
                 <button onClick={() => handleCategory('ccs')}className="btn-primary">
                   Conversando com Seguridade
                 </button>  

                 {/* Botão específico para a categoria "Curadoria" */}
                 <button onClick={() => handleCategory('Curadoria')}className="btn-primary">
                   Curadoria
                 </button>  

                 {/* Botão para a categoria "Nota" */}
                 <button onClick={() => handleCategory('nota')} className="btn-primary">
                    Nota
                 </button>   
                 {/* Botão para a categoria "Nota" */}
                 <button onClick={() => handleCategory('observActiva')} className="btn-primary">
                 ObservActiva
                 </button>               
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {loading ? (
                <div>Carregando posts...</div>
            ) : (
                posts.length === 0 ? (
                    <div>Nenhum post encontrado.</div>
                ) : (
                    <div className="PostsList__container">
                        {posts.map((post) => (
                            <div className="post__list" key={post.id} onClick={() => handleCardClick(post.id)}>
                                <h2 className="post__title">{post.title}</h2>
                                <div className="post__image">
                                    <img src={post.image} alt={post.title} className="post-image" />
                                    {post.imageSource && (
                                        <div className="post__image-source">
                                            Fonte: {post.imageSource}
                                        </div>
                                    )}
                                    <div className="post__image-source">
                                       Escritor(a): {post.actor}
                                    </div>
                                </div>
                                <div
                                    className="post__description"
                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.description) }}
                                />
                                <div className="post__details">
                                    Data de Criação: {new Date(post.datacreation).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                )
            )}
        </div>
    );
    
}

export default AllPost;
