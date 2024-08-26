import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './PartnerForm.css'; // Custom CSS for additional styling

const PartnerForm = () => {
    return (
        <div className="partner-form-container text-white p-2 m-auto" >
            <Col className='mb-4'>
                <h2 className="text-center mt-4">PARTERSHIP REQUEST</h2>
                <Form className="infoform mx-auto justify-content-center" style={{ maxWidth: '600px' }}>
                    <Form.Group controlId="formName">
                        <Form.Control type="text" placeholder="Name" required />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                        <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>


                    <Form.Group controlId="formPhone" className="mt-3">
                        <Form.Control type="phone" placeholder="Phone" required />
                    </Form.Group>

                    <Form.Group controlId="formOrganization" className="mt-3">
                        <Form.Control type="textarea" placeholder="Organization" required />
                    </Form.Group>

                    <Form.Group controlId="formServicesNeeded" className="mt-3">

                        <Form.Control type="textarea" placeholder="Services needed" required />
                    </Form.Group>

                    <Form.Group controlId="formMessage" className="mt-3">
                        <Form.Label>Your Message</Form.Label>
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

export default PartnerForm;
