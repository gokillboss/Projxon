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
import BlogPage from './pages/BlogPage';
import NotFound from './pages/NotFound';

import LoginPage from './pages/LoginPage';
import TestimonialEditorPage from './pages/TestimonialEditorPage'
import AuthGuard from './components/AuthGuard';

import './App.css';
import "./index.css";
import ScrollToTop from './components/ScrollToTop';


const App = () => {
    return (
        <>

            <div className="content">
                <ScrollToTop />
                <NavBar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/partnership" element={<PartnershipPage />} />
                    <Route path="/careers" element={<CareerPage />} />
                    <Route path="/research" element={<ResearchPage />} />
                    <Route path="/research/:blogId" element={<BlogPage />} />
                    <Route path="*" element={<NotFound />} />

                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/editor" element={<AuthGuard><TestimonialEditorPage /></AuthGuard>} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
