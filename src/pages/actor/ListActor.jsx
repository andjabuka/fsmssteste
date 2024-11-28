import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; //para navegação
import axios from 'axios';
import './style/ListActor.css';

function ListActor() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();//Estado para armazenar mensagens de erro, se houver. 

    useEffect(() => {
        fetchUsers();  
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/equipe/list');  
            if (response.status === 200) {
                setUsers(response.data); 
            } else {
                setError('Erro ao buscar escritor: ');
            }
        } catch (error) {
            setError('Erro ao buscar escritor.');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/equipe/delete/${id}`); 
            fetchUsers(); 
        } catch (error) {
            setError('Erro ao excluir escritor.');
        }
    };

    return (
        <div className="edit-container">
            <div className="mb-5">
            <button 
                    className="btn3"
                    onClick={() => navigate('/Dashboard')}
                >
                    Voltar
                </button>
            <br/><br/>  
            <button 
                    className="btn3"
                    onClick={() => navigate('/AddActor')}
                >
                    Criar 
                </button>
            <br/><br/>
            <button 
                    className="btn3"
                    onClick={() => navigate('/Login')}
                >
                    Close
                </button>  
            </div>
            <br></br><br></br><br></br><br></br>
            
            <div className="container3">
                {error && <div className="alert alert-danger">{error}</div>}
                 
                {/* Card container */}
                <div className="card-container">
                    {users.map(access => (
                        <div key={access.id} className="card">
                            <img className="card-image2" src={access.perfil} alt={access.nome} />
                            <h5 className="card-name">{access.nome}</h5>
                            <p className="card-biography">{access.biografia}</p>
                            <button className="btn btn-danger" onClick={() => handleDelete(access.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ListActor;
