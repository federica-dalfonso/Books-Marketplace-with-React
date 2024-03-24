import './CommentList.css'
import SingleComment from './SingleComment';

export default function CommentList ( {commentsToShow, asinBook} ) {
    return (
        <>
            {commentsToShow.map((singleComment, index) => {
                    return <SingleComment key={index} comm={singleComment} asinBook={asinBook}/>
                }
                
            )}
        </>
    )
}