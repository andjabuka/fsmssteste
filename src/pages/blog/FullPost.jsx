
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import'./style/FullPost.css';  
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function FullPost() {
    const { id } = useParams(); 
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
          
            try {
                const response = await axios.get(`http://localhost:8080/blog/post/${id}`);
                console.log('Response:', response); // Log para verificar a resposta
                if (response.status === 200) {
                    setPost(response.data);
                } else {
                    setError('Post não encontrado');
                }
            } catch (error) {
                console.error("Erro ao carregar o post: ", error);
                setError("Erro ao carregar o post. Tente novamente.");
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return <div>Carregando post...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    if (!post) {
        return <div>Post não encontrado.</div>;
    }

    // Função para extrair ID do Google Drive URL
    const getIdFromUrl = (url) => {
        const match = url.match(/file\/d\/(.*)\/view/);
        return match ? match[1] : null;
    };
    // Função para força o Download
    const downloadUrl = post.documentpdf 
        ? `https://drive.google.com/uc?export=download&id=${getIdFromUrl(post.documentpdf)}`
        : '';

    return (
        <div>
            <Header />
        <div className="FullPost">
            <h1 className="FullPost__title">{post.title}</h1>
            <div className="FullPost__image">
                <img src={post.image} alt={post.title} className="fullpost-image" />
                {post.imageSource && (
                    <div className="FullPost__image-source">
                        Fonte: {post.imageSource}
                    </div>   
                )}
                <div className="FullPost__image-source">
                    Escritor(a): {post.actor}
                </div>
            </div>
            <div className="post__document">
            {post.documentpdf ? (
                <div>
                    Documento:&nbsp;
                    <a 
                        href={downloadUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        PDF
                    </a>
                </div>
            ) : (
                <div></div>
            )}
        </div>
 
            <div className="FullPost__description" dangerouslySetInnerHTML={{ __html: post.description }} />
            <div className="FullPost__details">
                Data de Criação: {new Date(post.datacreation).toLocaleString()}
            </div>
        </div>
        <Footer />
        </div>
    );
}
export default FullPost;
