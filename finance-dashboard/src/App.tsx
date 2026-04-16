import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import News from "./components/News/News.js";
import Videos from "./components/Videos/Videos.js";
import Feature from "./components/Feature/Feature.js";
import Form from "./components/Form/Form.js";
import Footer from "./components/Footer/Footer.js";
import Price from "./components/Price/Price.js";
import Comment from "./components/Comments/Comment.js";

function App() {

  return (
    <>  
      <main>

          <Header />

          <Hero />

          <News />

          <Feature idTitle="Real Time Bitcoin (Coming Soon)" title="Real Time Bitcoin (Coming Soon)" img="https://t4.ftcdn.net/jpg/07/38/52/07/360_F_738520764_e3QgRRDaLqpwGTmgLunpkmOAkuobdAHs.jpg" altImg="Bitcoin" />

          <Videos />

          <Feature idTitle="title-not-casino" title="We are not a casino" img="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/12/Neymar-poker-2-e1734821277295.jpeg" altImg="casino" />

          <Price />

          <Form />

          <Comment />

          <Footer />

        </main>
    </>
  )
}

export default App
