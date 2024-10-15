import React, { useState, useEffect } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";

const Services = () => {
  const navigate = useNavigate();

  const goToAddServices = () => {
    navigate("/add-service");
  };
  const [services, setServices] = useState([]);
  const fetchServices = async () => {
    const response = await axios.get("http://localhost:8082/api/admin/service");
    if (response.data.success) {
      setServices(response.data.services);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      style: {
        padding: "5px",

        marginLeft: "10px",
      },
    },
    {
      name: "EXT",
      selector: (row) => row.ext,
      style: {
        padding: "5px",
      },
    },
    {
      name: "Image",
      selector: (row) => (
        <img
          src={`http://localhost:8082/uploads/${row.image}`}
          alt={row.title}
          style={{ height: "auto", width: "50px" }}
        />
      ),
      style: {
        padding: "5px",
      },
    },
    {
      name: "Description",
      selector: (row) => row.description,
      style: {
        padding: "5px",
      },
    },
  ];
  return (
    <div style={{ marginLeft: "200px", width: "calc(100% - 200px)" }}>
      <div className="background">
        <div className="blue-nav">
          <FaRegCircleUser className="user" />
        </div>

        <div className="box">
          <h2>Welcome To Service Page</h2>
        </div>
        <div className="serve">
          <h3 style={{ marginLeft: "10px", marginTop: "20px" }}>
            Services List
          </h3>
          <button className="btn" onClick={goToAddServices}>
            +Add Service
          </button>
        </div>

        <div style={{ width: "100%" }}>
          <DataTable
            columns={columns}
            data={services}
            pagination
            customStyles={{
              rows: {
                style: {
                  minHeight: "30px",
                },
              },
              headCells: {
                style: {
                  paddingLeft: "4px",
                  paddingRight: "4px",
                },
              },
              cells: {
                style: {
                  paddingLeft: "4px",
                  paddingRight: "4px",
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
};

export default Services;
