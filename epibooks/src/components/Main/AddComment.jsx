import { Form, FloatingLabel, Button } from "react-bootstrap";
import "./AddComment.css"
import { useState, useEffect } from "react";


export default function AddComment ({ asin, onSubmitComment }) {

    const [comment, setComment] = useState("");
    const [rate, setRate] = useState("");

    {/*passo i dati da AddComment al parent tramite prop onSubmitComment */}
    function handleSubmit(e) {
        e.preventDefault();

        const postContent = {
            comment: `${comment}`, 
            rate: `${rate}`, 
            elementId: `${asin}`
        };          
        onSubmitComment(postContent);
    };  

    return (
        <div className="mx-2 my-3">
            <Form className="d-flex flex-column align-items-center gap-2">
                <FloatingLabel controlId="floatingCommento" label="Commento">
                    <Form.Control type="text" placeholder="Lascia un commento..." 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)}/>
                </FloatingLabel>  
                <FloatingLabel controlId="floatingRate" label="Rate">
                    <Form.Control type="number" max={5} placeholder="Dai un voto da 1 a 5" 
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
        </div>            

    )
}