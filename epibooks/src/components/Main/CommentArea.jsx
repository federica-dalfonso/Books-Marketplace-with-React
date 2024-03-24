import './CommentArea.css'
import CommentList from './CommentList'
import AddComment from './AddComment'
import { useState, useEffect } from "react";

export default function CommentArea ({ selectedBook }) {

    // fetch commenti da renderizzare in commentList:
    const APIget = `https://striveschool-api.herokuapp.com/api/books/${selectedBook}/comments/`;
   
    const [comments, setComments] = useState([]); 

    useEffect(() => {
        async function getComment() {
            try {
                const response = await fetch(APIget);
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.log('Errore durante la richiesta dei commenti:', error);
            }
        };
        
        //controllo per evitare che la fetch venga eseguita senza dato asin:
        if (selectedBook) {
            getComment()
        };
    }, [selectedBook] );

    //uso lo stato per controllare se i dati sono stati correttamente ricevuti
    const [dataReceived, setDataReceived] = useState(false);

    //funzione (come prop del form dei commenti) che raccoglie i dati e cambia lo stato
    function handleCommentSubmit(commentData) {
        setComments([...comments, commentData]);
        setDataReceived(true);
    }

    //se i dati sono stati correttamente ricevuti faccio la fetch POST per inviarli all'endpoint;
    //ciò accade quando i lo stato di commenti e dati si aggiorna
    useEffect(() => {
        if(dataReceived) {
            const lastComment = comments[comments.length -1];
            doPost(lastComment);
            setDataReceived(false);
        }
    }, [dataReceived, comments]);

    const APIpost = "https://striveschool-api.herokuapp.com/api/comments/";
    const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0N2NkNTljNDM3MDAwMTkzYzM1ODUiLCJpYXQiOjE3MTA0OTg5NzIsImV4cCI6MTcxMTcwODU3Mn0.JRvrQEzCT1QVJozsMvFYSfH9MjWfTENUIKwLJf0nvww"

    async function doPost(commentData) {
        try {
           await fetch(`${APIpost}`, {
                method: "POST", 
                headers: {
                   "Content-Type": "application/json",
                   "Authorization" : key
                }, 
                body: JSON.stringify(commentData)
            });
        } catch (error) {
            console.log("errore nella tua richiesta")
        }
    };

    return (
        <div className='background-comment comment-area-height comment-area-fixed'>
            <CommentList className="mx-2" commentsToShow={comments} asinBook={selectedBook}/>
            <AddComment asinBook={selectedBook} onSubmitComment={handleCommentSubmit}/>        
        </div>
    )
}