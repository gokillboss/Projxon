import { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import './ContactPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contact from '../assets/contact/bg-contact.webp';

import Hero from '../components/Hero';
import InfoForm from '../components/InfoForm';

const ContactPage = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const contactInfoList = [
        {
            icon: <FaEnvelopeOpenText className="text-yellow" />,
            label: "info@projxon.com",
            href: "mailto:info@projxon.com",
        },
    ];

    return (
        <div className='contact-page'>
            <Hero title="Contact Us" backgroundClass="contact-hero"/>

            <section className="contact position-relative sections-container">
                <div
                    className="contact-bg-holder d-none d-md-block"
                    style={{
                        backgroundImage:
                        `url(${contact})`,
                    }}
                />
                <Container className="position-relative">
                    <Row className="justify-content-between">
                        <Col lg={7} xxl={5} className="mb-5 mb-lg-0">
                            <h2 className="contact-title text-black mb-4 mt-0">
                                Ready to Transform Chaos Into Opportunity?

                            </h2>
                            <p className="contact-sub-heading text-black mb-0">
                            Whether you have inquiries about our <strong>services</strong>, wish to explore <strong>partnership</strong> opportunities, or are ready to embark on a journey of growth and success, our team is eager to connect with you. <strong>Let's Transform Chaos Into Opportunity together.</strong>

                            </p>
                            <div className="mt-5 pt-md-4">
                                {contactInfoList.map((info, index) => (
                                    <Card
                                        className={`contact-link mt-4`}
                                        key={index}
                                    >
                                        <Card.Body className="d-flex align-items-center">
                                            <div className="fs-3 px-2 lh-1">
                                                {info.icon}
                                            </div>
                                            <a
                                                className="contact-link-content ms-4"
                                                href={info.href || "#!"}
                                            >
                                                {info.label}
                                            </a>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </Col>
                        <Col lg={5}>
                            <InfoForm />
                        </Col>
                    </Row>
                </Container>
            </section>     
        </div>
    );
};

export default ContactPage;
