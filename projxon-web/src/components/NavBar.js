import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './NavBar.css';

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleLinkClick = () => setExpanded(false);

    const navLinks = [
        { to: "/Projxon", label: "Home" },
        { to: "/services", label: "Services" },
        { to: "/about", label: "About" },
        { to: "/partnership", label: "Partnership" },
        { to: "/research", label: "Research" },
        { to: "/contact", label: "Contact" },
        { to: "/career", label: "Career" },
    ]
    
    return (
        <div className='w-100'>
            <Navbar
                fixed='top'
                bg="black"
                variant="black"
                expand="lg"
                expanded={expanded}
                onToggle={handleToggle}
            >
                <Container className='d-flex justify-content-between py-1'>
                    <Navbar.Brand as={NavLink} to="/Projxon" className='text-light'>
                        PROJXON
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container className="d-flex justify-content-md-start justify-content-lg-end">
                            <Nav className="ml-auto text-uppercase">
                                {navLinks.map((link, index) => (
                                    <Nav.Link 
                                        key={index}
                                        as={NavLink} 
                                        to={link.to}
                                        onClick={handleLinkClick} 
                                    >
                                        {link.label}
                                    </Nav.Link>      
                                ))}
                            </Nav>
                        </Container>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
