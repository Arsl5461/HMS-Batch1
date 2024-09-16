import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

const Nav = () => {
  return (
    <div className='index' >
    <ul class="bar text-light " >
        <li class="grand8 ">
        <Link  id="Summer" to="/Donate" style={{color:"white",textDecoration:"none"}}>Donate Now</Link>
        </li>
        <li class="grand ">
        <Link  to="" style={{color:"white",textDecoration:"none"}}> Patient Portal</Link>
        </li>
        <li class="grand1 ">
        <Link  to="" style={{color:"white",textDecoration:"none"}}> Careers</Link>
        </li>
        <li class="grand2 ">
        <Link  to="" style={{color:"white",textDecoration:"none"}}> Book Appointment</Link>
        </li>
    </ul>
    </div>
  )
}

export default Nav