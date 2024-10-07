import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [data, setData] = React.useState([
        {
            id: 1,
            name: 'Sir Arslan Akmal',
            email: 'arsl123@gmail.com',
            gender: 'male',
            country: 'Pakistan',
            Message: "At our hospital, we"
        },
        {
            id: 2,
            name: 'Ayisha',
            email: 'aysha123@gmail.com',
            gender: 'female',
            country: 'Pakistan',
            Message: "At our hospital, we take a holistic approach to healthcare..."
        },
        {
            id: 3,
            name: 'Sana',
            email: 's123@gmail.com',
            gender: 'female',
            country: 'Pakistan',
            Message: "At our hospital, we take a holistic approach to healthcare..."
        },
        {
            id: 4,
            name: 'Tehreem',
            email: 'tehreem123@gmail.com',
            gender: 'female',
            country: 'Pakistan',
            Message: "At our hospital, we take a holistic approach to healthcare..."
        },
        {
            id: 5,
            name: 'Atiqa',
            email: 'atiqa123@gmail.com',
            gender: 'female',
            country: 'Pakistan',
            Message: "At our hospital, we take a holistic approach to healthcare..."
        },
        {
            id: 6,
            name: 'Zanoon',
            email: 'Z123@gmail.com',
            gender: 'male',
            country: 'Pakistan',
            Message: "At our hospital, we take a holistic approach to healthcare..."
        },
        {
            id: 7,
            name: 'Uzair',
            email: 'Uzair123@gmail.com',
            gender: 'male',
            country: 'Pakistan',
            Message: "At our hospital, we take a holistic approach to healthcare..."
        },
        {
            id: 8,
            name: 'Hanan',
            email: 'hanan123@gmail.com',
            gender: 'male',
            country: 'Pakistan',
            Message: "At our hospital, we take a holistic approach to healthcare..."
        },
        {
            id: 9,
            name: 'Zain',
            email: 'zain123@gmail.com',
            gender: 'male',
            country: 'Pakistan',
            Message: "At our hospital, we take a holistic approach to healthcare..."
        },
    ]);

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            style: {
                padding: '5px',
                marginLeft: "8px"
            },
        },
        {
            name: 'Email',
            selector: row => row.email,
            style: {
                padding: '5px',
            },
        },
        {
            name: 'Gender',
            selector: row => row.gender,
            style: {
                padding: '5px',
            },
        },
        {
            name: 'Country',
            selector: row => row.country,
            style: {
                padding: '5px',
            },
        },
        {
            name: 'Message',
            selector: row => row.Message,
            style: {
                padding: '5px',
            },
        },
        {
            name: 'Actions' ,
            style: {
                padding: '5px',
            },
            cell: row => (
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div className="contact-button">
                        <div className="tick" onClick={goToAddContact}>
                        ✔️
                        </div>
                        <div className="cross" onClick={() => handleRemove(row.id)}>
                        ❌
                        </div>
                    </div>
                </div>
            ),
        },
    ];


    const navigate = useNavigate();

    const goToAddContact= () => {
        navigate('/add-contact');
        
    };

    const handleRemove = (id) => {
        setData(data.filter(item => item.id !== id));
        alert('Contact removed!');
    };

    return (
        <div style={{ marginLeft: "200px", width: "calc(100% - 200px)" }}>
            <div className="background">
                <div className="blue-nav">
                    <FaRegCircleUser className="user" />
                </div>

                <div className="box">
                    <h2>Welcome To Contact Page</h2>
                </div>

                <h3 style={{ marginLeft: "10px", marginTop: "20px" }}>Contact List</h3>

                <div style={{ width: "100%" }}>
                    <DataTable
                        columns={columns}
                        data={data}
                        customStyles={{
                            rows: {
                                style: {
                                    minHeight: '30px',
                                },
                            },
                            headCells: {
                                style: {
                                    paddingLeft: '10px',
                                    paddingRight: '0px',
                                },
                            },
                            cells: {
                                style: {
                                    paddingLeft: '4px',
                                    paddingRight: '4px',
                                },
                            },
                        }}
                        responsive
                        dense
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;
