import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import'./style/ListAccess.css'

function ListAccess() {
    const navigate = useNavigate();
    
    const [users, setUsers] = useState([]);
    // Adicionando estado para erros
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();  
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/logins/list');  
            if (response.status === 200) {
                setUsers(response.data); 
            } else {
                setError('Erro ao buscar usuários: ');
            }
        } catch (error) {
            setError('Erro ao buscar usuários.');
        }
    };

    // Deleta usuário
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/logins/delete/${id}`); 
            // Atualiza a lista após a exclusão
            fetchUsers(); 
        } catch (error) {
            setError('Erro ao excluir usuário.');
        }
    };

    return (
        <div className="edit">
            <div className="mb-3">
                <button 
                    className="button-green"
                    onClick={() => navigate('/Dashboard')}
                >
                    Voltar
                </button>
                    <button 
                        className="button-green"
                        onClick={() => navigate('/AddAccess')}  
                    >
                        Criar
                    </button>
                </div>
            <div className="container2">
                
                 {/* Exibir erros, se houver */}
                {error && <div className="alert alert-danger">{error}</div>}

                

                <table className="table">
                    <thead>
                        <tr>
                            <th>Users</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Permission</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(access => (
                            <tr key={access.id}>
                                <td>{access.usuario}</td>
                                <td>{access.email}</td>
                                <td>{access.senha}</td>
                                <td>{access.acesso}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(access.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListAccess;
