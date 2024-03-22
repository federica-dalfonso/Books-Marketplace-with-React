import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import ThemeButton from './ThemeButton';
import CommentArea from './CommentArea';
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
                        <Col>
                           <Row>
                                {/*passo come prop l'ìntero libro, poi lo destrutturo nel componente*/}
                                {results.map((book) => (
                                    <SingleBook key={book.asin} book={book}/>
                                ))}
                            </Row> 
                        </Col>
                        <Col xs="4" lg="4">
                            <CommentArea/>
                        </Col>
                    </Row>
                          
                    
            </Container>  
        </>
    )
}