import { Button, Collapse } from "react-bootstrap"
import { useState } from "react";
import "./CommentList.css"
import SingleComment from "./SingleComment";

export default function CommentList ({ comments }) {

    const [open, setOpen] = useState(false);

    {/*controllo se comments contiene elementi o no*/}
    const hasComments = comments && comments.length > 0;
    
    return (
        <div className="d-flex flex-column align-items-center">
            <Button
                variant="link"
                className="commentOpen "
                onClick={() => {
                    setOpen(!open)
                }}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
            Leggi le recensioni
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    {/*se ci sono commenti renderizzo, sennò messaggio di avviso*/}
                    {hasComments ? comments.map((res, index) => {
                       return <SingleComment key={index} comment={res}/>
                    }) : <p style={{fontSize: "11pt", fontWeight:"lighter"}}>Ancora nessun commento!</p>}
                </div>
            </Collapse>
        </div>

    )
}