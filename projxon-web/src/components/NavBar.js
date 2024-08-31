import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './NavBar.css'

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleLinkClick = () => setExpanded(false);

    return (
        <div className='w-100'>
            <Navbar
                bg="dark"
                variant="dark"
                expand="md"
                expanded={expanded}
                onToggle={handleToggle}
                className="fixed-top"
            >
                <Navbar.Brand as={NavLink} to="/Projxon" className="">
                    PROJXON
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container className="d-flex justify-content-center">
                        <Nav className="ml-auto">
                            <Nav.Link as={NavLink} to="/services" onClick={handleLinkClick} activeClassName="active">
                                Services
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about" onClick={handleLinkClick} activeClassName="active">
                                About
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/partnership" onClick={handleLinkClick} activeClassName="active">
                                Partnership
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/research" onClick={handleLinkClick} activeClassName="active">
                                Research
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" onClick={handleLinkClick} activeClassName="active">
                                Connect
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/career" onClick={handleLinkClick} activeClassName="active">
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
