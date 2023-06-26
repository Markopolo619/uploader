import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form onSubmit={Login}>
          <h3>Login Here</h3>

          <label for="usernaem">Username</label>
          <input
            type="text"
            placeholder="Email or Phone"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Log In</button>
          <button>
            <Link className="signup_button" to="/">
              Sign Up
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
