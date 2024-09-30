import React, { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";

const AddServices = () => {
    const [formData, setFormData] = useState({
        title: '',
        ext: '',
        description: '',
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
        alert(`Submitted:\nTitle: ${formData.title}\nExt: ${formData.ext}\nDescription: ${formData.description}\nImage: ${formData.image ? formData.image.name : 'No file chosen'}`);
        
        setFormData({
            title: '',
            ext: '',
            description: '',
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
