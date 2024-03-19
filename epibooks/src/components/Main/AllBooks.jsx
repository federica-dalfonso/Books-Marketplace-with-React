import { Container, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';


export default function AllBooks ({results}) {        

    return (
        <>
            <Container className='my-4'>                 
                <Row>
                    {/*passo come prop l'ìntero libro, poi lo destrutturo nel componente*/}
                    {results.map((book) => (
                        <SingleBook key={book.asin} book={book}/>
                    ))}
                </Row>

            </Container>  
        </>
    )
}