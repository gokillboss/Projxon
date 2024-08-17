import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';

const App = () => {
    return (
        <>
            <div className="flex-grow-1 mt-3">
                <NavBar className='navbar' />
                <Routes>
                    <Route path="/Projxon" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </div>
        </>

    );
}

export default App;
