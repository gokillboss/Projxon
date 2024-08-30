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
        <div>
            <div className="contact-hero-section" data-aos="fade-in">
                <Container className="text-center">
                    <h1 className="hero-title">Contact Us</h1>
                </Container>
            </div>

            <Container className="promotional-section my-5">
                <Row className="align-items-center">
                    <Col md={6} data-aos="fade-right" className='mb-4' >
                        <Card className="p-4">
                            <Card.Body>
                                <Card.Title as="h2">Ready to Transform Chaos Into Opportunity?</Card.Title>
                                <Card.Text>
                                    Whether you have inquiries about our services, wish to explore partnership opportunities, or are ready to embark on a journey of growth and success, our team is eager to connect with you. Let’s Transform Chaos Into Opportunity together.
                                </Card.Text>
                                <Card.Text>
                                    Fill out the contact request form below, and let’s begin a conversation that can elevate your brand to new heights.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <Card className="image-card">
                            <Card.Img variant="top" src={contactPic} alt="Promotional" className="rounded" />
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
