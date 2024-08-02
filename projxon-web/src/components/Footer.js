
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; // Custom CSS file
import 'aos/dist/aos.css'; // Animation library


const Footer = () => {

    return (
        <footer className="bg-dark text-white text-center py-3">
        <Container>
            <Row>
                <Col>
                    <p>&copy; {new Date().getFullYear()} PROJXON. All rights reserved.</p>
                    <p>Follow us on:
                        <a href="#facebook" className="text-white ml-2">Facebook</a> |
                        <a href="#twitter" className="text-white ml-2">Twitter</a> |
                        <a href="#linkedin" className="text-white ml-2">LinkedIn</a>
                    </p>
                </Col>
            </Row>
        </Container>
        </footer>

    )
}

export default Footer;