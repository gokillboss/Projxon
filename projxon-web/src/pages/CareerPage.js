import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CareerPage.css';
import internPic from '../assets/internPic.png';
import InfoForm from '../components/InfoForm';

const CareerPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, []);

    return (
        <div>
            <div className="career-hero-section" data-aos="fade-in" data-aos-duration="1500">
                <Container className="text-center">
                    <h1 className="career-hero-title text-uppercase">Join Our Team</h1>
                </Container>
            </div>

            <Container className="intern-section my-5">
                <Row className="align-items-center">
                    <Col xs={12} md={6} data-aos="fade-right" data-aos-delay="200" data-aos-duration="1200" className='left
                    '>
                        <h2>Future-Proof Your Career</h2>
                        <p className="my-3" data-aos="fade-up" data-aos-delay="300">
                            At PROJXON, we help young professionals realize their full potential while building their personal brand and understanding their value. Are you ready to launch your career in strategic consulting and digital marketing?
                        </p>

                        <p className="my-3" data-aos="fade-up" data-aos-delay="400">
                            Our 90-day Startup Internship Program offers passionate and innovative individuals the opportunity to work on real consulting projects and collaborate with participants from across the US in various industries, including Tech, AI, Health and Wellness, Real Estate, E-commerce, and Professional Services. You'll gain invaluable hands-on experience while making a tangible impact.
                        </p>

                        <h3 data-aos="fade-up" data-aos-delay="500">What We Offer:</h3>
                        <ul data-aos="fade-up" data-aos-delay="600">
                            <li><strong>Professional Development:</strong> Work closely with professional coaches to develop skills in Project Management, AI innovation and implementation, and achieve your career goals with personalized 1:1 coaching.</li>
                            <li><strong>Autonomy and Impact:</strong> Enjoy the freedom to work on projects that deliver direct results, in a remote and autonomous role.</li>
                            <li><strong>Collaborative Environment:</strong> Engage with a dynamic team, working individually and collectively on diverse projects, ensuring you gain comprehensive experience.</li>
                        </ul>

                        <p className="my-3" data-aos="fade-up" data-aos-delay="700">
                            Discover the power of tailored strategies and make your mark with PROJXON. As part of our team, you'll contribute to strategies that drive sustainable growth for our clients. This is your opportunity to forge long-lasting partnerships and be part of a team that values growth, productivity, and commercialization.
                        </p>
                    </Col>

                    <Col xs={12} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
                        <Card className="">
                            <div className="">
                                <i className="fas fa-balance-scale"></i>
                            </div>
                            <Card.Body>
                                <Card className="">
                                    <Card.Img variant="top" src={internPic} alt="Promotional" fluid rounded />
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <InfoForm />
        </div>
    );
};

export default CareerPage;
