import { Link } from "react-router-dom";
import "./Category.css";

export const Category = ({ src, title, route }) => {
  return (
    <Link to={route} className="Category__Item">
      <button>
        <img src={src} alt="home" />
      </button>
      <p>{title}</p>
    </Link>
  );
};
