import './App.css';
import Posts from './Posts/Posts';
import Gallery from './Gallery';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/blog" element={<Posts/>}>
          </Route>
          <Route path="/gallery" element={<Gallery/>}>
          </Route>
          {/* <Route path="/gallery">
            <Gallery />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
