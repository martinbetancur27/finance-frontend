import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Videos from "./components/Videos/Videos";
import Form from "./components/Form/Form";
import Price from "./components/Price/Price";
import Comment from "./components/Comments/Comment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";  
import "./components/News/News";
import { Market  }from "./components/Market/Market";
import { Features } from "./components/Feature/Features";

function App() {

  return (
    <>  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/features" element={ <Features /> } />
                <Route path="/news" element={ <News /> } />
                <Route path="/who-we-are" element={ <Hero /> } />
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
