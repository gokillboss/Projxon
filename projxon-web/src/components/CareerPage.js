import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CareerPage.css'; // Custom CSS for styling
import internPic from '../assets/internPic.png'; // Importing the image correctly

const CareerPage = () => {
    return (
        <div>
            <div className="contact-hero-section" data-aos="fade-in">
                <Container className="text-center">
                    <h1 className="hero-title">Join Our Team </h1>
                </Container>
            </div>

            <Container className="intern-section my-5">
                <Row className='align-items-center'>
                    <Col md={6} data-aos="fade-right" className='align-items-center'>
                        <h2>Future-Proof Your Career</h2>
                        <p className='my-3'>
                            At PROJXON, we help young professionals realize their full potential while building their personal brand and understanding their value. Are you ready to launch your career in strategic consulting and digital marketing?
                        </p>

                        <p className='my-3'>

                            Our 90-day Startup Internship Program offers passionate and innovative individuals the opportunity to work on real consulting projects and collaborate with participants from across the US in various industries, including Tech, AI, Health and Wellness, Real Estate, E-commerce, and Professional Services. You'll gain invaluable hands-on experience while making a tangible impact.
                        </p>
                        <Button variant="primary" className="mt-3">Learn More</Button>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <Card className="image-card">
                            <Card.Img variant="top" src={internPic} alt="Internship" fluid rounded />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CareerPage;
