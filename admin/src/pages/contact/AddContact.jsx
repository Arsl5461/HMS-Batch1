import React, { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";

const AddContact = () => {
    const [formData, setFormData] = useState({
        title: '',
        ext: '',
        description: '',
        image: null,
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleGenderChange = (event) => {
        setFormData({ ...formData, gender: event.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nCountry: ${formData.country}\nGender: ${formData.gender}\nMessage: ${formData.message}`);


        setFormData({
            name: '',
            email: '',
            country: '',
            message: '',
            gender: '',
        });
    };

    return (
        <div style={{ marginLeft: "200px" }}>
            <div className="background">
                <div className="blue-nav">
                    <FaRegCircleUser className="user" />
                </div>
                <form onSubmit={handleSubmit} style={{ marginLeft: "500px", marginTop: "50px" }}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            placeholder="Enter Here"
                            type="text"
                            id="name"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            placeholder="Enter Here"
                            type="text"
                            id="email"
                            name="ext"
                            value={formData.ext}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }}
                        />
                    </div>

                    <select name='country' className='country' onChange={handleChange} style={{padding: "15px", width: "250px"}}>
                        <option disabled selected hidden>Select country</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                    </select>


                    <div className="form-group" style={{marginTop: "20px"}}>
                        <label>Gender:</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="radio"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleGenderChange}
                                />
                                <span style={{ marginLeft: '10px' }}>Male</span>
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="radio"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleGenderChange}
                                />
                                <span style={{ marginLeft: '10px' }}>Female</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "100px" }}
                        />
                    </div>



                    <button type="submit" style={{ width: "250px", backgroundColor: '#020249' }}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddContact;
