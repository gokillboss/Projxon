import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PartnershipPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PartnerForm from '../components/PartnerForm';

AOS.init();

const PartnershipPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="partnership-hero-section" data-aos="fade-in">
                <Container className="text-center partnership-hero-content">
                    <h1 className="partnership-hero-title text-uppercase">Partner with PROJXON</h1>
                    <p className="partnership-hero-subtitle">Collaborate with us to drive success and innovation.</p>
                </Container>
            </div>

            {/* Why Partner with Us Section */}
            <Container className="my-5">
                <h2 className="text-center mb-4" data-aos="fade-up">Why Partner with PROJXON?</h2>
                <Row>
                    <Col md={4} data-aos="fade-up" data-aos-delay="100">
                        <Card className="partnership-card">
                            <Card.Body>
                                <Card.Title>Expertise and Experience</Card.Title>
                                <Card.Text>
                                    Leverage our extensive experience across various industries to enhance your offerings and drive growth. Our team of experts is equipped to handle diverse challenges and deliver innovative solutions.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} data-aos="fade-up" data-aos-delay="200">
                        <Card className="partnership-card">
                            <Card.Body>
                                <Card.Title>Innovative Solutions</Card.Title>
                                <Card.Text>
                                    Collaborate with us to develop cutting-edge solutions tailored to your needs. Our focus on innovation ensures that we stay ahead of the curve, providing partners with a competitive advantage.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} data-aos="fade-up" data-aos-delay="300">
                        <Card className="partnership-card">
                            <Card.Body>
                                <Card.Title>Mutual Growth</Card.Title>
                                <Card.Text>
                                    We believe in building long-term partnerships that foster mutual growth. By working together, we can unlock new opportunities and drive success for both parties.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Partnership Opportunities Section */}
            <Container className="my-5">
                <h2 className="text-center mb-4" data-aos="fade-up">Partnership Opportunities</h2>
                <Row>
                    <Col md={6} data-aos="fade-up" data-aos-delay="100">
                        <Card className="partnership-card">
                            <Card.Body>
                                <Card.Title>Service Partnerships</Card.Title>
                                <Card.Text>
                                    Join us as a service partner to expand your service offerings and reach new markets. Our collaboration will enable you to provide comprehensive solutions to your clients.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} data-aos="fade-up" data-aos-delay="200">
                        <Card className="partnership-card">
                            <Card.Body>
                                <Card.Title>Referral Partnerships</Card.Title>
                                <Card.Text>
                                    Become a referral partner and earn rewards for introducing us to potential clients. Our referral program is designed to create value for all parties involved.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Contact Form Section */}
            <PartnerForm />
        </div>
    );
};

export default PartnershipPage;
