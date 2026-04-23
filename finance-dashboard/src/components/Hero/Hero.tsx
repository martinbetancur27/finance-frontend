import Nav from "../Header/Nav";

function Hero() {

  return (
        <>
        <section id="who-we-are">
            <h2 className="title text-center">Who We Are:</h2>
            <article>
                <p id="who-we-are-text" className="text-center">The information actually around the finance is dark for the ordinary people, 
                    but <b>with us</b> there are a change in the GAME. Why:
                </p>
                <ol>
                    <li>Free</li>
                    <li>Decentralized</li>
                    <li>No sponsorships</li>
                    <li>Make it simple, make it easy</li>
                    <li>News</li>
                    <li>Live Market</li>
                </ol>
            </article>

            <div className="text-center">
                <img className="image-complementary" src="https://images.hdqwalls.com/wallpapers/neymar-jr-fifa-world-cup-qatar-03.jpg" alt="finances"></img>
            </div>
        </section>
        </>
  )
}

export default Hero;