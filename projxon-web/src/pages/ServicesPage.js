import React, { useEffect } from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCogs, FaProjectDiagram, FaShoppingCart, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InfoForm from '../components/InfoForm';
import './ServicesPage.css';

import ITConsulting from '../assets/ITConsulting.png';
import businessIMG from '../assets/business.png';

const ServicesPage = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div className="services-hero-section justify-content-md-center align-items-center " data-aos="fade-in">
                <Container className="text-center services-hero-content ">
                    <h1 className="services-hero-title">Our Premium Services</h1>
                    <p className="services-hero-subtitle">Crafted with Excellence, Delivered with Precision</p>
                </Container>
            </div>

            {/* Services Carousel */}
            <Container className="my-5 services-container">
                <Carousel interval={3000} controls={true} indicators={true} pause={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={businessIMG}
                            alt="Business Process Optimization"
                        />
                        <Carousel.Caption>
                            <Card className="service-card" data-aos="fade-up" data-aos-delay="100">
                                <div className="card-icon">
                                    <FaCogs />
                                </div>
                                <div className="card-content">
                                    <h3>Business Process Optimization</h3>
                                    <p>Conduct a thorough analysis of workflows and optimize resources.</p>
                                </div>
                            </Card>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ITConsulting}
                            alt="IT Consulting"
                        />
                        <Carousel.Caption>
                            <Card className="service-card" data-aos="fade-up" data-aos-delay="400">
                                <div className="card-icon">
                                    <FaLaptopCode />
                                </div>
                                <div className="card-content">
                                    <h3>IT Consulting</h3>
                                    <p>Develop IT strategies and integrate systems for seamless operations.</p>
                                </div>
                            </Card>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={businessIMG}
                            alt="Project Management"
                        />
                        <Carousel.Caption>
                            <Card className="service-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="card-icon">
                                    <FaProjectDiagram />
                                </div>
                                <div className="card-content">
                                    <h3>Project Management</h3>
                                    <p>Develop detailed project plans and ensure efficient execution.</p>
                                </div>
                            </Card>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={businessIMG}
                            alt="E-commerce Solutions"
                        />
                        <Carousel.Caption>
                            <Card className="service-card" data-aos="fade-up" data-aos-delay="300">
                                <div className="card-icon">
                                    <FaShoppingCart />
                                </div>
                                <div className="card-content">
                                    <h3>E-commerce Solutions</h3>
                                    <p>Help clients choose the right platform and implement digital strategies.</p>
                                </div>
                            </Card>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={businessIMG}
                            alt="Data-Driven Decision Making"
                        />
                        <Carousel.Caption>
                            <Card className="service-card" data-aos="fade-up" data-aos-delay="500">
                                <div className="card-icon">
                                    <FaChartLine />
                                </div>
                                <div className="card-content">
                                    <h3>Data-Driven Decision Making</h3>
                                    <p>Use data analytics to provide actionable insights.</p>
                                </div>
                            </Card>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Container>

            <InfoForm />
        </>
    );
}

export default ServicesPage;
