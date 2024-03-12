import './AllBooks.css'
import { Container, Row } from 'react-bootstrap';
import jsonData from '../../data/fantasy.json';
import SingleBook from './SingleBook';


export default function AllBooks ({ img, title, price }) {       
    return (
        <>
            <Container className='my-4'>                        
                <Row>
                    {jsonData.map((book) => {
                       return (
                       <SingleBook key= {book.asin} image= {book.img} title= {book.title} price= {`${book.price} euro`}/>
                       )})}
                </Row>
            </Container>  
        </>
    )
}