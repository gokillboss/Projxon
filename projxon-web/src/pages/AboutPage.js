import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InfoForm from '../components/InfoForm';
import './AboutPage.css';

const AboutPage = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-hero-section" data-aos="fade-in">
                <Container className="text-center about-hero-content">
                    <h1 className="about-hero-title">About PROJXON</h1>
                    <p className="about-hero-subtitle">Empowering Businesses to Reach Their Full Potential</p>
                </Container>
            </div>


            <Container className="my-5" data-aos="fade-up">
                <h2 className="text-center my-5">Who We Are</h2>
                <Card className="p-4 shadow-sm border-0">
                    <Card.Body>
                        <p>
                            PROJXON is a leading business consulting firm that specializes in helping medium-sized businesses achieve their full potential. We offer a wide range of services, including business process optimization, project management, and strategic planning, to help our clients navigate challenges, optimize operations, and drive sustainable growth. Our team of experts is dedicated to providing tailored solutions, innovative strategies, and expert guidance to help businesses innovate, grow, and succeed.
                        </p>
                    </Card.Body>
                </Card>
            </Container>

            <Container className="my-5">
                <Row>
                    <Col xs={12} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
                        <Card className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <h4 className='mb-4'>Our Mission</h4></Card.Title>
                                <Card.Text>
                                    At PROJXON, our mission is to empower medium-sized businesses to achieve their full potential through tailored solutions, innovative strategies, and expert guidance. We strive to help our clients navigate challenges, optimize operations, and drive sustainable growth.
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
                                <Card.Title>
                                    <h4 className='mb-4'>Our Vision </h4></Card.Title>
                                <Card.Text>
                                    We envision a world where businesses can easily access the expertise and tools they need to thrive in a rapidly changing environment. By offering cutting-edge solutions and unparalleled support, we aim to be the go-to partner for businesses looking to innovate, grow, and succeed.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Our Values Section */}
            <Container className="my-5">
                <h2 className="text-center mb-4" data-aos="fade-up">Our Core Values</h2>
                <Row>
                    <Col xs={12} md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
                        <Card className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Innovation</Card.Title>
                                <Card.Text>
                                    We constantly seek out new ideas and approaches to stay ahead of industry trends and provide our clients with cutting-edge solutions.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
                        <Card className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-balance-scale"></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Integrity</Card.Title>
                                <Card.Text>
                                    We believe in doing business with honesty and transparency, building trust with our clients and partners through ethical practices.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className="mb-4" data-aos="fade-up" data-aos-delay="300">
                        <Card className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Collaboration</Card.Title>
                                <Card.Text>
                                    We work closely with our clients and partners, fostering a collaborative environment that drives success for everyone involved.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Our Team Section */}
            <Container className="my-5">
                <h2 className="text-center mb-4" data-aos="fade-up">Meet Our Team</h2>
                <Row className='my-4'>
                    <Col md={4} data-aos="fade-up" data-aos-delay="100">
                        <Card className="team-card align-items-center my-3">
                            <Image src="https://via.placeholder.com/150" roundedCircle className="team-image" />
                            <Card.Body>
                                <Card.Title>John Doe</Card.Title>
                                <Card.Text>CEO & Founder</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} data-aos="fade-up" data-aos-delay="200">
                        <Card className="team-card align-items-center my-3">
                            <Image src="https://via.placeholder.com/150" roundedCircle className="team-image" />
                            <Card.Body>
                                <Card.Title>Jane Smith</Card.Title>
                                <Card.Text>Chief Operating Officer</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} data-aos="fade-up" data-aos-delay="300">
                        <Card className="team-card align-items-center my-3">
                            <Image src="https://via.placeholder.com/150" roundedCircle className="team-image" />
                            <Card.Body>
                                <Card.Title>Emily Johnson</Card.Title>
                                <Card.Text>Head of Innovation</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Company History Section */}
            <Container className="my-5">
                <h2 className="text-center mb-4" data-aos="fade-down">Our Journey</h2>
                <Row className="justify-content-center">
                    <Col md={6} data-aos="fade-up">
                        <h3>Milestones and Achievements</h3>
                        <p>
                            From our humble beginnings, we have achieved numerous milestones, including expanding our client base internationally, developing proprietary solutions, and being recognized as industry leaders in business consulting. Our journey is a testament to our commitment to excellence and continuous improvement.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* Call to Action Section */}
            <InfoForm data-aos="fade-up" data-aos-delay="900" />
        </div>
    );
}

export default AboutPage;
