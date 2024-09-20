import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactPage.css'; // Custom CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactPic from '../assets/contact.jpg'; // Importing the image correctly
import InfoForm from './InfoForm';

const ContactPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div >

            <div className="contact-hero-section" data-aos="fade-in">
                <Container className="text-center">
                    <h1 className="contact-hero-title">Contact Us</h1>
                </Container>
            </div>



            <Container className="promotional-section my-5">
                <Row className='align-items-center'>
                    <Col xs={12} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
                        <Card className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <h4 className='mb-4'>Our Mission</h4></Card.Title>
                                <Card.Text>
                                    <p>
                                        Whether you have inquiries about our services, wish to explore partnership opportunities, or are ready to embark on a journey of growth and success, our team is eager to connect with you. Let’s Transform Chaos Into Opportunity together.

                                    </p>
                                    <p>

                                        Fill out the contact request form below, and let’s begin a conversation that can elevate your brand to new heights.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
                        <Card className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-balance-scale"></i>
                            </div>
                            <Card.Body>
                                <Card className="image-card">
                                    <Card.Img variant="top" src={contactPic} alt="Promotional" fluid rounded />
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


    
            {/* Contact Form Section */}
            <InfoForm />


        </div>
    );
};

export default ContactPage;
