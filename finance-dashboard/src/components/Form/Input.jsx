function Input({ htmlFor, label, type, id, name, placeholder }) {

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