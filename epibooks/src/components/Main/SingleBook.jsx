import "./SingleBook.css"
import { Col, Card } from "react-bootstrap"
import { useState } from 'react'
import CommentArea from "./CommentArea";

export default function SingleBook ( {book}) {
    const { img, title, price, asin} = book;

    {/*bordo rosso + area commenti*/}
    const [selected, setSelected] = useState(false);
    const commentOpen = () => {
        setSelected(true);
    }

    return (
        <>
        <Col sm={6} md={3} lg={3} className='g-4'>
            <Card className={`h-100 cursor-hover border-color`} onClick={commentOpen}>
                <Card.Img src={img} className={`card-image ${selected ? 'selected-red' : ''}`}/>
                <Card.Body className="p-2 d-flex flex-column align-items-center">
                    <Card.Title className='fs-6 text-center ellipsis'>{title}</Card.Title>
                    <Card.Text className="fw-lighter py-1 px-2">{price}</Card.Text>
                </Card.Body>
                {selected && <CommentArea asin={asin}/>}
            </Card>
        </Col> 
        </>
    )
}