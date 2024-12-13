// ServicesPage.js
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServicesPage.css';

import CallToAction from '../components/CallToAction';
import Hero from '../components/Hero';
import ServiceCarousel from '../components/ServiceCarousel';
import ServiceGrid from '../components/ServiceGrid';

const ServicesPage = () => {

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <>
            {/* Hero Section */}
            <Hero title="Our Premium Services" subtitle="Crafted with Excellence, Delivered with Precision" backgroundClass="services-hero"/>

            {/* <section className='sections-container'>
                <Container>
                <p className='text-center'></p>

                </Container>
                
            </section> */}

            <section className='services-container sections-container'>
                <Container className='pt-4'>
                    <ServiceCarousel />
                    <ServiceGrid />
                </Container>
            </section>           

            {/* Call To Action Section */}
            <CallToAction />
        </>
    );
};

export default ServicesPage;
