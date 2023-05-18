import { Link } from "react-router-dom";
import cl from "./Nav.module.scss";
const Nav = () => {
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

      <Link to="/book">Book</Link>
    </nav>
  );
};

export default Nav;
