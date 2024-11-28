import React from 'react';
import { useLocation } from 'react-router-dom'; // Para acessar a localização
import DOMPurify from 'dompurify'; // Para sanitizar HTML
import './style/PostList.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Category() {
    const location = useLocation(); // Hook para acessar a localização
    const { posts } = location.state || { posts: [] }; // Pega os posts do estado

    return (
        <div>
            <Header />
        <div className="PostsList">
            <h1 className="PostsList__title">Posts da Categoria</h1>

            {posts.length > 0 ? (
                <div className="PostsList__container">
                    {posts.map((post) => (
                        <div className="post__list" key={post.id}>
                            <h2 className="post__title">{post.title}</h2>
                            <div className="post__image">
                                <img src={post.image} alt={post.title} className="post-image" />
                                {post.imageSource && (
                                    <div className="post__image-source">
                                        Fonte: {post.imageSource}
                                    </div>
                                )}
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
            ) : (
                <div>Nenhum post encontrado.</div>
            )}
        </div>
        <Footer />
        </div>
        
    );
}

export default Category;
