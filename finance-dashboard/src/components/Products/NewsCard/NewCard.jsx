function NewCard({ link, description}) {

  return (
        <article className="text-center">
            <h3>
                <a href={link} target="_blank">
                    <i>
                        {description}
                    </i>
                </a>
            </h3>
        </article>
  )
}

export default NewCard;