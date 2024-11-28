import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Agenda from '../pages/calendar/Calendar';
import contato from'../styles/Contato.module.css'


const Calendario = () => {
    return (
        <div>
            <Header />
            
                
            <Agenda />
                 
            
            <Footer />
        </div>
    );
};

export default Calendario;