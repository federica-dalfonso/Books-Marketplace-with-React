import './SingleComment.css'

export default function SingleComment( {comment} ) {

    return (
        <div className='d-flex align-items-center my-3'>
            <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="user_logo" />
            <div className='d-flex flex-column ps-2'>
                <span className='comment-style'>{`"${comment.comment}"`}</span>
                <span className='rate-style'>{`voto: ${comment.rate}`}</span> 
            </div>           
        </div>
    )
}