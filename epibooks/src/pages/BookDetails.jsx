import './BookDetails.css';
import { Container, Row, Col} from 'react-bootstrap';


// todo recupera il parametro ASIN dall'URL impostato in BrowserRouter 
// todo e carica i dettagli e le recesioni del libro selezionato
// ! devo importare il JSON e filtrare con l'ASIN il libro corretto!!
// todo importare react-icons per le icone

export default function BookDetails () {

    // todo ricorda di renderizzare anche la navbar e il footer
    return (
        <Container>
            <Row>
                <Col xs={12} md={3} lg={5}>book cover</Col>
                <Col xs={12} md={9} lg={7}>
                    <div>
                        <span>genre</span>
                        <h2>Book Title</h2>                         
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Pariatur ab qui non voluptas laudantium commodi eligendi 
                            inventore esse incidunt et, saepe neque, nam vel, 
                            sapiente rem harum voluptatibus? In, facilis.
                        </p>
                        <span>price</span>
                    </div>
                        <span>icona carrello</span>
                        <span>icona preferiti</span>
                    <div>

                    </div>
                </Col>
            </Row>
            <Row>
                qui inserire il componente CommentArea, che poi andrà stilizzato nel suo css apposito
                e al quale va passato l'ASIN per la fetch dei commenti!
            </Row>
        </Container>     
    )
}