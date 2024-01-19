import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import "../pages/Login.css";

const Login = () => {
    return (
        <div className="container">
            <div className="container-form">
                <form /*onSubmit={handleLogin}*/>
                    <h1>Log in</h1>
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
                        <small className="forgotPassword">Forgot Password?</small>
                        <button type="submit" className="loginBtn">Login</button>
                    </div>
                </form>
                <div className="dont">
                    <p>Don't have an account? Sign up</p>
                </div>
            </div>
        </div>
    )
}

export default Login;