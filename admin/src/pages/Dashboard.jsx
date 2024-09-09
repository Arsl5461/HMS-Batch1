import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";


const Dashboard = () => {
  return (
    <>
      <h1 style={{ marginLeft: "230px", marginTop:"40px" }}>Dashboard</h1>
      <div className="flex">
        <div class="card1"> <div class="icon"><FaUserDoctor /></div>
          <hr />
          <h2>10</h2>
          <p>Total Doctors</p>
        </div>
        <div class="card2"> <div class="icon"><FaRegUser /></div>
          <hr />
          <h2>17 </h2>
          <p>Total Patients</p>
        </div>
        <div class="card3"> <div class="icon"><CiViewTimeline /></div>
          <hr />
          <h2>12</h2>
          <p>Total Services</p>
        </div>
        <div class="card4"> <div class="icon"><IoMdContact /></div>
          <hr />
          <h2>19</h2>
          <p>Total Contact</p>
        </div>
      </div>
    </>
  )


}

export default Dashboard
