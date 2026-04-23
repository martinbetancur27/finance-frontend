import Nav from "../Header/Nav";
import VideoCard from "./VideoCard";

function Videos() {

  return (
    <>
        <Nav /> 
        <section id="videos">
            <h2 className="title text-center">Videos</h2>
            <div className="inline">
                <VideoCard link="https://www.youtube.com/embed/Ai4iNmW2A1c?si=8FeTdexBSrpMi0so" title="Video 1" />
            </div>
            <div className="inline">
                <VideoCard link="https://www.youtube.com/embed/W73FZvTqBrs?si=7noKwjvZea3EY9oM" title="Video 2" />
            </div>
        </section>
    </>
  )
}

export default Videos;