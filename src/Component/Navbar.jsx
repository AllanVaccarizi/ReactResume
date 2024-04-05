import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar(){
    return (
        <>
        <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Allan Vaccarizi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#link">Portfolio</Nav.Link>
                    <Nav.Link href="#">Mon CV</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <NavDropdown title="Mes réseaux" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://www.linkedin.com/in/allan-vaccarizi-9a4599203/" target='blank'>Linkedin</NavDropdown.Item>
                    <NavDropdown.Item href="https://github.com/AllanVaccarizi" target='blank'>GitHub</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
        </>
    )
}

export default NavigationBar