import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GiHeartOrgan } from "react-icons/gi";
import { FaAmbulance } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";


const Services = () => {
const navigate = useNavigate();

const handleButtonClick = () => {
  navigate ('/nextpage');
};


  return (
    <div style={{ marginLeft: "200px" }}>
          <div className="container" style={{ marginLeft: "70px" }}>
          <h1>Our Services</h1>
          <h3>We are Serving Humanity ana Spreading Joy</h3>
          <hr />

      <div className="container-cards ">
        <div className="card">
          <FaAmbulance class="circle-iconic"  />
          <h2>Accident & Emergency</h2>
          <p className="card-description">Shalamar Hospital’s Accidents and Emergency Department is serving a vast locality of all socio-economical strata.</p>
          <button className="card-button" onClick={handleButtonClick}>Submit Now</button>
        </div>
        <div className="card">
          <GiHeartOrgan class="circle-iconic" />
          <h2>Cardiology</h2>
          <p className="card-description">Our Best Cardiologists diagnose and treat conditions like Cardiomyopathy, congenital heart disease, coronary artery diseases</p>
          <button className="card-button" onClick={handleButtonClick}>Submit Now</button>
        </div>
        <div className="card">
        <GiTestTubes class="circle-iconic" />
          <h2>Diagnostic Tests</h2>
          <p className="card-description">The laboratory performs over one million tests and a greater number of patients visit our in-house laboratory every year.</p>
          <button className="card-button" onClick={handleButtonClick}>Submit Now</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services;