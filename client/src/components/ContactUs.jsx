import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
const ContactUs = () => {
  return (
    <>
    <img src="https://shalamarhospital.org.pk/wp-content/uploads/2022/05/icu-2-1024x683.jpg" alt="" style={{width:"100%",height:"550px", marginTop:"-20px"}} />
    <h1>Contact Us</h1>
    <div className="cardz">
      <div className="cadz">
      <div className="icn"><FaLocationArrow /></div>
      <h2>Address</h2>
      <p>Shalamar Link Road,Lahore, Pakistan</p>
      </div>
      <div className="cadz">
      <div className="icn"><FaPhoneSquare /></div>
      <h2>Phone</h2>
      <p>General Inquiries: 042-111 205 205</p>
      <p>+92 42 3681 7857 <br />+92 42 3682 3712 <br /><br />Complaint Cell: 03354617958</p>
      </div>
      <div className="cadz">
      <div className="icn"><FaMailBulk /></div>
      <h2>Address</h2>
      <p>General Inquiries: info@sihs.org.pk <br /><br /> Complaint Cell: complaintcell@sihs.org.pk</p>
      </div>
    </div>
    <h2>Drop your Feedback/Suggestions</h2>
    <div className='map'>
    <form class="forms">
      <label>Name</label>
      <input type="text" />
      <label class="space">Email</label>
      <input type="email" />
      <label class="space">Message</label>
      <textarea class="mess" type="text" />
      <button type='submit'>Submit</button>
    </form>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.1383272725634!2d74.37725707545337!3d31.575254374188845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ac9af9d7edf%3A0xa625f11332d699cb!2sShalamar%20Hospital!5e0!3m2!1sen!2s!4v1725780260134!5m2!1sen!2s" width="600" height="420" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  )
}

export default ContactUs
