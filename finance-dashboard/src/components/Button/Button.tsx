type ButtonProps = {
 id?: string;
 className?: string;
 text?: string;
 onClick?: React.MouseEventHandler<HTMLButtonElement>;
 disabled?: boolean;
}

export default function Button( { id, className, text, onClick, disabled = false } : ButtonProps ) {

  return (
    <button id={id} className={className} type="button" onClick={onClick} disabled={disabled}>{text}</button>
  )
}