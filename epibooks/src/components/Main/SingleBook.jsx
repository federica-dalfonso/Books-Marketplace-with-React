import "./SingleBook.css"
import { Col, Card } from "react-bootstrap"
import { useState } from 'react'
import CommentArea from "./CommentArea";
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";


export default function SingleBook ( {book}) {
    const {theme} = useContext(ThemeContext);

    {/*destrutturo la prop book*/}
    const { img, title, price, asin} = book;

    {/*bordo rosso + area commenti*/}
    const [selected, setSelected] = useState(false);
    const commentOpen = () => {
        setSelected(true);
    }

    return (
        <>
        <Col sm={6} md={3} lg={3} className='g-4'>
            <Card className={`h-100 cursor-hover border-color ${theme === "dark" ? "back-color-dark" : "back-color-light"}`} onClick={commentOpen}>
                <Card.Img src={img} className={`card-image ${selected ? 'selected-red' : ''}`}/>
                <Card.Body className="p-2 d-flex flex-column align-items-center">
                    <Card.Title className={`fs-6 text-center ellipsis ${theme === "dark" ? "text-light" : "text-dark"}`}>{title}</Card.Title>
                    <Card.Text className={`fw-lighter py-1 px-2 ${theme === "dark" ? "text-light" : "text-dark"}`}>{price}</Card.Text>
                    {/*se clicco sulla card, si apre l'area commenti*/}
                    {selected && <CommentArea asin={asin}/>}
                </Card.Body>
            </Card>
        </Col> 
        </>
    )
}