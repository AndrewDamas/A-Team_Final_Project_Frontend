import React from 'react';
import "../styles/LoginPage.css"

export default function LoginPage() {
  return (
    <div className="LoginPage">
        <form action="">
            <h1>Log In</h1>
            <label htmlFor="username"></label>
            <input type="text" name="username" id="username" placeholder="Enter Username Here" />
            <label htmlFor="password"></label>
            <input type="password" name="password" id="password" placeholder="Enter Password Here" />
            <input type="submit" value="Log In" />
        </form>
    </div>
  )
}
