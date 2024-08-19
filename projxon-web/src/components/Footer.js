import React from 'react';
import { FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Custom CSS file

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 footer">
      <Container>
        <Row>
          {/* Services Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Services</h2>
            <ul className="list-unstyled">
              <li><a href="marketing" className="footer-link">Marketing + Social</a></li>
              <li><a href="ecommerce" className="footer-link">E-commerce Solutions</a></li>
              <li><a href="optimization" className="footer-link">Business Optimization</a></li>
              <li><a href="management" className="footer-link">Project Management</a></li>
              <li><a href="it" className="footer-link">IT Interactions</a></li>
            </ul>
          </Col>

          {/* About Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">About</h2>
            <ul className="list-unstyled">
              <li><a href="about" className="footer-link">Vision</a></li>
              <li><a href="about" className="footer-link">Mission</a></li>
              <li><a href="about" className="footer-link">Core Value</a></li>
              <li><a href="about" className="footer-link">Meet the Team</a></li>
              <li><a href="about" className="footer-link">Our Journey</a></li>
            </ul>
          </Col>

          {/* Partnerships Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Partnerships</h2>
            <ul className="list-unstyled">
              <li><a href="servicepartners" className="footer-link">Service Partners</a></li>
              <li><a href="referralpartners" className="footer-link">Referral Partners</a></li>
            </ul>
          </Col>

          {/* Connect Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Connect</h2>
            <ul className="list-unstyled">
              <li><a href="contact" className="footer-link">Contact</a></li>
              <li><a href="social" className="footer-link">Social</a></li>
              <li><a href="appoint" className="footer-link">Appoint</a></li>
              <li><a href="inquiries" className="footer-link">Inquiries</a></li>
              <li><a href="address" className="footer-link">Address (Google)</a></li>
            </ul>
          </Col>

          {/* Blog & Research Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Research</h2>
            <ul className="list-unstyled">
              <li><a href="blog" className="footer-link">Blog</a></li>
              <li><a href="events" className="footer-link">Events</a></li>
              <li><a href="articles" className="footer-link">Articles</a></li>
              <li><a href="newsletter" className="footer-link">Newsletter</a></li>
            </ul>
          </Col>

          {/* Careers Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Careers</h2>
            <ul className="list-unstyled">
              <li><a href="join" className="footer-link">Join Our Team</a></li>
              <li><a href="internship" className="footer-link">Internship Program</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} PROJXON. All rights reserved.</p>
            <p>Follow us on:</p>
            <div className="d-flex justify-content-center social-icons">
              <a href="mailto:info@projxon.com" className="footer-icon" aria-label="Email">
                <FaEnvelope size={24} />
              </a>
              <a href="https://twitter.com/projxon" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com/company/projxon" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
