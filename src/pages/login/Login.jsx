import React, { useState } from 'react';
import './style/Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Certifique-se de que este caminho está correto

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Pegue a função de login do contexto

    const togglePasswordVisibility = () => {
        setMostrarSenha((prevState) => !prevState);
    }    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/logins/authenticate', { email, senha });
             

            if (res.status === 200) {
                const acesso = res.data.acesso;
               // console.log("Access level:", acesso);

                // Salve o usuário no contexto
                const userData = { email, role: acesso }; 
                login(userData); // Use a função de login do contexto

                // Redireciona para a página correta com base no acesso
                if (acesso === 'admin') {
                    navigate('/Dashboard'); 
                } else if (acesso === 'user') {
                    navigate('/PostListUser');
                } else {
                    setError('Tipo de acesso desconhecido.');
                }
            } else {
                setError(res.data.message || 'Erro ao fazer login.');
            }
        } catch (error) {
            setError(error.response?.data.message || 'Erro ao fazer login.');
        }
    };

    return (
        <div className="container-login">
            <div className="box-login">
               <img className="login-img" src="/images/Logo_FSMSSS__2_-removebg-preview.png" alt="Logo" />
                <br></br>                   
                <p className="header-login">Autenticação</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group-email">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group-login">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type={mostrarSenha ? "text" : "password"} 
                            id="senha"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            maxLength="8"
                            
                        />
                    </div>
                    {error && <p className="error">{error}</p>} 
                    <button type="button" onClick={togglePasswordVisibility}
                     className="toggle-password-visibility"
                    
                    >
         
                    <FontAwesomeIcon icon={mostrarSenha ? faEyeSlash : faEye} />
                    </button>
                    <button type="submit" className="btn1 btn-login">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
