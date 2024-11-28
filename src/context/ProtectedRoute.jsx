// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element, requiredAccess }) => {
    const { user } = useAuth(); // Obtenha as informações do usuário do contexto

    // Verifique se o usuário está autenticado e se possui o nível de acesso necessário
    if (!user || (requiredAccess && !requiredAccess.includes(user.role))) {
        // Redirecione para a página de login se não estiver autenticado
        return <Navigate to="/error" />;
    }

    // Se o usuário estiver autenticado e tiver acesso, renderize o componente
    return element;
};

export default ProtectedRoute;
