import CommentList from "./CommentList.jsx"
import AddComment  from "./AddComment.jsx"
import { useState, useEffect } from "react";

export default function CommentArea ({asin}) {
    
    const [comments, setComments] = useState([]);
    const [dataReceived, setDataReceived] = useState(false);

    function handleCommentSubmit(commentData) {
        setComments([...comments, commentData]);
        setDataReceived(true);
    }

    useEffect(() => {
        if(dataReceived) {
            doPost(comments);
        }
    }, [dataReceived, comments]);

    const APIpost = "https://striveschool-api.herokuapp.com/api/comments/";
    const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0N2NkNTljNDM3MDAwMTkzYzM1ODUiLCJpYXQiOjE3MTA0OTg5NzIsImV4cCI6MTcxMTcwODU3Mn0.JRvrQEzCT1QVJozsMvFYSfH9MjWfTENUIKwLJf0nvww"

    async function doPost(commentData) {
        try {
            const response = await fetch(`${APIpost}`, {
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
    }

    const APIget = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`;

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(APIget);
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.log('Errore durante la richiesta dei commenti:', error);
            }
        };
        fetchComments()
    }, [] );
    
    return (
        <>
        <CommentList asin={asin} comments={comments}/>
        <AddComment asin={asin} onSubmitComment={handleCommentSubmit}/>
        </>
    )
}