import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      console.log("user");
      // window.location("https://www.google.com/");
    }
  }, []);

  async function login() {
    console.warn(username, password);
    let item = { userName: username, userPass: password };
    let result = await fetch(
      "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login",
      {
        method: "POST",
        headers: {
          "x-api-key": "wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    console.log("user");
    // window.location("https://www.google.com/");
  }

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
