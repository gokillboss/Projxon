// ServicesPage.js
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InfoForm from '../components/InfoForm';
import './ServicesPage.css';

import ServiceCarousel from '../components/ServiceCarousel';
import ServiceGrid from '../components/ServiceGrid';

const ServicesPage = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div className="services-hero-section justify-content-md-center align-items-center " data-aos="fade-in">
                <Container className="text-center services-hero-content ">
                    <h1 className="services-hero-title text-uppercase">Our Premium Services</h1>
                    <p className="services-hero-subtitle">Crafted with Excellence, Delivered with Precision</p>
                </Container>
            </div>
            <section className='services-container'>
                <Container className='pt-4'>
                    <ServiceCarousel />
                    <ServiceGrid />
                </Container>
            </section>           


            <InfoForm />
        </>
    );
};

export default ServicesPage;
