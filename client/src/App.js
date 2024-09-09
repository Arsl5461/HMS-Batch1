
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import "./styles.css"
import Card from './components/Card';
import Card1 from './components/Card1';
import { FaHeadphonesAlt } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TbPhoneCall } from "react-icons/tb";
import Footer from './components/Footer';
import Cards from './components/Cards';


function App() {
  return (
    <>
    <Header/>
    <Nav/>
     <Carousel/>
     <div className='text' style={{textAlign:"center", color:"Black", fontFamily:"sans-serif", marginTop:"20px"  }}>
<h2><b>Welcome to Shalamar Hospital</b></h2>
<p style={{ fontSize:"15px" }}>Shalamar Hospital has a renowned history of serving the community since its founding in 1978. The hospital is equipped  with world-class <br/> medical diagnosis and treatment equipment. Established as a purpose-built building, Shalamar Hospital has grown to a 500-bed medical facility, offering medical services <br/> to the community and international standards, including the American Heart Association and the American College of Cardiology. Shalamar Hospital is committed to making healthcare <br/>accessible by ensuring that its services are patient-centered and delivered with excellence and empathy</p>
<h2><b>Our Philosophy</b></h2>
</div>
<Card1/>
<Card/>
<h2  style={{textAlign:"center", color:"Black", fontFamily:"sans-serif", marginTop:"5px"  }}><b>Best Doctors​</b></h2>
<Cards/>
<h2  style={{textAlign:"center", color:"Black", fontFamily:"sans-serif", marginTop:"5px"  }}><b>Our Departments​</b></h2>
<div >
<ul class="numbers">
<li class="no" > <FaHeadphonesAlt />+92-42-111-205-205  </li>
<li class="no"> <HiOutlineDevicePhoneMobile />+92-332-028-0281 </li>
<li class="no"> <TbPhoneCall />+92-42-368-23712 </li>

</ul>
</div>
<Footer/>
    </>
  );
}

export default App;
