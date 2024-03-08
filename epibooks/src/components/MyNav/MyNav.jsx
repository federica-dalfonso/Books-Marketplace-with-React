import { Container, Navbar, Nav } from "react-bootstrap";
import './MyNav.css';
import logo from './logo_epibooks.png';
import LinkItem from "./LinkItem";


export default function MyNav () {

  return (
    <Navbar className="bg-body-transparent">
      <Container fluid>

          <Navbar.Brand href="#">
            <img src={logo} alt="epibooks_Logo" className="resizing"/>
          </Navbar.Brand>

          <Nav>
            <Nav.Link href="#"><LinkItem text="Home"/></Nav.Link>
            <Nav.Link href="#"><LinkItem text="About"/></Nav.Link>
            <Nav.Link href="#"><LinkItem text="Browse"/></Nav.Link>
          </Nav>

      </Container>
    </Navbar>
  )
}