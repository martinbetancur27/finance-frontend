import { Link } from "react-router-dom";

function Nav() {

  return (
       <nav id="nav">
        <Link to="/" className="logo">Finance Dashboard</Link>
            <ul>
                <li><Link to="/who-we-are">Who we are</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/real-time">Real time</Link></li>
                <li><Link to="/videos">Videos</Link></li>
                <li><Link to="/prices">Prices</Link></li>
                <li><Link to="/contact-us">Contact us</Link></li>
            </ul>
        </nav>
  )
}

export default Nav;