import React, { useState, useEffect } from 'react';//Criar as interfaces de usuário
import axios from 'axios'; //bilbioteca para fazer as requisições
import { useNavigate } from 'react-router-dom'; //para navegação
import DOMPurify from 'dompurify'; // Biblioteca para sanitizar HTML e prevenir ataques XSS
import '../style/PostList.css';
function PostsList() {
    const [posts, setPosts] = useState([]); //Estado para armazenar a lista de posts.
    const [loading, setLoading] = useState(true); //Estado para indicar se os posts estão sendo carregados.
    const [error, setError] = useState(null); //Estado para armazenar mensagens de erro, se houver.
    const navigate = useNavigate();//Estado para armazenar mensagens de erro, se houver. 

    useEffect(() => {
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
        fetchPosts();
        //Configura a votação a cada 5 segundos
        const interval = setInterval(fetchPosts, 5000);
        //Limpe o intervalo na desmontagem do componente
        return ()=> clearInterval(interval);
    }, []);
    //Navega para a página de criação de um novo post.
    const handleCreatePost = () => {
        navigate('/Add');
    };
    //Navega para a página de visualização completa do post com base no ID.
    const handleCardClick = (id) => {
        navigate(`/FullPost/${id}`);
    };
    //Navega para a página de edição do post com base no ID.
    const handleEditPost = (id) => {
        navigate(`/Edit/${id}`);
    };
    //Faz uma requisição DELETE para remover o post e atualiza o estado da lista de posts.
    const handleDeletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/blog/delete/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
             
            setError("Erro ao deletar o post. Tente novamente.");
        }
    };

    return (
            <div className="List1">
                <div className="mb-4">
                    <button 
                        className="button-green"
                        onClick={() => navigate('/Dashboard')}>
                        Voltar
                     </button>
                    <button 
                         className="button-green"
                         onClick={handleCreatePost} >
                         Criar Novo Post
                    </button>
                </div>
            
            {error && <div className="alert alert-danger">{error}</div>}

            {loading ? (
                <div>Carregando posts...</div>
            ) : (
                posts.length === 0 ? (
                    <div>Nenhum post encontrado.</div>
                ) : (
               
                <div className="postsList2__container">
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
                                    //dompurify protege contrar ataques
                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.description) }}
                                /> 
                                <div className="post__details">
                                    Data de Criação: {new Date(post.datacreation).toLocaleString()}
                                </div>
                                <div className="post__actions">
                                    <button onClick={(e) => { e.stopPropagation(); handleEditPost(post.id); }} className="btn-edit">Editar</button>
                                    <button onClick={(e) => { e.stopPropagation(); handleDeletePost(post.id); }} className="btn-delete">Excluir</button>
                                </div>
                            </div>
                        ))}
                </div>
                )
            )}
        </div>
    );
}

export default PostsList;
