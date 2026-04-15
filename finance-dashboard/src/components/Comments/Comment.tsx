import { useState } from "react";
import CommentCard from "./CommentCard";
import Button from "../Button/Button";

export default function Comment() {
    const [texto, setTexto] = useState<string>("");
    const esInvalido = texto.length === 0 || texto.length > 200;
    const [feed, setFeed] = useState<string[]>([]);

  return (
    <>
      <h1 className="title">Comments 🤑</h1>
      <div className="app-name">
        <textarea id="my-textarea" name="my-textarea" rows={10} cols={30} placeholder="¿Qué está pensando?"
        value={texto} onChange={(e) => setTexto(e.target.value)}>
        </textarea>
        <br></br>
        <Button id="btn-comment" className="" text="Publicar" onClick={() => setFeed([texto, ...feed])} disabled={esInvalido} />

        <ul>
            {feed.map((twit, index) => (
              <CommentCard key={index} msg={{text: twit}} />
            ))}
        </ul>
      </div>
    </>
  )
}