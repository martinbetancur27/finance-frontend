function Videos() {

  return (
        <section id="videos">
            <h2 className="title text-center">Videos</h2>
            <div className="inline">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ai4iNmW2A1c?si=8FeTdexBSrpMi0so" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="inline">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/W73FZvTqBrs?si=7noKwjvZea3EY9oM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
  )
}

export default Videos;