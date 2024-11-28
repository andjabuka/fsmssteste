import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import '../styles/Publications.css';

function Publications({ refreshKey }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/blog/list');
            if (response.status === 200 && response.data.length > 0) {
                const sortedPosts = response.data.sort((a, b) => new Date(b.datacreation) - new Date(a.datacreation));
                setPosts(sortedPosts.slice(0, 3)); // Pega apenas os 3 últimos posts
            }
        } catch (error) {
            console.error("Erro ao carregar os posts: ", error);
            setError("Erro ao carregar os posts. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
        const interval = setInterval(fetchPosts, 5000);

        return () => clearInterval(interval);
    }, [refreshKey]);

    const handleCardClick = (id) => {
        navigate(`/FullPost/${id}`);
    };

    return (
        <div className="PostsList">
            <h1 className="PostsList__title">Últimas Notícias</h1>
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

export default Publications;
