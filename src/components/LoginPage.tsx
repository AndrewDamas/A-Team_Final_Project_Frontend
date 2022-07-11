import React from 'react';
import "../styles/LoginPage.css"
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="LoginPage">
        <form action="">
            <h1 className="LoginHeader">Log In</h1>
            <label htmlFor="username"></label>
            <input type="text" name="username" id="username" placeholder="Enter Username Here" />
            <label htmlFor="password"></label>
            <input type="password" name="password" id="password" placeholder="Enter Password Here" />
            <input className="loginSubmit" type="submit" value="Log In" onClick={() => {navigate("/welcome")}} />
            <a className="createAccount" href="">Create Account</a>
        </form>
    </div>
  )
}
