import React from 'react'

const Services = () => {
  return (
    <div className='container'>
     <h1>Our Services</h1>
          <h3>We are Serving Humanity ana Spreading Joy</h3>
          <hr/>
         
          <div className="container-cards ">
        <div className="cardss">
          
          <h2>Accident & Emergency</h2>
          <p className="card-description">Shalamar Hospital’s Accidents and Emergency Department is serving a vast locality of all socio-economical strata.</p>
          
        </div>
        <div className="cardss">
          
          <h2>Cardiology</h2>
          <p className="card-description">Our Best Cardiologists diagnose and treat conditions like Cardiomyopathy, congenital heart disease, coronary artery diseases</p>
         
        </div>
        <div className="cardss">
        
          <h2>Diagnostic Tests</h2>
          <p className="card-description">The laboratory performs over one million tests and a greater number of patients visit our in-house laboratory every year.</p>
        
        </div>
      </div>
          </div>
    
  )
}

export default Services