import { Link } from "react-router-dom";
import logo from "./publications/Arms/inferno1.jpg"

const Posts = () => {
  return (
    
    <div class="container">
      <h1>
        <Link to="/posts/postOne">
        <div>
          <img src={logo} alt=""/>
          Cachoeira do Inferno
          </div>
          </Link>
      </h1>
    </div>
  );
};

export default Posts;
