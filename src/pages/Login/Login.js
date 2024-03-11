import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../Login/Login.css";
import iconBg1 from "../../img/icon-bg1.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/UserSlice";
import { toast } from "react-toastify";
import { login } from "../../actions/authAction";
import { loginApi } from "../../utils/api";

const Login = () => {
    const [data, setData] = useState({
        email: undefined,
        password: undefined
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const handleLoginApi = async () => {
            const res = await loginApi();
            console.log(res)
            return res
        }
        handleLoginApi()
        if (!handleLoginApi) {
            handleLoginApi()
        }
        dispatch(loginUser())
    }, []);

    // const handleLogin = async () => {
    //     try {
    //         let response = await loginUser();
    //         console.log(response.data.body);
    //         navigate('/home');
    //     }
    //     catch (error) {
    //         toast.error('error');
    //     }
    // }

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
                            value={data.email}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    email: e.target.value
                                })
                            }}
                            placeholder="Email"
                            required />
                    </div>

                    <div className="inputBox">
                        <input type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    password: e.target.value
                                })
                            }}
                            placeholder="Password"
                            required />
                    </div>

                    <div className="divBtn">
                        <button type="submit"
                            className="loginBtn"
                        >LogIn</button>
                    </div>
                </form>
                <div className="dont">
                    <small className="forgotPassword">Forgot Password?</small>
                    <p>Don't have any account? <Link to="/signup"><span>Sign up</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;