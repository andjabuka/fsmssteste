import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Card from '../components/EquipeCard';
import Footer from '../components/Footer';
import '../styles/EquipeCard.css';

const Equipe = () => {
  
    const [users, setUsers] = useState([]);   // Estado para armazenar os dados da equipe
    const [error, setError] = useState(null);  // Estado para armazenar erros
    const [loading, setLoading] = useState(true); // Estado de carregamento

    // Função para buscar os dados da equipe
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/equipe/list');  // URL da API
                if (response.status === 200) {
                    setUsers(response.data); // Atualiza o estado com os dados da equipe
                } else {
                    setError('Erro ao buscar dados da equipe.');
                }
            } catch (error) {
                setError('Erro ao buscar dados da equipe.');
            } finally {
                setLoading(false);  // Finaliza o carregamento
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <br /><br />
                <h1>Conheça nossa equipe</h1>

                {loading && <div>Carregando...</div>}  {/* Exibe mensagem de carregamento */}
                {error && <div className="alert alert-danger">{error}</div>}  {/* Exibe erro, se houver */}

                <div className="card-container">
                    {/* Exibe os cartões da equipe depois de carregados */}
                    {!loading && !error && users.map(user => (
                        <Card
                            key={user.id}  // Identificador único
                            profilePhoto={user.perfil} // Foto do perfil
                            name={user.nome} // Nome do membro da equipe
                            jobTitle={user.cargo} // Cargo
                            description={user.biografia} // Descrição
                            
                        />
                    ))}
                </div>
                
                    
                
            </main>
            <Footer />
        </div>
    );
};

export default Equipe;
