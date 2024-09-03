
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";


const Login = () => {
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    // const newData={...formData,name:"Asdasd"}
    // console.log(newData)
    const onChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
e.preventDefault();
if(formData.email === "admin@gmail.com" && formData.password==="admin123"){
    alert("You logged in")
}
else{
    alert("Password is wrong")
}
    };
    return (
        <div>
            <div className="background">
                <div class="logo">
                    <img src="https://user.mockplus.com/enUS/sign-logo2.png" width="130px" alt="" />
                </div>
                <div className="description">
                    <h1 class="heading">Design + Collaboration, all in Mockplus</h1>
                    <p class="det">A virtual center for designers, devs, PMs, and all design parties to perform their duties in unison. At least 200% faster with Mockplus.</p>
                </div>
                <div className="backgroundtwo">
                    <h1 class="account">Creat Your Account</h1>

                    <div className="login">
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
                                    name='password'
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <p class="alert">Please enter a valid email address.</p>
                            <button type="submit">Sign in</button>
                            <p class="not-account">Don't have an account? <a href="">Sign up</a> </p>

                            <hr />
                            <p class="end">Or sign in with</p> <div class="icons" ><FcGoogle class="circle"/> <FaFacebookF class="circle"  /> </div> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login