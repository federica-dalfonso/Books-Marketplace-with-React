import "./SingleBook.css"
import { Col, Card } from "react-bootstrap"
import { useState } from 'react'

export default function SingleBook ( {image, title, price }) {

    const [selected, setSelected] = useState(false);
    const coverClick = () => {
        setSelected(true);
    }

    return (
        <>
        <Col sm={6} md={3} lg={3} className='g-4'>
            <Card className={`h-100 cursor-hover border-color`}>
                <Card.Img src={image} className={`card-image ${selected ? 'selected-red' : ''}`} onClick={coverClick}/>
                <Card.Body className="p-2 d-flex flex-column align-items-center">
                    <Card.Title className='fs-6 text-center ellipsis'>{title}</Card.Title>
                    <Card.Text className="fw-lighter py-1 px-2">{price}</Card.Text>
                </Card.Body>
            </Card>
        </Col> 
        </>
    )
}