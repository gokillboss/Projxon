import React from 'react';
import { Container, Row, Col, Button,Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './HomePage.css'; // Custom CSS file
import 'aos/dist/aos.css'; // Animation library
import AOS from 'aos';

AOS.init();

const HomePage = () => {
    return (
        <>

            {/* Hero Section */}
            <div className="hero-section">
                <Container className="text-center text-white hero-content">
                    <h1 className="hero-title" data-aos="fade-up">Control the Chaos</h1>
                    <p className="hero-subtitle" >Empowering medium-sized businesses to achieve their full potential.</p>
                </Container>
            </div>

            {/* Introductory Video Section */}
            <Container className="my-5 text-center">
                <h2 data-aos="fade-up">Welcome to PROJXON</h2>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <div className="video-container" data-aos="fade-up" data-aos-delay="200">
                            <iframe
                                className="video-iframe"
                                src="https://www.youtube.com/embed/your-video-id"
                                allowFullScreen
                                title="Introductory Video"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Services Overview */}
            <Container className="text-center my-5">
                <h2 data-aos="fade-up">Our Services</h2>
                <Row>
                    <Col md={4} className="service-card" data-aos="zoom-in" data-aos-delay="100">
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Business Process Optimization</Card.Title>
                                <Card.Text>Streamline your business processes to improve efficiency and reduce costs.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="service-card" data-aos="zoom-in" data-aos-delay="200">
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Project Management</Card.Title>
                                <Card.Text>End-to-end project management services to ensure successful project outcomes.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="service-card" data-aos="zoom-in" data-aos-delay="300">
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>E-commerce Solutions</Card.Title>
                                <Card.Text>Optimize your online sales with our comprehensive e-commerce solutions.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Detailed Services Section */}
            <Container className="text-center my-5">
                <h2 data-aos="fade-up">Why Choose Us?</h2>
                <Row className='my-5'>
                    <Col md={4} data-aos="fade-up" data-aos-delay="100">
                        <Image src="https://via.placeholder.com/150" roundedCircle className="mb-3" />
                        <h4>Expert Team</h4>
                        <p>Our team consists of industry experts with years of experience in their respective fields.</p>
                    </Col>
                    <Col md={4} data-aos="fade-up" data-aos-delay="200">
                        <Image src="https://via.placeholder.com/150" roundedCircle className="mb-3" />
                        <h4>Proven Results</h4>
                        <p>We have a track record of delivering successful projects and measurable improvements for our clients.</p>
                    </Col>
                    <Col md={4} data-aos="fade-up" data-aos-delay="300">
                        <Image src="https://via.placeholder.com/150" roundedCircle className="mb-3" />
                        <h4>Innovative Solutions</h4>
                        <p>We leverage the latest technologies and methodologies to provide innovative solutions to our clients.</p>
                    </Col>
                </Row>
            </Container>

            {/* Client Testimonials */}
            <Container className="text-center my-5">
                <h2>Client Testimonials</h2>
                <Row>
                    <Col md={6}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Text>
                                    "PROJXON transformed our onboarding process, reducing it from 90 days to just 14 days. This efficiency gain translated to an additional 2.5 months of revenue annually. Their expertise in process optimization is unparalleled."
                                </Card.Text>
                                <footer className="blockquote-footer">John Doe, CEO of XYZ Corp</footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Text>
                                    "Thanks to PROJXON's innovative strategies, our operational costs decreased by 20% and our productivity improved dramatically. Their team is incredibly knowledgeable and dedicated."
                                </Card.Text>
                                <footer className="blockquote-footer">Jane Smith, Operations Manager at ABC Inc</footer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>



            {/* Call to Action Section */}
            <Container fluid className="text-center text-white call-to-action-section" data-aos="fade-up">
                <Row>
                    <Col>
                        <h2>Ready to Transform Your Business?</h2>
                        <p>Contact us today to discuss how we can help you achieve your business goals.</p>
                        <Button variant="light" href="#contact">Contact Us</Button>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default HomePage;
