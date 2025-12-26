import { Link } from "react-router-dom";
import logo from "./publications/Arms/inferno1.jpg"

const Posts = () => {
  return (
    <Link to="/posts/postOne">
    <div class="container">
      <h1>
        <div>
          <img src={logo} alt=""/>
          Cachoeira do Inferno
          </div>
      </h1>
    </div>
    </Link>
  );
};

export default Posts;
