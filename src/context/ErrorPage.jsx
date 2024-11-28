import React from 'react';
import './ErrorPage.css'; // (opcional) adicione estilos se necessário

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>403</h1>
            <h2>Forbidden</h2>
            <h3>Access to this resource on the server is denied!</h3>
        </div>
    );
};

export default ErrorPage;
