import { Link, NavLink } from "react-router-dom";

function Headers() {
  return (
    <>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-blue-900" : "text-blue-400"}`
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link to="/carts">Carts</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Headers;
