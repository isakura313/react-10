import './Navigation.sass';
import Posts from "../Posts/Posts";
import Home from '../Home';
import Gallery from "../Gallery";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/home"> Домой</Link>
          <Link to="/blog">Блог</Link>
          <Link to="/gallery">Галлерея</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<Posts />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </Router>
  );
}

export default Navigation;