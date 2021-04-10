import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container,Row,Col } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="/">Go Shopping App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                 <Nav.Link href="/">Home</Nav.Link>
                {/* <Nav.Link href="/contact-us">About Us</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Container>
        <Row>
            <Col>
            <h1 className="text-center">Welcome to the Go Shopping Application</h1>
            <h2 className="text-center">Browse our range of skating products!</h2>
            {/* <Button variant="outline-primary">Primary</Button>{' '} */}
            </Col>
        </Row>
        </Container>

        </header>
    )
}

export default Header
