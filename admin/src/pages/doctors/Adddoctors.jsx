import React, { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";

const AddServices = () => {
    const [formData, setFormData] = useState({
        Name: '',
        education: '',
        email: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted:\nname: ${formData.name}\neducation: ${formData.education}\nemail: ${formData.email}\nImage: ${formData.image ? formData.image.name : 'No file chosen'}`);
        
        setFormData({
          Name: '',
          education: '',
          email: '',
          image: null,
        });
    };

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
                            name="Name"
                            value={formData.Name}
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
                            value={formData.education}
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
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }} 
                        />
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
