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
        <div className='w-100'>
            <Navbar
                bg="dark"
                variant="dark"
                expand="md"
                expanded={expanded}
                onToggle={handleToggle}
                className="fixed-top"
            >
                <Navbar.Brand as={NavLink} to="/Projxon">
                    PROJXON
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container className="d-flex justify-content-center">
                        <Nav className="ml-auto">
                            <Nav.Link 
                                as={NavLink} 
                                to="/services" 
                                onClick={handleLinkClick} 
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                Services
                            </Nav.Link>
                            <Nav.Link 
                                as={NavLink} 
                                to="/about" 
                                onClick={handleLinkClick} 
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link 
                                as={NavLink} 
                                to="/partnership" 
                                onClick={handleLinkClick} 
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                Partnership
                            </Nav.Link>
                            <Nav.Link 
                                as={NavLink} 
                                to="/research" 
                                onClick={handleLinkClick} 
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                Research
                            </Nav.Link>
                            <Nav.Link 
                                as={NavLink} 
                                to="/contact" 
                                onClick={handleLinkClick} 
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                Connect
                            </Nav.Link>
                            <Nav.Link 
                                as={NavLink} 
                                to="/career" 
                                onClick={handleLinkClick} 
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
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
