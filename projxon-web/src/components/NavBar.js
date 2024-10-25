import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './NavBar.css';

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleLinkClick = () => setExpanded(false);
    
    return (
        <div className='w-100 my-1'>
            <Navbar
                bg="black"
                variant="black"
                expand="lg"
                expanded={expanded}
                onToggle={handleToggle}
                className="fixed-top"
            >
                <Container className='d-flex justify-content-between py-1'>
                    <Navbar.Brand as={NavLink} to="/Projxon" className='text-light'>
                        PROJXON
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container className="d-flex justify-content-md-start justify-content-lg-end">
                            <Nav className="ml-auto text-uppercase">
                                <Nav.Link 
                                    as={NavLink} 
                                    to="/Projxon" 
                                    onClick={handleLinkClick} 
                                >
                                    Home
                                </Nav.Link>
                                <Nav.Link 
                                    as={NavLink} 
                                    to="/services" 
                                    onClick={handleLinkClick} 
                                >
                                    Services
                                </Nav.Link>
                                <Nav.Link 
                                    as={NavLink} 
                                    to="/about" 
                                    onClick={handleLinkClick} 
                                >
                                    About
                                </Nav.Link>
                                <Nav.Link 
                                    as={NavLink} 
                                    to="/partnership" 
                                    onClick={handleLinkClick} 
                                >
                                    Partnership
                                </Nav.Link>
                                <Nav.Link 
                                    as={NavLink} 
                                    to="/research" 
                                    onClick={handleLinkClick} 
                                >
                                    Research
                                </Nav.Link>
                                <Nav.Link 
                                    as={NavLink} 
                                    to="/contact" 
                                    onClick={handleLinkClick} 
                                >
                                    Connect
                                </Nav.Link>
                                <Nav.Link 
                                    as={NavLink} 
                                    to="/career" 
                                    onClick={handleLinkClick} 
                                >
                                    Career
                                </Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
