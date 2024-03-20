import { Container, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';
import ThemeButton from './ThemeButton';
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";

export default function AllBooks ({results}) {        
    const { theme, setTheme } = useContext(ThemeContext);


    const changeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const containerTheme = theme === "dark" ? "bg-dark" : "bg-light";


    return (
        <>
            <Container className={`my-4 ${containerTheme}`}>     
            <ThemeButton changeTheme={changeTheme}/>            
                <Row>
                    {/*passo come prop l'ìntero libro, poi lo destrutturo nel componente*/}
                    {results.map((book) => (
                        <SingleBook key={book.asin} book={book}/>
                    ))}
                </Row>

            </Container>  
        </>
    )
}