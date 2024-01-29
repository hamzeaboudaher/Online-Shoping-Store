import { NavLink } from "react-router-dom";
import image from "../assets/OLS.svg";
import "../App.css";

function Headers() {
  return (
    <>
      <div className="flex justify-center intro">
        <div style={{ marginTop: "50px" }} className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="text-xl font-bold text-black border-2 w-96 border-black border-hidden h-9 flex justify-center items-center gap-8">
          <ul>
            <img
              style={{ position: "absolute ", left: "5%", marginTop: "20px" }}
              src={image}
              alt="Logo"
              className="h-16 w-15"
            />

            <li>
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
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-blue-900" : "text-blue-400"}`
                }
                to="/carts"
              >
                Carts
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-blue-900" : "text-blue-400"}`
                }
                to="/products"
              >
                products
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-blue-900" : "text-blue-400"}`
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </>
  );
}
export default Headers;
