import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CV from "../images/CV.pdf";

function NavigationBar(){
    return (
        <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">

            <Container>
                <Navbar.Brand href="home">Allan Vaccarizi</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">

                    <NavLink to="/home" className="nav-link" activeClassName="active">Accueil</NavLink>
                    
                    <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>

                    <a href={CV} without rel="noopener noreferrer" target="_blank" className="nav-link">Mon CV</a>

                    <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                    
                    <NavDropdown title="Mes réseaux" id="basic-nav-dropdown">
                        
                        <NavDropdown.Item href="https://www.linkedin.com/in/allan-vaccarizi-9a4599203/" target='_blank'>
                            Linkedin
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://github.com/AllanVaccarizi" target='_blank'>
                            GitHub
                        </NavDropdown.Item>

                    </NavDropdown>

                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
