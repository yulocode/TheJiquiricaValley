import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import Posts from "./post";
import PostOne from "./publications/post1";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="top">
        <Link to="/login">LOGIN</Link> | 
        <Link to="/">HOME</Link> |
        <Link to="/posts">POSTS</Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="page">
              <h1>JORNAL</h1>
              <p>Welcome to the homepage!</p>
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/postOne" element={<PostOne />} />
      </Routes>
    </Router>
  );
}

export default App;
