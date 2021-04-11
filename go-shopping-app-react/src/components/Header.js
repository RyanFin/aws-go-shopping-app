import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap'
// import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="/">Go Shopping App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/settings">Settings</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center" style={{ marginBottom: "2.5%", marginTop: "1.5%" }}>Welcome to the Go Shopping Application</h1>
                        {/* <Button variant="outline-primary">Primary</Button>{' '} */}
                    </Col>
                </Row>
            </Container>

        </header>
    )
}

export default Header
