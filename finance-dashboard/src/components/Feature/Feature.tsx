function Feature( {idTitle, title, srcImage, altImage} ) {

  return (
       <section className="text-center">
                <h2 id={idTitle}>{title}</h2>
                <img className="image-complementary" src={srcImage} alt={altImage}></img>
        </section>
  )
}

export default Feature;