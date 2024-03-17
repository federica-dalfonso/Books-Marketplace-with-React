import './AllBooks.css'
import { Container, Row, Form } from 'react-bootstrap';
import jsonData from '../../data/fantasy.json';
import SingleBook from './SingleBook';
import { useState } from 'react';


export default function AllBooks () {    
    
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
                    {/*passo come prop l'ìntero libro, poi lo destrutturo nel componente*/}
                    {searchResult.map((book) => (
                        <SingleBook key={book.asin} book={book}/>
                    ))}
                </Row>

            </Container>  
        </>
    )
}