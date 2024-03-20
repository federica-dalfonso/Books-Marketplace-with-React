import './SingleComment.css'
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";

export default function SingleComment( {comment} ) {
    const {theme} = useContext(ThemeContext);

    return (
        <div className='d-flex align-items-center my-3'>
            <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="user_logo" />
            <div className='d-flex flex-column ps-2'>
                <span className={`comment-style ${theme === "dark" ? "text-light" : "text-dark"}`}>{`"${comment.comment}"`}</span>
                <span className={`rate-style ${theme === "dark" ? "text-light" : "text-dark"}`}>{`voto: ${comment.rate}`}</span> 
            </div>           
        </div>
    )
}