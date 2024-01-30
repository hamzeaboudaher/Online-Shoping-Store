import image from "../assets/OLS.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Headers() {
  return (
    <>
      <div className="flex justify-center">
        <nav className="text-xl font-bold text-black border-2 w-96 border-black border-hidden h-9 flex justify-center items-center gap-8">
          <img
            style={{ position: "absolute ", left: "5%" }}
            src={image}
            alt="Logo"
            className="h-12 w-12"
          />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200  ${
                    isActive ? "text-blue-900" : "text-blue-400"
                  } lg:hover:bg-transparent lg:border-0 font-bold w-20 hover:text-orange-700 lg:p-0`
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
              <NavLink
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200  ${
                    isActive ? "text-blue-900" : "text-blue-400"
                  } lg:hover:bg-transparent lg:border-0 font-bold w-20 hover:text-orange-700 lg:p-0`
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
                  `block py-2 pr-4 pl-3 duration-200  ${
                    isActive ? "text-blue-900" : "text-blue-400"
                  } lg:hover:bg-transparent lg:border-0 font-bold w-20 hover:text-orange-700 lg:p-0`
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
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-blue-900" : "text-blue-400"
              } absolute top-8 right-56 lg:hover:bg-transparent lg:border-0 font-bold w-20 hover:text-orange-700 lg:p-0`
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
