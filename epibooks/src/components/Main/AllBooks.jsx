import { Container, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';
import React, { useContext } from 'react';
import { useState } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";
import './AllBooks.css'

export default function AllBooks ({ results }) {   

    //tema     
    const { theme } = useContext(ThemeContext);

    const containerTheme = theme === "dark" ? "bg-dark" : "bg-light";

    //reimposto lo stato con ASIN libro:
    const [selected, setSelected] = useState(null);
    const handleBookSelected = (asin) => {
        setSelected(asin);
    };

    return (
        <>
            <Container className={`mt-5 ${containerTheme}`}>       
                    <Row>                                                                
                        {/*passo come prop l'ìntero libro, poi lo destrutturo nel componente*/}
                        {results.map((book) => (
                            <SingleBook key={book.asin} book={book} onSelect={handleBookSelected}/>
                        ))}                                                    
                    </Row>                        
            </Container>  
        </>
    )
}