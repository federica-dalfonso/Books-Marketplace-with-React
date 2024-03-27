import "./DetailForm.css"
import { Container, Row, Col} from 'react-bootstrap';
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";

export default function DetailForm ({ book, clickToShowComment}) {

    const { title, img, price, category } = book;

    //tema:
    const {theme} = useContext(ThemeContext);
    // tema font:
    const themeText = theme === "dark" ? "text-light" : "text-dark";

    return (
        <Container className="m-4">
        <Row>
            <Col xs={12} md={3} lg={5} className="d-flex align-content-center justify-content-center">
                <img className="image-details" src={img} alt="copertina_libro"/>
            </Col>
            <Col xs={12} md={9} lg={7}>
                <div>
                    <span className="text-uppercase subtitle-style py-2">{category}</span>
                    <h2 className={`size-title text-uppercase mb-4 ${themeText}`}>{title}</h2>                         
                    <p className={`${themeText}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur ab qui non voluptas laudantium commodi eligendi 
                        inventore esse incidunt et, saepe neque, nam vel, 
                        sapiente rem harum voluptatibus? In, facilis.
                    </p>
                    <span className={`mb-3 fw-lighter text-uppercase size-price ${themeText}`}>{`${price} euro`}</span>
                </div>
                <button onClick={clickToShowComment}>Vedi i commenti</button>
            </Col>
        </Row>
    </Container>   
    )
}