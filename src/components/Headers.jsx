import { NavLink } from "react-router-dom";
import image from "../assets/OLS.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-900" : "text-blue-400"
              } absolute top-8 right-56`
            }
            to="/login"
          >
            <FontAwesomeIcon
              icon={faUser}
              size="xl"
              style={{
                "--fa-primary-color": "#3584e4",
                "--fa-secondary-color": "#3584e4",
              }}
            />
          </NavLink>
        </li>
      </ul>
    </>
  );
}
export default Headers;
