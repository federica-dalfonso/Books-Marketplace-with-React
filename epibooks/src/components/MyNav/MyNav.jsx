import { Container, Navbar, Nav, Form } from "react-bootstrap";
import "./MyNav.css";
import logoDark from './EPIBOOKS_mint.png';
import logoLight from './EPIBOOKS_black.png';
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";
import ThemeButton from './ThemeButton';


export default function MyNav ({ text, onSearchChange}) {

  //tema e bottone
  const { theme, setTheme } = useContext(ThemeContext);
    const changeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

  const navTheme = theme === "light" ? "bg-light" : "bg-dark";


  return (
    <Navbar className={navTheme}>
      <Container className="justify-content-start">
          <Navbar.Brand href="#">
            <img src={theme === "dark" ? `${logoDark}` : `${logoLight}`} alt="epibooks_Logo" style={{width: '8em'}}/>
          </Navbar.Brand>

          <Nav className="pe-2">
            <Nav.Link href="#" className={theme === "dark" ? "color-dark color-hover-dark" : "color-light color-hover-light"}>Home</Nav.Link>
            <Nav.Link href="#" className={theme === "dark" ? "color-dark color-hover-dark" : "color-light color-hover-light"}>About</Nav.Link>
            <Nav.Link href="#" className={theme === "dark" ? "color-dark color-hover-dark" : "color-light color-hover-light"}>Browse</Nav.Link>
          </Nav>

          <Form.Control className='search-field-style'
            type="text" id="inputSearch"
            placeholder="Cerca un titolo..."
            aria-describedby='searchBooks'
            value={text}
            onChange={onSearchChange}
          />  
          <ThemeButton changeTheme={changeTheme}/> 
      </Container>         
    </Navbar>
  )
}