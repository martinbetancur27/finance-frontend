import Feature from "./Feature";
import Nav from "../Header/Nav";

export function Features() {
    return (
        <>
            <Nav />
            <h2 className="title text-center">Features</h2>
            <div id="features">
                <Feature idTitle="Buy bitcoin" title="Buy Bitcoin" img="https://t4.ftcdn.net/jpg/07/38/52/07/360_F_738520764_e3QgRRDaLqpwGTmgLunpkmOAkuobdAHs.jpg" altImg="Bitcoin" />     
                <Feature idTitle="Don't miss the news" title="Don't miss the news" img="https://s3.envato.com/files/2363dd4c-0a83-4be8-82fc-998212e8ac19/inline_image_preview.jpg" altImg="News" />
                <Feature idTitle="Get inspired by videos" title="Get inspired by videos" img="https://tse3.mm.bing.net/th/id/OIP.aFEQs3CkJTxfqGcqL7MF0gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" altImg="Video image" />
            </div>
        </>
    );
}