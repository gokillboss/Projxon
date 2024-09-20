import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import InfoForm from './InfoForm';
import './ResearchPage.css';

const ResearchPage = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="research-hero-section text-center">
                <Container className="services-hero-content text-center">
                    <h1 className="research-title">Blog & Research</h1>
                    <p className="hero-subtitle">Stay Updated with the Latest News, Events, and Insights</p>
                </Container>
            </div>

            {/* Research Content Section */}
            <Container className="my-5">
                <Row>
                    <Col md={3}>
                        <Card className="research-card">
                            <Card.Body>
                                <Card.Title>Blog</Card.Title>
                                <Card.Text>Discover insightful articles and updates from industry experts.</Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="research-card">
                            <Card.Body>
                                <Card.Title>Events</Card.Title>
                                <Card.Text>Join our upcoming events and webinars to stay ahead in the industry.</Card.Text>
                                <Button variant="primary">View Events</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="research-card">
                            <Card.Body>
                                <Card.Title>Articles</Card.Title>
                                <Card.Text>Read our detailed articles and case studies on various topics.</Card.Text>
                                <Button variant="primary">Explore Articles</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="research-card">
                            <Card.Body>
                                <Card.Title>Newsletter</Card.Title>
                                <Card.Text>Subscribe to our newsletter for the latest updates and exclusive content.</Card.Text>
                                <Button variant="primary">Subscribe</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Footer CTA Section */}
            <div className="research-footer-cta text-center py-5">

                <InfoForm />
            </div>
        </>
    );
};

export default ResearchPage;
