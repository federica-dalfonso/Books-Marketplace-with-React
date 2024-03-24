import './SingleComment.css'
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";

export default function SingleComment( {comm} ) {
    const { comment, rate } = comm;

    //controllo del tema dark-light:
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className='d-flex align-items-center my-2'>
            <img className='profile-img m-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&usqp=CAU" alt="profile_img" />
            <div className='d-flex flex-column comment-style ms-2'>
                <span className={theme === "dark" ? "span-light" : "span-dark"}>{comment}</span>
                <span className={theme === "dark" ? "span-light" : "span-dark"}>{`voto: ${rate}`}</span>
            </div>
            <button className='btn btn-outline bg-danger text-white ms-5'>Delete comment</button>            
        </div>
    )
}