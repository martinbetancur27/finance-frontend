import NewCard from "./NewCard";
import Nav from "../Header/Nav";

function News() {

  return (
    <>
      <Nav />


        <section id="news">
            <h2 className="title text-center">News</h2>
            <NewCard link="https://finance.yahoo.com/news/the-dark-side-of-ai-wall-street-weighs-recent-stock-sell-off-over-disruption-fears-160054016.html" description="'The dark side of AI': Wall Street weighs recent stock sell-off over disruption fears" />
            <NewCard link="https://finance.yahoo.com/news/warner-bros-weighs-reopening-sale-195058251.html" description="Warner Bros weighs reopening sale talks with Paramount, Bloomberg News reports" />
            <NewCard link="https://finance.yahoo.com/news/trump-sanctions-chief-poised-leave-182755089.html" description="Trump Sanctions Chief Poised to Leave After Bessent Tension" />
        </section>
      </>
  )
}

export default News;