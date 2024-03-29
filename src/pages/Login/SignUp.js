import React, { useState } from "react";
import "../Login/Login.css";
import iconBg1 from "../../img/icon-bg1.png"
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from "../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleChangeConfirm = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleSubmit = async (e) => {
        // console.log('clicked');
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Password and Confirm Password must be the same.');
            return;
        }
        else {
            try {
                let res = await registerApi(userName, email, password);
                console.log(res);
                if (res !== null) {
                    toast.success('Register successfull!');
                    setTimeout(() => {
                        console.log('ok');
                        navigate('/');
                    }, 2000);
                }
                else {
                    toast.error('Chua hieu lam');
                }
            } catch (error) {
                toast.error("Error:", error);
            }
        }
    }
    return (
        <div className="container">
            <ToastContainer autoClose={2000}></ToastContainer>
            <div className="img-container">
                <img className="icon-bg" src={iconBg1}></img>
            </div>
            <div className="container-form">
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <p>Please sign in to continue.</p>
                    <div className="inputBox">
                        <input type="fullName"
                            // name="fullName"
                            id="fullName"
                            value={userName}
                            onChange={handleChangeUserName}
                            placeholder="Your Name"
                            required />
                    </div>
                    <div className="inputBox">
                        <input type="email"
                            // name="email"
                            id="email"
                            value={email}
                            onChange={handleChangeEmail}
                            placeholder="Email"
                            required />
                    </div>
                    <div className="inputBox">
                        <input type="password"
                            // name="password"
                            id="password"
                            value={password}
                            onChange={handleChangePassword}
                            placeholder="Password"
                            required />
                    </div>
                    <div className="inputBox">
                        <input type="password"
                            // name="confirmPassword"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChangeConfirm}
                            placeholder="Confirm Password"
                            required />
                    </div>
                    <div className="divBtn">
                        {/* <small className="forgotPassword">Forgot Password?</small> */}
                        <button type="submit" className="loginBtn">SignUp</button>
                    </div>
                </form>
                <div className="dont">
                    <p>Already have an accout? <Link to='/'><span></span>Log In</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;