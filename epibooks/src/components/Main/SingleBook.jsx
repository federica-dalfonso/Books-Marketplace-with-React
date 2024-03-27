import "./SingleBook.css"
import { Col, Card, Button } from "react-bootstrap"
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";
import { SlEyeglass } from "react-icons/sl";

import { Link } from "react-router-dom";


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
        <Col sm={12} md={6} lg={3} className='g-2'>
            <Card className={`custom-card cursor-hover ${theme === "dark" ? "back-color-dark" : "back-color-light"}`}>
                <Card.Img variant="top" src={img} className="img-fluid" />
                <Card.Body>
                    <Card.Subtitle className="text-uppercase subtitle-style py-2">fantasy</Card.Subtitle>
                    <Card.Title className={`ellipsis size-title text-uppercase mb-4 ${theme === "dark" ? "text-light" : "text-dark"}`}>{title}</Card.Title>                  
                    <Card.Subtitle className={`mb-3 fw-lighter text-uppercase size-price ${theme === "dark" ? "text-light" : "text-dark"}`}>{`${price} euro`}</Card.Subtitle>                   
                    <Link href="#" className="link-style">DETTAGLI <SlEyeglass /></Link>                                          
                </Card.Body>
            </Card>
        </Col> 
        </>
    )
}