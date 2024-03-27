export default function SingleComment ({userComment}) {

    const { comment, rate } = userComment;

    return (
        <>
        <p>{comment}</p>
        <p>{rate}</p>        
        </>
    )

}