import "./App.css";

import { Link } from "react-router-dom";

function Nav() {

    const navStyle = {
        color: 'white',
    }

  return (
    <nav>
      <h3>Social Network Page</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li >Posts</li>
        </Link>
        <Link style={navStyle} to="/create">
          <li >Create</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
