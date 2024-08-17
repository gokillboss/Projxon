import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactPage.css'; // Custom CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactPic from '../assets/contact.jpg'; // Importing the image correctly

const ContactPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div >


            {/* Promotional Section */}

            <div className="contact-hero-section" data-aos="fade-in">
                <Container className="text-center hero-content">
                    <h1 className="hero-title">Contact Us</h1>
                </Container>
            </div> }


            <Container className="promotional-section my-5">
                <Row>
                    <Col md={6} data-aos="fade-right">
                        <h2>Ready to Transform Chaos Into Opportunity?</h2>
                        <p>
                            Whether you have inquiries about our services, wish to explore partnership opportunities, or are ready to embark on a journey of growth and success, our team is eager to connect with you. Let’s Transform Chaos Into Opportunity together.

                        </p>
                        <p>

                            Fill out the contact request form below, and let’s begin a conversation that can elevate your brand to new heights.
                        </p>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <Card className="image-card">
                            <Card.Img variant="top" src={contactPic} alt="Promotional" fluid rounded />
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Contact Form Section */}
            <Container className="my-5">
                <Row>
                    <Col md={12} data-aos="fade-up">
                        <Card className="contact-card">
                            <Card.Body>
                                <h2>Send Us a Message</h2>
                                <Form>
                                    <Form.Group controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>

                                    <Form.Group controlId="formEmail" className="mt-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" />
                                    </Form.Group>

                                    <Form.Group controlId="formSubject" className="mt-3">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" placeholder="Subject" />
                                    </Form.Group>

                                    <Form.Group controlId="formMessage" className="mt-3">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={5} placeholder="Your message" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="mt-4">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Contact Information Section */}
            <div className="contact-info-section text-center py-5">
                <Container>
                    <h4>Connect With Us</h4>
                    <p>You can reach out to us via email or follow us on our social media channels:</p>
                    <Row className="justify-content-center">
                        <Col xs={12} md={8}>
                            <div className="contact-icons d-flex justify-content-around">
                                <a href="mailto:info@projxon.com" className="contact-icon" aria-label="Email">
                                    <FaEnvelope />
                                </a>
                                <a href="https://instagram.com/projxon" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="https://linkedin.com/company/projxon" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href="https://twitter.com/projxon" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="X">
                                    <FaTwitter />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ContactPage;
