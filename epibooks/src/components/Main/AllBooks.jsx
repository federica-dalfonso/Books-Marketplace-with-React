import './AllBooks.css'
import { Container, Row, Form } from 'react-bootstrap';
import jsonData from '../../data/fantasy.json';
import SingleBook from './SingleBook';
import { useState } from 'react';


export default function AllBooks ({ img, title, price }) {    
    
    const [inputName, setInputName] = useState("");

    {/*filtro ricerca */}
    const searchResult = jsonData.filter((element) => {
        return element.title.toLowerCase().includes(inputName.toLowerCase())
    });

    return (
        <>
            <Container className='my-4'> 

                {/* componente input text */}
                <Form.Control className= "input-field my-4"
                type="text" value={inputName} id="inputSearch"
                placeholder="Cerca un titolo..."
                onChange={(e) => setInputName(e.target.value)}/>

                <Row>
                    {searchResult.map((book) => (
                        <SingleBook key={book.asin} image={book.img} title={book.title} price={`${book.price} euro`}/>
                    ))}
                </Row>

            </Container>  
        </>
    )
}