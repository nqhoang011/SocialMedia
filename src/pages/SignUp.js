import React from "react";
import "../pages/Login.css";

const SignUp = () => {
    return (
        <div className="container">
            <div className="img-container">
                <img className="logo" src="http://localhost:3000/img/icon-bg1.png"></img>
            </div>
            <div className="container-form">
                <form>
                    <h1>Sign Up</h1>
                    <p>Please sign in to continue.</p>
                    <div className="inputBox">
                        <input type="fullName"
                            name="fullName"
                            id="fullName"
                            // onChange={handleChange}
                            placeholder="Full Name" />
                    </div>
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
                    <div className="inputBox">
                        <input type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            // onChange={handleChange}
                            placeholder="Confirm Password" />
                    </div>
                    <div className="divBtn">
                        {/* <small className="forgotPassword">Forgot Password?</small> */}
                        <button type="submit" className="loginBtn">SignUp</button>
                    </div>
                </form>
                <div className="dont">
                    <p>Already have an accout? Sign in</p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;