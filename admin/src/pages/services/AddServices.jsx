import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddServices = () => {
  const [formData, setFormData] = useState({
    title: "",
    ext: "",
    description: "",
    image: null,
  });
    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const newFormData=new FormData();
        newFormData.append("title", formData.title);
        newFormData.append("ext", formData.ext);
        newFormData.append("description", formData.description);
        newFormData.append("image", formData.image);

const navigate=useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response=await axios.post("http://localhost:8082/api/admin/service",newFormData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if(response.data.success){
            toast.success("Service Created Successfully")
            setFormData({
                title: '',
                ext: '',
                description: '',
                image: null,
            }); 
            navigate("/services")
        }
        
    };

    return (
        <div style={{ marginLeft: "200px" }}>
            <div className="background">
                <div className="blue-nav">
                    <FaRegCircleUser className="user" />
                </div>
                <form onSubmit={handleSubmit} style={{ marginLeft: "500px", marginTop: "50px", }}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            placeholder="Enter Here"
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }} // Style applied here
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ext">Ext:</label>
                        <input
                            placeholder="Enter Here"
                            type="text"
                            id="ext"
                            name="ext"
                            value={formData.ext}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "100px" }} 
                        ></textarea>
                    </div>
                    <div className="form-group">
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
                    </div>
                    <button type="submit" style={{ width: "250px", backgroundColor: '#020249'}}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddServices;
