import React, { useState, useRef } from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './InfoForm.css';

const InfoForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        show: false,
        message: '',
        type: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const result = await emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID_1,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            );

            if (result.text === 'OK') {
                setStatus({
                    show: true,
                    message: 'Thank you! We will contact you as soon as possible.',
                    type: 'success'
                });
                form.current.reset();
            }
        } catch (error) {
            setStatus({
                show: true,
                message: 'Something went wrong. Please try again later.',
                type: 'danger'
            });
            console.error('FAILED...', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="infoform-container text-white p-2">
            <Col className='m-4'>
                <h2 className="text-center">Ready to Transform Your Business?</h2>
                <p className="text-center">Contact us today to discuss how we can help you achieve your business goals.</p>
                
                {status.show && (
                    <Alert 
                        variant={status.type}
                        onClose={() => setStatus({...status, show: false})} 
                        dismissible
                        className="mx-auto"
                        style={{ maxWidth: '600px' }}
                    >
                        {status.message}
                    </Alert>
                )}

                <Form 
                    ref={form} 
                    className="infoform mx-auto justify-content-center" 
                    style={{ maxWidth: '600px' }}
                    onSubmit={handleSubmit}
                >
                    <Form.Group controlId="formName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="user_name"
                            placeholder="Enter your full name" 
                            required 
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="user_email"
                            placeholder="Enter your email address" 
                            required 
                        />
                    </Form.Group>

                    <Form.Group controlId="formMessage" className="mt-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            name="message"
                            rows={5} 
                            placeholder="How can we help you?" 
                            required 
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                        <Button
                            variant="light"
                            type="submit"
                            className="mt-4 submit-button"
                            style={{ backgroundColor: '#FFD700', borderColor: '#FFD700', color: '#000' }}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Submit'}
                        </Button>
                    </div>
                </Form>
            </Col>
        </div>
    );
};

export default InfoForm;