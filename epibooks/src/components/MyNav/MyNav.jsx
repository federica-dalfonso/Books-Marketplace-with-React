import { Container, Navbar, Nav, Form } from "react-bootstrap";
import logo from './logo_epibooks.png';
import LinkItem from "./LinkItem";


export default function MyNav ({ text, onSearchChange}) {


  return (
    <Navbar className="bg-body-transparent">
      <Container className="justify-content-start">
          <Navbar.Brand href="#">
            <img src={logo} alt="epibooks_Logo" style={{width: '8em'}}/>
          </Navbar.Brand>

          <Nav>
            <Nav.Link href="#"><LinkItem text="Home"/></Nav.Link>
            <Nav.Link href="#"><LinkItem text="About"/></Nav.Link>
            <Nav.Link href="#"><LinkItem text="Browse"/></Nav.Link>
          </Nav>

          <Form.Control className='search-field'
            type="text" id="inputSearch"
            placeholder="Cerca un titolo..."
            aria-describedby='searchBooks'
            value={text}
            onChange={onSearchChange}
          />  
      </Container>     
    
    </Navbar>
  )
}