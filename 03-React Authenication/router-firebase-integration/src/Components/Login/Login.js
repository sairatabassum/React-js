import React from "react";

const Login = () => {
  return (
    <div>
      <h3>Please Login</h3>
      <div style={{ margin: "20px" }}>
        <button>Google Sign In</button>
      </div>
      <form action="">
        <input type="email" placeholder="Enter email" />
        <br />
        <input type="password" name="" id="" placeholder="Enter password" />
        <br />
        <input type="submit" value="Log in" />{" "}
      </form>
    </div>
  );
};

export default Login;
