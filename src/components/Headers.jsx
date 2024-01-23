import { Link } from "react-router-dom";
import "../App.css";
import myImage from "../assets/react.svg";

function Headers() {
  return (
    <>
      <nav style={{ display: "flex", padding: "20px" }}>
        <ul>
          <li style={{ padding: "20px" }}>
            {" "}
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li style={{ padding: "20px" }}>
            {" "}
            <Link to="/carts">Carts</Link>
          </li>
        </ul>
        <ul>
          <li style={{ padding: "20px" }}>
            {" "}
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <div style={{ position: "relative" }}>
        <img src={myImage} alt="Beschreibung" />
      </div>
    </>
  );
}

export default Headers;
