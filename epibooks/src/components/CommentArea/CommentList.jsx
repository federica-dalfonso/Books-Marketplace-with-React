import SingleComment from './SingleComment.jsx';

export default function CommentList ({ commentToShow }) {

    return (
        commentToShow.map((comment, index) => {
           return <SingleComment key={index} userComment={comment}/>            
        })
    )
}