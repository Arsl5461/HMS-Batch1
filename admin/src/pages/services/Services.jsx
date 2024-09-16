import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';



const Services = () => {
    const navigate = useNavigate(); 

    const goToAddServices = () => {
        navigate('/add-service'); 
    };
    const columns = [
      {
        name: 'Title',
        selector: row => row.title,
        style: {
          padding: '0 5px', // Adjust the padding to control the space
        },
      },
      {
        name: 'EXT',
        selector: row => row.ext,
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
        name: 'Description',
        selector: row => row.description,
        style: {
          padding: '0 5px',
        },
      },
    ];
    
    
    const data = [
        {
        id: 1,
        title: 'Accident & Emergency',
        ext:"Ext: 333 / 444",
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/smartwatch_4025363.png",
        description:"Shalamar Hospital’s Accidents and Emergency Department is serving a vast locality of all socio-economical strata. A team of dedicated doctors is round the clock present to serve ill-health people with all types of medical and surgical emergencies. Our motto is to be very sympathetic and considerate of community health and give them comfort."
      },
      {
        id: 2,
        title: 'Burn & Plastic Surgery',
        ext: 'Ext: 425',
        image:"https://shalamarhospital.org.pk/wp-content/uploads/2024/05/self-care_9032112.png",
        description:"At our hospital, we take a holistic approach to healthcare, addressing not just your physical needs but your emotional and mental wellbeing as well"
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
                    <h2>Welcome To Service Page</h2>
                </div>
                <div className="serve">
                    <h3 style={{ marginLeft: "10px", marginTop: "20px" }}>Services List</h3>
                    <button className="btn" onClick={goToAddServices}>
                        +Add Service
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
export default Services;
