import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import './App.css'

function App() {
  return (
    <Router>
      <div className="top">
        <Link to="/login">LOGIN                                     </Link>
        <Link to="/">HOME</Link>
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
      </Routes>
    </Router>
  )
}

export default App
