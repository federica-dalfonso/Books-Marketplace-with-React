import { Container, Navbar, Nav, Form } from "react-bootstrap";
import "./MyNav.css";
import logo from './logo_epibooks.png';
import logoWhite from './logo_white.png';
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";


export default function MyNav ({ text, onSearchChange}) {

  const { theme } = useContext(ThemeContext);

  const navTheme = theme === "light" ? "bg-light" : "bg-dark";


  return (
    <Navbar className={navTheme}>
      <Container className="justify-content-start">
          <Navbar.Brand href="#">
            <img src={theme === "dark" ? `${logoWhite}` : `${logo}`} alt="epibooks_Logo" style={{width: '8em'}}/>
          </Navbar.Brand>

          <Nav className="pe-2">
            <Nav.Link href="#" className={theme === "dark" ? "color-dark color-hover-dark" : "color-light color-hover-light"}>Home</Nav.Link>
            <Nav.Link href="#" className={theme === "dark" ? "color-dark color-hover-dark" : "color-light color-hover-light"}>About</Nav.Link>
            <Nav.Link href="#" className={theme === "dark" ? "color-dark color-hover-dark" : "color-light color-hover-light"}>Browse</Nav.Link>
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