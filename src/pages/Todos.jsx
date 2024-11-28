
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Postagem from '../pages/blog/AllPost';



function Todos(){

    return (
        <div>
            <Header />
            <main>
            
                <Postagem />
              
            </main>
            <Footer />
        </div>
    );
};

export default Todos;