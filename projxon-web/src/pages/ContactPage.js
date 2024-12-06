import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactPic from '../assets/contact/Proj.webp';
import Hero from '../components/Hero';
import InfoForm from '../components/InfoForm';

const ContactPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className='contact-page'>
            <Hero title="Contact Us" />
            <section className='sections-container'>
                <Container className="contact-section d-flex justify-content-center">
                    <Row className='align-items-center justify-content-between'>

                        <Col xs={12} md={6} className="pic" data-aos="fade-up">
                            <Row className="d-flex flex-column align-items-center text-center gy-3">
                                <Col>
                                    <div className="content-container ">

                                        <h2>At <strong>PROJXON</strong>, we're here to help.</h2>
                                        <p className='text-begin'>
                                            Whether you have inquiries about our <strong>services</strong>, wish to explore <strong>partnership</strong> opportunities, or are ready to embark on a journey of growth and success, our team is eager to connect with you. <strong>Let’s Transform Chaos Into Opportunity together.</strong>
                                        </p>
                                        <p>
                                            <strong>Contact us</strong> and let's begin a conversation that can elevate your brand to new heights.
                                        </p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="image-container">
                                        <img src={contactPic} alt="Promotional" className="img-fluid" />
                                    </div>
                                </Col>

                            </Row>

                        </Col>
                        
                        <Col xs={12} md={6} className="info-form" data-aos="fade-up">
                            <InfoForm />
                        </Col>
                    </Row>

                </Container>

            </section>
            
        </div>
    );
};

export default ContactPage;
