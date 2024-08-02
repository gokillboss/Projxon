import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <div className="flex-grow-1 mt-3">
                <NavBar className='navbar' />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                </Routes>
                <Footer />
            </div>
        </>

    );
}

export default App;
