import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8082/api/admin/user/login", formData)
        console.log(response);
        if (response.data.success) {
            toast.success(response.data.message)
            navigate("/dashboard");

        } else {
            toast.warning(response.data.message);
        }
    };

    return (
        <div>
            <div className="backgroundtwo">
                <div className="login">
                    <p className="account">Admin Login</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={onChange}
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                name="password"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <button type="submit" style={{ marginTop: "40px" }}>Sign in</button>
                        <p className="not-account">Don't have an account? <a href="">Sign up</a></p>
                        <hr className='loginhr' />
                        <p className="end">Or sign in with <FcGoogle className="circle" /> <FaFacebookF className="circle" /></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
