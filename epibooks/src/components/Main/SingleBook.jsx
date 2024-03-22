import "./SingleBook.css"
import { Col, Card } from "react-bootstrap"
import { useState } from 'react'
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";


export default function SingleBook ( {book}) {
    const {theme} = useContext(ThemeContext);

    {/*destrutturo la prop book*/}
    const { img, title, price, asin} = book;

    {/*bordo rosso + area commenti*/}
    const [selected, setSelected] = useState(false);
    const borderRed = () => {
        setSelected(true);
    }
    //qui va modificato il valore di default di selected con l'asin del libro, da spostare in Lasterelease e passare a SingleBook + CommentArea

    return (
        <>
        <Col sm={12} md={6} lg={6} className='g-4'>
            <Card className={`h-100 cursor-hover border-none ${theme === "dark" ? "back-color-dark" : "back-color-light"}`} onClick={borderRed}>
                <Card.Img src={img} className={`card-image ${selected ? 'selected-red' : ''}`}/>
                <Card.Body className="p-2 d-flex flex-column align-items-center">
                    <Card.Title className={`fs-6 text-center ellipsis px-2 ${theme === "dark" ? "text-light" : "text-dark"}`}>{title}</Card.Title>
                    <Card.Text className={`fw-lighter py-1 px-2 ${theme === "dark" ? "text-light" : "text-dark"}`}>{price} euro</Card.Text>
                </Card.Body>
            </Card>
        </Col> 
        </>
    )
}