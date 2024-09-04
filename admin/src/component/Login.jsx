
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";


const Login = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email === "admin@gmail.com" && formData.password === "admin123") {
            toast.success("You logged in");
            setFormData({
                email: "",
                password: ""
            });
            navigate("/dashboard");
        } else {
            toast.warning("Username or Password is wrong");
        }
    };

    return (
        <div>
        
            <nav className="navbar">
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <img src="https://www.shifaam.com/themes/default/guest/img/logo.jpg" alt="" />
                    </li>
                </ul>
                
                <ul className="navbar-menu">
                    <li className="navbar-item">Doctors Book <br /> an Appoinmet </li>
                </ul>
                <ul className="navbar-menu">
                    <li className="navbar-item">Shifaam Paeds <br /> Neurology & <br /> Wellness Place</li>
                </ul>
                <ul className="navbar-menu">
                    <li className="navbar-item">Lab Tests Book <br /> Tests Online</li>
                </ul>
                <ul className="navbar-menu">
                    <li className="navbar-item">Pharmacy <br /> Medicines & <br /> Health Products</li>
                </ul>
                <ul className="navbar-menu">
                    <li className="navbar-item">Childhood Epilapsy <br /> 021 111 788 999</li>
                </ul>
                <ul className="navbar-menu">
                    <li className="navbar-item">RHD Remote <br /> Health Desk</li>
                </ul>
                <ul className="navbar-menu">
               
                    <li className="navbar-item"> 
                    <FaRegUserCircle style={{fontSize: '20'}}/> <br />
                     Login | Signup </li>
                </ul>
            </nav>

            <div className="backgroundtwo">
                

                <div className="login">
                <p class="account">Patient Login</p>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                            <label htmlFor="phone-number">Phone Number:</label>
                            <input
                                type="text"
                                id="number"
                                value={formData.number}
                                onChange={onChange}
                                name="number"
                                required
                            />
                        </div>

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
                        <button type="submit">Sign in</button>
                        <p className="not-account">Don't have an account? <a href="">Sign up</a></p>

                        <hr />
                        <p className="end">Or sign in with <FcGoogle className="circle" /> <FaFacebookF className="circle" /></p>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;
