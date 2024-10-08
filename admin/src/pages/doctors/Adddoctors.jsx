import React, { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddServices = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:"",
        gender:"",
        education: '',
        image: "",
    });
const navigate=useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handleSubmit = async(e)=> {
        e.preventDefault();
        const response=await axios.post("http://localhost:8082/api/admin/doctor",formData)
      if(response.data.success){
        toast.success(response.data.message);
        navigate("/doctors")
        setFormData({
            name: '',
            email: '',
            phone:"",
            gender:"",
            education: '',
            image: "",
          });
      }
      else{
        toast.warning(response.data.message)
      }
      
    };
    const {name,email,phone,gender,education}=formData;

    return (
        <div style={{ marginLeft: "200px" }}>
            <div className="background">
                <div className="blue-nav">
                    <FaRegCircleUser className="user" />
                </div>
                <form onSubmit={handleSubmit} style={{ marginLeft: "500px", marginTop: "50px", }}>
                    <div className="form-group">
                        <label htmlFor="Name">Name:</label>
                        <input
                            placeholder="Enter Here"
                            type="text"
                            id="Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }} // Style applied here
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="education">Education:</label>
                        <input
                            placeholder="Enter Here"
                            type="text"
                            id="education"
                            name="education"
                            value={education}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            placeholder="Enter Here"
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            placeholder="Enter Here"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }} 
                        />
                    </div>
                    <div>
                    <label>
                        <input type='radio' name='gender' value={"Male"} onChange={handleChange}/>
                        <label>Male</label>
                        <input type='radio' name='gender' value={"Female"} onChange={handleChange}/>
                        <label>Female</label>
                    </label>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="image">Choose Image:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                            style={{ width: "250px" }} 
                        />
                    </div> */}
                    <button type="submit" style={{ width: "250px", backgroundColor: '#020249'}}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddServices;
