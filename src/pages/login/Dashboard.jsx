import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';  
import'./style/Dashboard.css'

function Dashboard() {
    const navigate = useNavigate();
    const { logout} = useAuth();  

    const handleLogout = () => {
        logout();  
        // Redirecione para a página de login
        navigate('/Login'); 
    };

    return (
        <div className="dashboard">
            <div className="logo1">
                    <img className="logo1-img" src="/images/Logo_FSMSSS__2_-removebg-preview.png" alt="Logo" />
                </div>
            <div className="dashboard-header">
                <h1>Área administrativa </h1>
               
            </div>

            <div className="actions">
               
                
                <button 
                    className="btn btn-primary"
                    onClick={() => navigate('/')}
                >
                    Home
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={() => navigate('/ListAccess')}
                >
                    Acesso
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={() => navigate('/PostList')}
                >
                    Blog
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={() => navigate('/ListActor')}
                >
                    Escritor
                </button>

                <button 
                    className="btn btn-primary"
                    onClick={handleLogout}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Dashboard;
