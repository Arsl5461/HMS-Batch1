import React, { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";

const AddServices = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ext, setExt] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({ name, description, ext });
    setName('');
    setDescription('');
    setExt(''); 
  };

  return (
    <div style={{ marginLeft: "200px", width: "calc(100% - 200px)" }}>
      <div className="background">
        <div className="blue-nav">
          <FaRegCircleUser className="user" />
        </div>
        <div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '50px',  alignItems: 'center', paddingTop: '20px', }}>
            <label>
              Enter your name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ padding: '10px' }}
              />
            </label>

            <label>
              Enter Description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                style={{ padding: '10px' }}
              />
            </label>

            <label>
              Enter Ext:
              <input
                type="text"
                value={ext}
                onChange={(e) => setExt(e.target.value)}
                required
                style={{ padding: '10px', }}
              />
            </label>

            <button type="submit" style={{ width: "100px" }}>Submit</button>
          </form>

          {submittedData && (
            <div>
              <h3>Submitted Data:</h3>
              <p>Name: {submittedData.name}</p>
              <p>Description: {submittedData.description}</p>
              <p>Ext: {submittedData.ext}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddServices;
