import './AllBooks.css'
import { Container, Row, Col, Card} from 'react-bootstrap';
import jsonData from './fantasy.json';

export default function AllBooks ({ img, title }) { 

    return (
        <>
            <Container className='my-4'>
                <Row>
                    {jsonData.map((book) => {
                        return (
                           <Col sm={6} md={3} lg={3} className='g-4'>
                            <Card className='h-100'>
                                <Card.Img src={book.img} className='card-image'/>
                                <Card.Body>
                                    <Card.Title className='fs-6 text-center ellipsis'>{book.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>  
                        )
                         
                    })}
                </Row>
            </Container>  
        </>
    )
}