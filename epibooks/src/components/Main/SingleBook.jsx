import "./SingleBook.css"
import { Col, Card } from "react-bootstrap"
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";


export default function SingleBook ( {book, onSelect} ) {
    const {theme} = useContext(ThemeContext);

    //destrutturo la prop book
    const { img, title, price, asin} = book;

    //click sul libro x ASIN:
    const handleClick = () => {
        onSelect(asin);
        // console.log(asin);        
    }

    // todo aggiungi bordo rosso al click

    return (
        <>
        <Col sm={12} md={6} lg={6} className='g-4'>
            <Card className={`h-100 cursor-hover border-none ${theme === "dark" ? "back-color-dark" : "back-color-light"}`} onClick={handleClick}>
                <Card.Img src={img} className={`h-100`}/>
                <Card.Body className="p-2 d-flex flex-column align-items-center">
                    <Card.Title className={`fs-6 text-center ellipsis px-2 ${theme === "dark" ? "text-light" : "text-dark"}`}>{title}</Card.Title>
                    <Card.Text className={`fw-lighter py-1 px-2 ${theme === "dark" ? "text-light" : "text-dark"}`}>{price} euro</Card.Text>
                </Card.Body>
            </Card>
        </Col> 
        </>
    )
}