import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; // Custom CSS file
import 'aos/dist/aos.css'; // Animation library
import AOS from 'aos';
import { LuTrendingUp, LuUsers, LuLightbulb } from "react-icons/lu";


import InfoForm from '../components/InfoForm';

AOS.init();

const HomePage = () => {
    const reasons = [
        {
            icon: <LuUsers size={50} />,
            title: "Expert Team",
            description: "Our team consists of industry experts with years of experience in their respective fields. With diverse backgrounds and deep knowledge, we bring unparalleled expertise to every project.",
            stat: "10+",
            statDescription: "years combined experience"
        },
        {
            icon: <LuTrendingUp size={50}  />,
            title: "Proven Results",
            description: "We have a track record of delivering successful projects and measurable improvements for our clients. Our results speak for themselves, with consistent client satisfaction and tangible outcomes.",
            stat: "95%",
            statDescription: "customer satisfaction rate"
        },
        {
            icon: <LuLightbulb size={50}  />,
            title: "Innovative Solutions",
            description: "We leverage the latest technologies and methodologies to provide innovative solutions to our clients. Our forward-thinking approach ensures that you stay ahead of the curve in your industry.",
            stat: "20+",
            statDescription: "innovative projects delivered"
        },
    ]


    return (
        <>

            {/* Hero Section */}
            <div className="homepage-hero-section">
                <Container className="text-center text-white homepage-hero-content">
                    <h1 className="homepage-hero-title" data-aos="fade-up">Turning Chaos to Opportunity</h1>
                    <p className="homepage-hero-subtitle">Empowering medium-sized businesses to achieve their full potential.</p>
                </Container>
            </div>

            {/* Introductory Video Section */}
            <Container className="my-5 text-center">
                <h2 data-aos="fade-up">Welcome to PROJXON</h2>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <div className="homepage-video-container" data-aos="fade-up" data-aos-delay="500">
                            <iframe
                                className="homepage-video-iframe"
                                src="https://www.youtube.com/embed/ad79nYk2keg"
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
                    <Col md={4} className="homepage-service-card" data-aos="zoom-in" data-aos-delay="300">
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Business Process Optimization</Card.Title>
                                <Card.Text>Streamline your business processes to improve efficiency and reduce costs.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="homepage-service-card" data-aos="zoom-in" data-aos-delay="400">
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Project Management</Card.Title>
                                <Card.Text>End-to-end project management services to ensure successful project outcomes.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="homepage-service-card" data-aos="zoom-in" data-aos-delay="500">
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
                <Row className="my-5">
                    {reasons.map((reason, index) => (
                        <Col key={index} md={12} lg={4} className='mb-4' data-aos="fade-up" data-aos-delay="500">
                            <Card className="research-card h-100">
                                <Card.Body className='d-flex flex-column choose-us'>
                                    <div className='d-flex align-items-center mb-4'>
                                        {reason.icon}
                                        <Card.Title className='fs-4 ms-3 mb-0'>{reason.title}</Card.Title>
                                    </div>
                                    
                                    <Card.Text className='text-start text-muted mb-4'>{reason.description}</Card.Text>
                                    <div className='text-start border-top border-secondary-subtle pt-4 flex-grow-1'>
                                        <span className='fs-3 fw-bold'>{reason.stat}</span>
                                        <span className='text-muted stat-desc d-block'>{reason.statDescription}</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Client Testimonials */}
            <Container className="text-center my-5">
                <h2 data-aos="fade-up">Client Testimonials</h2>
                <Row>
                    <Col md={6} data-aos="fade-up" data-aos-delay="500">
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Text>
                                    "PROJXON transformed our onboarding process, reducing it from 90 days to just 14 days. This efficiency gain translated to an additional 2.5 months of revenue annually. Their expertise in process optimization is unparalleled."
                                </Card.Text>
                                <div className="blockquote-footer">John Doe, CEO of XYZ Corp</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} data-aos="fade-up" data-aos-delay="500">
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Text>
                                    "Thanks to PROJXON's innovative strategies, our operational costs decreased by 20% and our productivity improved dramatically. Their team is incredibly knowledgeable and dedicated."
                                </Card.Text>
                                <div className="blockquote-footer">Jane Smith, Operations Manager at ABC Inc</div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Call to Action Section */}
            <InfoForm />
        </>
    );
}

export default HomePage;
