import { Link, useLocation } from "react-router-dom";
import cl from "./Nav.module.scss";
const Nav = () => {
  const location = useLocation();
  return (
    <nav className={cl.Nav}>
      <div>
        <h2>KETTIK</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about"> About us</Link>
        </li>
        <li>
          <Link to="/tours"> Tours</Link>
        </li>
      </ul>
      {location.pathname === "/book" ? (
        <Link to="/book" style={{ color: "green" }}>
          Book
        </Link>
      ) : (
        <Link to="/book">Book</Link>
      )}
    </nav>
  );
};

export default Nav;
