import "./Navigation.sass";
import Posts from "../Posts/Posts";
import Home from "../Home";
import Gallery from "../Gallery";
import Article from "../Article";
import Editor from "../Editor";
import tableAdmin from "../table_admin/Table_admin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TableAdmin from "../table_admin";

function Navigation() {
  return (
    <Router>
      <header className="bg-lightGrey">
        <nav>
          <Link to="/" className="text-primary">
            {" "}
            Домой
          </Link>
          <Link to="/blog" className="text-primary">
            Блог
          </Link>
          <Link to="/gallery" className="text-primary">
            Галлерея
          </Link>
          <Link to="/editor" className="text-primary">
            Редактор
          </Link>
          <Link to="/tableAdmin" className="text-primary">
            Админ
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Posts />}></Route>
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/editor" element={<Editor />}></Route>
        <Route path="/tableAdmin" element={<TableAdmin />}></Route>
      </Routes>
    </Router>
  );
}

export default Navigation;
