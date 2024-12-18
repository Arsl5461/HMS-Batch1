import React,{useState} from 'react'
import { IoMdPhonePortrait } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
const BokAppointment = () => {
  return (
    <>
    <div class="don">Book Appointment
    <div class="texture">
    <h2 class="who">Who We Are?</h2>
    <p>Shalamar Hospital, formerly known as Businessmen Hospital Trust, was founded in 1982 as a non-profit institution with the aim<br/> of providing world-class medical facilities to the underprivileged communities of Lahore. Spread across 18 acres, this massive 500<br/>-bed hospital boasts of top-notch clinical faculty, state-of-the-art equipment, and specialized infrastructure that caters to the diverse<br/> medical needs of its patients.</p>
    <h2 class="who">How to book an online appointment?</h2>
    <p>Shalamar Hospital in Lahore provides an easy process for booking online appointments. Patients can visit their  Appointment  <br/>  Management System to select the desired doctor or medical specialty and confirm the appointment. Alternatively, users can  <br/>

    access the Patient Portal for appointment bookings by logging in with a mobile number to receive a secure PIN.  For those who<br/>  prefer phone assistance, the hospital’s helpline at +92-42-111-205-205 is available to facilitate bookings.  These services ensure<br/> convenience and accessibility for patients seeking medical care​
    </p>
    </div>
    

    Contact Us
    <div>
    <ul className='con'>
<li><IoLocationSharp />Shalimar Link Road, Lahore</li>
<li><IoMdPhonePortrait />04236870771</li>
<li><MdLocalPhone />0333-1184944</li>
    </ul>
    </div>
    </div>
    </>
  )
}

export default BokAppointment