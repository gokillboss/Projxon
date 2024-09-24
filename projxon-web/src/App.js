import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import PartnershipPage from './components/PartnerShipPage';
import CareerPage from './components/CareerPage';
import ResearchPage from './components/ResearchPage';
import './App.css';
import "./index.css";
import ScrollToTop from './components/ScrollToTop';

const App = () => {
    return (
        <>

            <div className="content">
                <NavBar />
                <ScrollToTop />
                <Routes>
                    <Route path="/Projxon" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/partnership" element={<PartnershipPage />} />
                    <Route path="/career" element={<CareerPage />} />
                    <Route path="/research" element={<ResearchPage />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
