import React, { useState, useRef } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";

const AddServices = () => {
  const [advantages, setAdvantages] = useState([""]); 

  const thumbnailInputRef = useRef(null);
  const detailInputRef = useRef(null);

  const handleThumbnailClick = () => {
    thumbnailInputRef.current.click();
  };

  const handleDetailClick = () => {
    detailInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const handleAddAdvantage = () => {
    setAdvantages([...advantages, ""]);
  };

  const handleAdvantageChange = (index, event) => {
    const newAdvantages = [...advantages];
    newAdvantages[index] = event.target.value;
    setAdvantages(newAdvantages);
  };

  const handleRemoveAdvantage = (index) => {
    const newAdvantages = advantages.filter((_, i) => i !== index);
    setAdvantages(newAdvantages);
  };

  const handleAddService = () => {
    
    console.log('Service added');
  };

  return (
    <div style={{ marginLeft: "200px" }}>
      <div className="background">
        <div className="blue-nav">
          <FaRegCircleUser className="user" />
        </div>
        <div className="container-services" style={{ marginLeft: "-20px" }}> 
          <div>
            Thumbnail Image (600px * 350px)
            <button
              className="file-upload-button"
              onClick={handleThumbnailClick}
              style={{
                padding: '8px 16px',
                fontSize: '14px',
                cursor: 'pointer',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                marginRight: '10px'
              }}
            >
              Choose Image
            </button>
            <input
              type="file"
              accept="image/*"
              ref={thumbnailInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }} // Hide the file input
            />
          </div>
          <div>
            Detail Image (940px * 807px)
            <button
              className="file-upload-button"
              onClick={handleDetailClick}
              style={{
                padding: '8px 16px',
                fontSize: '14px',
                cursor: 'pointer',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                marginRight: '10px'
              }}
            >
              Choose Image
            </button>
            <input
              type="file"
              accept="image/*"
              ref={detailInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }} 
            />
          </div>
        </div>
<br />    <br />

        <div className='input-box' style={{ marginLeft: "-20px" }}>
          
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px' }}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter service name"
              style={{
                padding: '8px',
                fontSize: '14px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '300px'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="field" style={{ display: 'block', marginBottom: '8px' }}>
              Select a Field:
            </label>
            <select
              id="field"
              name="field"
              style={{
                padding: '8px',
                fontSize: '14px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '300px'
              }}
            >
              <option value="">Select a field</option>
              <option value="field1">Heart Surgeries</option>
              <option value="field2">Skin Surgeries</option>
              <option value="field3">Kidney Transplant & Dialysis</option>
              <option value="field4">Burn Centers</option>
              <option value="field5">Eye Related Field</option>
              <option value="field6">Diagnostic Field</option>
              <option value="field7">Thalassemia and Blood Related Field</option>
            </select>
          </div>
        </div>
        <div className="advantages" style={{ marginLeft: "250px", marginTop: '50px' }}>
          <h4>Advantages</h4>
        <br />
          <p style={{ marginLeft: "0px"}}>Here are the advantages of every Field</p>
          
            <div className='addadvantage'>
            <button 
              onClick={handleAddAdvantage}
              style={{
                padding: '15px 8px',
                width: '150px',
                fontSize: '14px',
                cursor: 'pointer',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              Add Advantage
            </button>
            </div>

            {advantages.map((advantage, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <input
                  type="text"
                  placeholder={`Advantage ${index + 1}`}
                  value={advantage}
                  onChange={(event) => handleAdvantageChange(index, event)}
                  style={{
                    padding: '8px',
                    fontSize: '14px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '300px'
                  }}
                />
                <div className='removeadvantage' >
                <button
                  onClick={() => handleRemoveAdvantage(index)}
                  style={{
                    padding: '10px 8px',
                    width: '100px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    marginLeft: '10px'
                  }}
                >
                  Remove
                </button>
                </div>
              </div>
            ))}
            
        
          
          <div className='addservicebtn' style={{ marginTop: '20px' }}>
            <button
              onClick={handleAddService}
              style={{
                padding: '14px 20px',
                width: '150px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              Add Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddServices;