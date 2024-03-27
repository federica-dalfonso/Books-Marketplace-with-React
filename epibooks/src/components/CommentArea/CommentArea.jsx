import CommentList from './CommentList.jsx';
import AddComment from './AddComment.jsx';
import { useState, useEffect } from 'react';

export default function CommentArea ({ asin }) {

    //gestione commenti:
    const [comments, setComments] = useState([]);

    //autorizzazione 
    const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0N2NkNTljNDM3MDAwMTkzYzM1ODUiLCJpYXQiOjE3MTE1Njk0MDIsImV4cCI6MTcxMjc3OTAwMn0.9Zx0zJl5P8pMv6knkTcWL1Ijace_4y3zC7SQixMzx9o";
    
    //endpoint GET: 
    const ENDPOINT_get = `https://striveschool-api.herokuapp.com/api/comments/${asin}`

    useEffect(() => {
        const getComments = async () => {
            try {
            const response = await fetch(ENDPOINT_get, {
                headers: {
                    Authorization: key,
                },
                }
            )
            if (response.ok) {
                const comments = await response.json();
                setComments(comments);
                console.log(comments)
            } else {
                console.log('error')
            }
            } catch (error) {
            console.log(error)
            }
        }
        if (asin) {
            getComments();
        }
    }, [asin]);   

    return (
        <>
            <CommentList commentToShow={comments}/>
            <AddComment/>
        </>
        
    )
}