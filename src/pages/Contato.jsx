import React from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import contato from'../styles/Contato.module.css'

const Contato = () => {
    return (
        <div>
            <Header />
            <main>
                <div className={contato.contato1}>
                    <h1>Entre em contato</h1>
                    <div>
                        <Contact />
                    </div>
                </div>    
            </main>
            <Footer />
        </div>
    );
};

export default Contato;