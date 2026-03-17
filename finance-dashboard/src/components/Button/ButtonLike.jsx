import { useState } from "react";

function ButtonLike() {
    const [count, setCount] = useState(0);
  return (
     <button id="btn-like" className="text-center" type="button" onClick={() => setCount(count + 1)}>👍 {`${count}`}</button> 
  )
}

export default ButtonLike;