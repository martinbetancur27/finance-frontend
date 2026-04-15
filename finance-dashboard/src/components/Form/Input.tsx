type InputProps = {
  htmlFor: string;
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

function Input({ htmlFor, label, type, id, name, placeholder } : InputProps) {

  return (
        <>
        <label htmlFor={htmlFor}>
            {label}
        </label><br></br>
        <input type={type} id={id} name={name} placeholder={placeholder}></input><br></br>
        </>
  )
}

export default Input;