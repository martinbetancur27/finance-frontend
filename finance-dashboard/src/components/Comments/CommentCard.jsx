export default function CommentCard( {msg} ) {

  return (
    <ol className="comment-card" key={msg.text}>{msg.text}</ol>
  )
}