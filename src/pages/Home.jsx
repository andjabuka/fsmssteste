import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Publications from '../components/Publications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MissionValues from '../components/MissionValues';  
import Sobre from '../components/Sobre'  

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Sobre />
            <Publications />
            <MissionValues />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
