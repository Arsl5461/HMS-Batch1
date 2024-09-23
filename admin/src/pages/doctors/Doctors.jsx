import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';



const Doctors = () => {
    const navigate = useNavigate(); 

    const goToAddServices = () => {
        navigate('/add-doctor'); 
    };
    const columns = [
      {
        name: 'Name',
        selector: row => row.name,
        style: {
          padding: '0 5px', // Adjust the padding to control the space
        },
      },
      {
        name: 'Education',
        selector: row => row.education,
        style: {
          padding: '0 5px',
        },
      },
      {
        name: 'Image',
        selector: row => <img src={row.image} alt={row.title} style={{height:"auto", width:"50px"}}/>,
        style: {
          padding: '0 5px',
        },
      },
      {
        name: 'Email',
        selector: row => row.email,
        style: {
          padding: '0 5px',
        },
      },
    ];
    
    
    const data = [
        {
        id: 1,
        name: 'Doctor Arslan',
        education:"MBBS from Toronto Medical university",
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/smartwatch_4025363.png",
        email:"arsal@gmail.com"
      },
      {
        id: 2,
        name: 'Doctor Zain',
        education:"MBBS from Toronto Medical university",
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/smartwatch_4025363.png",
        email:"zainulabedeen@gmail.com"
      },
      {
        id: 3,
        name: 'Doctor Zunoon',
        education:"MBBS from Toronto Medical university",
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/smartwatch_4025363.png",
        email:"zunoon@gmail.com"
      },
      {
        id: 3,
        name: 'Doctor Uzair',
        education:"MBBS from Sadiqabad university",
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/smartwatch_4025363.png",
        email:"uzair@gmail.com"
      },
      {
        id: 3,
        name: 'Doctor Hanan',
        education:"MBBS from Toronto Medical university",
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/smartwatch_4025363.png",
        email:"hanan@gmail.com",
      },
      {
        id: 3,
        name: 'Doctor Tehreem',
        education:"MBBS from kot abdul malik university",
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/smartwatch_4025363.png",
        email:"tehreem@gmail.com"
      },
      {
        id: 3,
        name: 'Doctor Sana',
        education:"MBBS from kot abdul malik university",
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/smartwatch_4025363.png",
        email:"sana@gmail.com"
      },
      {
        id: 3,
        name: 'Doctor Ayesha',
        education:"MBBS from kot abdul malik university",
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/smartwatch_4025363.png",
        email:"ayesha@gmail.com"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },
      {
        id: 3,
        title: 'Cardiology',
        ext: 'Ext: 320',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/gear_10316792.png",
        description:"From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital"
      },

    ]

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
                    <h2>Welcome To Doctor Page</h2>
                </div>
                <div className="serve">
                    <h3 style={{ marginLeft: "10px", marginTop: "20px" }}>Doctor List</h3>
                    <button className="btn" onClick={goToAddServices}>
                        +Add Doctor
                    </button>
                </div>


		<DataTable
			columns={columns}
			data={data}
      pagination
		/>
              
            </div>
        </div>
    );
  }
export default Doctors;
