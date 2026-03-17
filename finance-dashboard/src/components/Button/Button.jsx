export default function Button( { id, className, text, onClick, disabled = false } ) {

  return (
    <button id={id} className={className} type="button" onClick={onClick} disabled={disabled}>{text}</button>
  )
}