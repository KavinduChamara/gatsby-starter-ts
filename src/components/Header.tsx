import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return <Navbar>
        <Container>
            <Navbar.Brand href="#home">Zecco</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Recipe box">
                        <NavDropdown.Item>
                            Fruit salad
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            Scrumbled egg
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            Vegitable mix
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Products">
                        <NavDropdown.Item>
                            Fruit
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            Vegitables
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            Eggs
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>About us</Nav.Link>
                    <Nav.Link>Visit us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>Log in</Nav.Link>
                    <Nav.Link>Create account</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>;
}
