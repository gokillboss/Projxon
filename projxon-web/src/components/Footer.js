import React from 'react';
import { FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Footer.css'; // Custom CSS file

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 footer">
            <Container>
                <Row>
                    <Col>
                        <Link to="/Projxon" className="footer-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h1 className="footer-logo">PROJXON</h1>
                        </Link>
                    </Col>
                    <Col className="text-end">
                        <div className="d-flex justify-content-end social-icons">
                            <a href="mailto:info@projxon.com" className="footer-icon" aria-label="Email">
                                <FaEnvelope size={40} />
                            </a>
                            <a href="https://twitter.com/projxon" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Twitter">
                                <FaTwitter size={40} />
                            </a>
                            <a href="https://linkedin.com/company/projxon" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn">
                                <FaLinkedin size={40} />
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className="my-4" />
                <Row>
                    {/* Services Column */}
                    <Col xs={6} md={2} className="mb-3">
                        <h2 className="footer-heading">Services</h2>
                        <ul className="list-unstyled">
                            <li><Link to="/marketing" className="footer-link">Marketing + Social</Link></li>
                            <li><Link to="/ecommerce" className="footer-link">E-commerce Solutions</Link></li>
                            <li><Link to="/optimization" className="footer-link">Business Optimization</Link></li>
                            <li><Link to="/management" className="footer-link">Project Management</Link></li>
                            <li><Link to="/it" className="footer-link">IT Interactions</Link></li>
                        </ul>
                    </Col>

                    {/* About Column */}
                    <Col xs={6} md={2} className="mb-3">
                        <h2 className="footer-heading">About</h2>
                        <ul className="list-unstyled">
                            <li><Link to="/about" className="footer-link">Vision</Link></li>
                            <li><Link to="/about" className="footer-link">Mission</Link></li>
                            <li><Link to="/about" className="footer-link">Core Value</Link></li>
                            <li><Link to="/about" className="footer-link">Meet the Team</Link></li>
                            <li><Link to="/about" className="footer-link">Our Journey</Link></li>
                        </ul>
                    </Col>

                    {/* Partnerships Column */}
                    <Col xs={6} md={2} className="mb-3">
                        <h2 className="footer-heading">Partnerships</h2>
                        <ul className="list-unstyled">
                            <li><Link to="/servicepartners" className="footer-link">Service Partners</Link></li>
                            <li><Link to="/referralpartners" className="footer-link">Referral Partners</Link></li>
                        </ul>
                    </Col>

                    {/* Connect Column */}
                    <Col xs={6} md={2} className="mb-3">
                        <h2 className="footer-heading">Connect</h2>
                        <ul className="list-unstyled">
                            <li><Link to="/contact" className="footer-link">Contact</Link></li>
                            <li><Link to="/social" className="footer-link">Social</Link></li>
                            <li><Link to="/appoint" className="footer-link">Appoint</Link></li>
                            <li><Link to="/inquiries" className="footer-link">Inquiries</Link></li>
                            <li><Link to="/address" className="footer-link">Address (Google)</Link></li>
                        </ul>
                    </Col>

                    {/* Blog & Research Column */}
                    <Col xs={6} md={2} className="mb-3">
                        <h2 className="footer-heading">Research</h2>
                        <ul className="list-unstyled">
                            <li><Link to="/blog" className="footer-link">Blog</Link></li>
                            <li><Link to="/events" className="footer-link">Events</Link></li>
                            <li><Link to="/articles" className="footer-link">Articles</Link></li>
                            <li><Link to="/newsletter" className="footer-link">Newsletter</Link></li>
                        </ul>
                    </Col>

                    {/* Careers Column */}
                    <Col xs={6} md={2} className="mb-3">
                        <h2 className="footer-heading">Careers</h2>
                        <ul className="list-unstyled">
                            <li><Link to="/join" className="footer-link">Join Our Team</Link></li>
                            <li><Link to="/internship" className="footer-link">Internship Program</Link></li>
                        </ul>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} PROJXON. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
