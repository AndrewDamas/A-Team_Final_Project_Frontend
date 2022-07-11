import React from 'react';
import "../styles/LoginPage.css"

export default function LoginPage() {
  return (
    <div className="LoginPage">
        <form action="">
            <h1 className="LoginHeader">Log In</h1>
            <label htmlFor="username"></label>
            <input type="text" name="username" id="username" placeholder="Enter Username Here" />
            <label htmlFor="password"></label>
            <input type="password" name="password" id="password" placeholder="Enter Password Here" />
<<<<<<< Updated upstream
            <input type="submit" value="Log In" />
=======
<<<<<<< Updated upstream
            <input className="loginSubmit" type="submit" value="Log In" />
            <a className="createAccount" href="">Create Account</a>
=======
            <input type="submit" value="Log In" onClick={() => {navigate("/welcome")}}/>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        </form>
    </div>
  )
}
