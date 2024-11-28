import React, { useEffect, useState } from "react";
 
import axios from 'axios';
import './style/AllActor.css';

function AllActor() {
     
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();  
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/equipe/list');  
            if (response.status === 200) {
                setUsers(response.data); 
            } else {
                setError('Erro ao buscar escritores.');
            }
        } catch (error) {
            setError('Erro ao buscar escritores.');
        }
    };

    return (
        <div className="edit-container">
            <h1>Equipe</h1>
            <div className="container-equipe">
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="card-container">
                    {users.map(access => (
                        <div className="card" key={access.id}>
                            <img src={access.perfil} alt={access.nome} className="card-image" />
                            <h2 className="card-name">{access.nome}</h2>
                            <p className="card-biography">{access.biografia}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllActor;
