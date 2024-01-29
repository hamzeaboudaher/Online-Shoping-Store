import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    userName: "",
    password: "",
    value: "",
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(data);
  // };

  return (
    <>
      <div
        style={{
          marginTop: "200px",
          width: "400px",
          height: "400px",
          border: "2px solid grey",
        }}
      >
        <h1>Login</h1>

        <form
          style={{
            marginTop: "100px",
            padding: "10px",
            backgroundColor: "lightblue",
          }}
        >
          <input
            style={{ border: "2px solid grey", padding: "10px" }}
            type="text"
            name="userName"
            placeholder="Username"
          />
          <br />
          <input
            style={{ border: "2px solid grey", padding: "10px" }}
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            style={{
              border: "2px solid grey",
              padding: "10px",
              margin: "10px",
              cursor: "pointer",
            }}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
}
