import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './InfoForm.css'; // Custom CSS file

const InfoForm = () => {
    return (
        <div className="infoform-container text-white p-2" data-aos="fade-up">
            <Col className='m-4'>
                <h2 className="text-center">Ready to Transform Your Business?</h2>
                <p className="text-center">Contact us today to discuss how we can help you achieve your business goals.</p>
                {/* Contact Form */}
                <Form className="infoform mx-auto justify-content-center" style={{ maxWidth: '600px' }}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                    </Form.Group>

                    <Form.Group controlId="formMessage" className="mt-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                        <Button
                            variant="light"
                            type="submit"
                            className="mt-4 submit-button"
                            style={{ backgroundColor: '#FFD700', borderColor: '#FFD700', color: '#000' }}
                        >
                            Submit
                        </Button>
                    </div>
                </Form>
            </Col>
        </div>
    );
};

export default InfoForm;
