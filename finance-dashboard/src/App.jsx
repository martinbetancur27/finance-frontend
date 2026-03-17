import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Videos from "./components/Videos/Videos";
import Feature from "./components/Feature/Feature";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Price from "./components/Price/Price";
import Comment from "./components/Comments/Comment";

function App() {

  return (
    <>  
      <main>

          <Header />

          <Hero />

          <News />

          <Feature idTitle="Real Time Bitcoin (Coming Soon)" title="Real Time Bitcoin (Coming Soon)" srcImage="https://t4.ftcdn.net/jpg/07/38/52/07/360_F_738520764_e3QgRRDaLqpwGTmgLunpkmOAkuobdAHs.jpg" altImage="Bitcoin" />

          <Videos />

          <Feature idTitle="title-not-casino" title="We are not a casino" srcImage="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/12/Neymar-poker-2-e1734821277295.jpeg" altImage="casino" />

          <Price />

          <Form />

          <Comment />

          <Footer />

        </main>
    </>
  )
}

export default App
