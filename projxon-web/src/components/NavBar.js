import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleLinkClick = () => setExpanded(false);

    return (
        <div className='w-100'>
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                expanded={expanded}
                onToggle={handleToggle}
                className="fixed-top"
            >
                <Navbar.Brand as={Link} to="/Projxon" className="">
                    PROJXON
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container className="d-flex justify-content-center">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/services" onClick={handleLinkClick}>
                                Services
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/partnership" onClick={handleLinkClick}>
                                Partnership
                            </Nav.Link>
                            <Nav.Link as={Link} to="/research" onClick={handleLinkClick}>
                                Research
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>
                                Connect
                            </Nav.Link>
                            <Nav.Link as={Link} to="/career" onClick={handleLinkClick}>
                                Career
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;
