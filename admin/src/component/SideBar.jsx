import React from 'react'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div>
    <div class="sidebar">
        <div class="sidebar-content">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/timing">Timing</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
    </div>
  )
}

export default SideBar