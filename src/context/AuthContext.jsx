import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // user será null se não estiver logado

    const login = (userData) => {
        setUser(userData); // Salva as informações do usuário no estado
    };

    const logout = () => {
        setUser(null); // Limpa as informações do usuário
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
