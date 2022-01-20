import { Outlet, Link } from "react-router-dom";
import "../App.css";
const Nav = () => {
  return (
    <>
      <nav>
        <ul className="items">
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contactUs"
              style={{ color: "white", textDecoration: "none" }}
            >
              contact
            </Link>
          </li>
          <li>
            <Link
              to="/saved"
              style={{ color: "white", textDecoration: "none" }}
            >
              Save List
            </Link>
          </li>
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              log out
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
