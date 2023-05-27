import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";
import "../styles/Login.css";
import DisplayFlight from "./DisplayFlight";
function Login({ onLoginSuccess, flightPrice }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSwitchAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    console.log(`Logged in as ${username}`);
    const userData = JSON.parse(localStorage.getItem(username));
    if (userData && userData.password === password) {
      console.log(`Logged in as ${username}`);
      onLoginSuccess(userData.flightPrice);

      setLoggedIn(true);
      //   navigate("/payment");
    } else {
      alert("Invalid username or password");
    }
  };
  console.log(flightPrice, "=flightprice");
  const handleSignup = (event) => {
    event.preventDefault();

    localStorage.setItem(
      username,
      JSON.stringify({ username, password, email })
    );
    alert(`Signed up as ${username}`);
  };

  if (loggedIn) {
    return <Payment flightPrice={flightPrice} />;
  }

  return (
    <div className="loginContainer">
      <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
      <form onSubmit={isLogin ? handleLogin : handleSignup}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {!isLogin && (
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        )}
        <button className="login-btn" type="submit">
          {isLogin ? "Log In" : "Sign Up"}
        </button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          className="signin-btn"
          type="button"
          onClick={handleSwitchAuthMode}
        >
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </p>

      {/* {loggedIn && <Payment />} */}
    </div>
  );
}

export default Login;
