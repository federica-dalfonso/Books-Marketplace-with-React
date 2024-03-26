import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import ThemeButton from './ThemeButton';
import CommentArea from './CommentArea';
import React, { useContext } from 'react';
import { useState } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";
import './AllBooks.css'

export default function AllBooks ({ results }) {        
    const { theme, setTheme } = useContext(ThemeContext);
    const changeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    const containerTheme = theme === "dark" ? "bg-dark" : "bg-light";

    //reimposto lo stato con ASIN libro:
    const [selected, setSelected] = useState(null);
    const handleBookSelected = (asin) => {
        setSelected(asin);
    };

    return (
        <>
            <Container className={`mx-4 ${containerTheme}`}>     
                <ThemeButton changeTheme={changeTheme}/>  
                    <Row>
                        <Col xs={8} lg={8}>
                           <Row>
                                {/*passo come prop l'ìntero libro, poi lo destrutturo nel componente*/}
                                {results.map((book) => (
                                    <SingleBook key={book.asin} book={book} onSelect={handleBookSelected}/>
                                ))}
                            </Row> 
                        </Col>
                        <Col xs="4" lg="4">
                            {/* {selected && <CommentArea selectedBook={selected}/>}                             */}
                        </Col>
                    </Row>                        
            </Container>  
        </>
    )
}