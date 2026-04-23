import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Videos from "./components/Videos/Videos";
import Feature from "./components/Feature/Feature";
import Form from "./components/Form/Form";
import Price from "./components/Price/Price";
import Comment from "./components/Comments/Comment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";  
import "./components/News/News";
import { Market  }from "./components/Market/Market";

function App() {

  return (
    <>  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/news" element={ <News /> } />
                <Route path="/who-we-are" element={ <Hero /> } />
                <Route path="/real-time" element={ <Feature idTitle="Real Time Bitcoin" title="Real Time Bitcoin (Coming Soon)" img="https://t4.ftcdn.net/jpg/07/38/52/07/360_F_738520764_e3QgRRDaLqpwGTmgLunpkmOAkuobdAHs.jpg" altImg="Bitcoin" /> } />
                <Route path="/videos" element={ <Videos /> } />
                <Route path="/prices" element={ <Price /> } />
                <Route path="/market" element={ <Market /> } />
                <Route path="/contact-us" element={ <Form /> } />
                <Route path="/comments" element={ <Comment /> } />

                <Route path="*" element={ <p>Page Not Found</p> } />
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
