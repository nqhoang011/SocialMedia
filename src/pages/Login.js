import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import "../pages/Login.css";
import iconBg1 from "../img/icon-bg1.png"

const Login = () => {
    return (
        <div className="container">
            <div className="img-container">
                <img className="icon-bg" src={iconBg1}></img>
            </div>
            <div className="container-form">
                <form /*onSubmit={handleLogin}*/>
                    <h1>Log In</h1>
                    <p>Please sign in to continue.</p>
                    <div className="inputBox">
                        <input type="email"
                            name="email"
                            id="email"
                            // onChange={handleChange}
                            placeholder="Email" />
                    </div>

                    <div className="inputBox">
                        <input type="password"
                            name="password"
                            id="password"
                            // onChange={handleChange}
                            placeholder="Password" />
                    </div>

                    <div className="divBtn">
                        <button type="submit" className="loginBtn">LogIn</button>
                    </div>
                </form>
                <div className="dont">
                    <small className="forgotPassword">Forgot Password?</small>
                    <p>Don't have any account? Sign up</p>
                </div>
            </div>
        </div>
    )
}

export default Login;