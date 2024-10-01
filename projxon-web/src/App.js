import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import PartnershipPage from './pages/PartnerShipPage';
import CareerPage from './pages/CareerPage';
import ResearchPage from './pages/ResearchPage';
import './App.css';
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
