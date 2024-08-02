import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg"
                className="fixed-top ">
                <Navbar.Brand as={Link} to="/" className='me-2'>PROJXON</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Container className="d-flex justify-content-center">

                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link
                                as={Link} to="/partnership">Partnership</Nav.Link>
                            <Nav.Link as={Link} to="/research">Research</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/career">Career</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
};

export default NavBar;