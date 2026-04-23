import { Comment } from "../../types/Comment";

export default function CommentCard( {msg} : {msg: Comment } ) {

  return (
    <ol className="comment-card" key={msg.id}>{msg.description}</ol>
  )
}