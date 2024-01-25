import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <>
      {/* <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Email"
              size="lg"
              name="email"
              onChange={handleInputChange}
            />
            <Input
              label="Password"
              size="lg"
              name="password"
              onChange={handleInputChange}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth type="submit">
              Sign In
            </Button>
          </CardFooter>
        </form>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </Card> */}
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
