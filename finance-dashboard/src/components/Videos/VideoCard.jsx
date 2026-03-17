function VideoCard({ link, title, width = 560, height = 315 }) {

  return (
        <iframe width={width} height={height} src={link} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  )
}

export default VideoCard;