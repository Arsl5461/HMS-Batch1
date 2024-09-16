import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';



const Services = () => {
    const navigate = useNavigate(); 

    const goToAddServices = () => {
        navigate('/add-service'); 
    };

    return (
        <div style={{ marginLeft: "200px" }}>
            <div className="background">
                <div className="blue-nav">
                    <FaRegCircleUser className="user" />
                </div>
                <div className="upperiamg">
                    {/* Add content here if needed */}
                </div>
                <div className="box">
                    <h2>Welcome To Service Page</h2>
                </div>
                <div className="serve">
                    <h3 style={{ marginLeft: "10px", marginTop: "20px" }}>Services List</h3>
                    <button className="btn" onClick={goToAddServices}>
                        +Add Service
                    </button>
                </div>
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Field Name</th>
                                <th>Field Emails</th>
                                <th>Advantages</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="white-row" key="1">
                                <td>Electronic Support</td>
                                <td>Electronic Machines</td>
                                <td> </td>
                                <td>1</td>
                                <td>
                                    <button className="styled-button" onClick={goToAddServices}>
                                        <span className="checkmark">&#10003;</span>
                                        <span className="crossmark">&#10007;</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="gray-row" key="2">
                                <td>Cancer Treatment by Chemotherapy</td>
                                <td>Cancer Field</td>
                                <td></td>
                                <td>1</td>
                                <td>
                                    <button className="styled-button" onClick={goToAddServices}>
                                        <span className="checkmark">&#10003;</span>
                                        <span className="crossmark">&#10007;</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="white-row" key="3">
                                <td>Lungs Failure</td>
                                <td>Lungs Treatment</td>
                                <td></td>
                                <td>2</td>
                                <td>
                                    <button className="styled-button" onClick={goToAddServices}>
                                        <span className="checkmark">&#10003;</span>
                                        <span className="crossmark">&#10007;</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="gray-row" key="4">
                                <td>Kidney Stones</td>
                                <td>Dialysis</td>
                                <td></td>
                                <td>5</td>
                                <td>
                                    <button className="styled-button" onClick={goToAddServices}>
                                        <span className="checkmark">&#10003;</span>
                                        <span className="crossmark">&#10007;</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="white-row" key="5">
                                <td>Heart Attacks</td>
                                <td>Heart treatment by Bypass</td>
                                <td></td>
                                <td>6</td>
                                <td>
                                    <button className="styled-button" onClick={goToAddServices}>
                                        <span className="checkmark">&#10003;</span>
                                        <span className="crossmark">&#10007;</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="gray-row" key="6">
                                <td>Diabetes and Blood Pressure</td>
                                <td>Insulin</td>
                                <td></td>
                                <td>5</td>
                                <td>
                                    <button className="styled-button" onClick={goToAddServices}>
                                        <span className="checkmark">&#10003;</span>
                                        <span className="crossmark">&#10007;</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="white-row" key="7">
                                <td>Bones Breakdown</td>
                                <td>Bones Treatment</td>
                                <td></td>
                                <td>6</td>
                                <td>
                                    <button className="styled-button" onClick={goToAddServices}>
                                        <span className="checkmark">&#10003;</span>
                                        <span className="crossmark">&#10007;</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="gray-row" key="8">
                                <td>Operation Fields</td>
                                <td>Daily Operations</td>
                                <td></td>
                                <td>8</td>
                                <td>
                                    <button className="styled-button" onClick={goToAddServices}>
                                        <span className="checkmark">&#10003;</span>
                                        <span className="crossmark">&#10007;</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="white-row" key="9">
                                <td>Skin Disorders</td>
                                <td>Skin Specialist & Surgeries</td>
                                <td></td>
                                <td>8</td>
                                <td>
                                    <button className="styled-button" onClick={goToAddServices}>
                                        <span className="checkmark">&#10003;</span>
                                        <span className="crossmark">&#10007;</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="gray-row" key="10">
                                <td>Diagnostic Fields</td>
                                <td>Diagnosing Tests Daily</td>
                                <td></td>
                                <td>1000+</td>
                                <td>
                                    <button className="styled-button" onClick={goToAddServices}>
                                        <span className="checkmark">&#10003;</span>
                                        <span className="crossmark">&#10007;</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div className='srfooter'>
                        Blue Surge
                        <div className='Powered'>
                            Powered by Infinity Loop
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="rgb(212, 12, 12)" fill="none">
                                <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

export default Services;
