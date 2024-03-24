import './AddComment.css'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import { useState } from "react";

export default function AddComment ( {selectedBook, onSubmitComment} ) {

    const [comment, setComment] = useState("");
    const [rate, setRate] = useState("");

    {/*passo i dati da AddComment al parent tramite prop onSubmitComment */}
    function handleSubmit(e) {
        e.preventDefault();

        const postContent = {
            comment: `${comment}`, 
            rate: `${rate}`, 
            elementId: `${selectedBook}`
        };          
        onSubmitComment(postContent);
    };  

    return (
            <Form className="d-flex flex-column align-items-center gap-2 mt-5 p-3 background-color">
                <FloatingLabel controlId="floatingCommento" label="Commenta...">
                    <Form.Control type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}/>
                </FloatingLabel>  
                <FloatingLabel controlId="floatingRate" label="Dai un voto da 1 a 5">
                    <Form.Control type="number" max={5}
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}/>
                </FloatingLabel>  

                <Button 
                    variant="success" 
                    type="submit"
                    onClick={handleSubmit}
                    >
                    Invia
                </Button>   
            </Form>                    
    )
}