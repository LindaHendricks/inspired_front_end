

function Comments ({note, rating, image_id, user_id, id, creative_id}) {
console.log(note)
    return (
        <>
        <p>Comments</p>
        <p>{note}</p>
        <p>{rating}</p>
        </>
    )

}


export default Comments;