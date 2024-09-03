
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import "./styles.css"

function App() {
  return (
    <>
    <Header/>
    <Nav/>
     <Carousel/>
     <div className='text' style={{textAlign:"center", color:"Black", fontFamily:"sans-serif", marginTop:"20px"  }}>
<h2><b>Welcome to Shalamar Hospital</b></h2>
<p style={{ fontSize:"15px" }}>Shalamar Hospital has a renowned history of serving the community since its founding in 1978. The hospital is equipped  with world-class <br/> medical diagnosis and treatment equipment. Established as a purpose-built building, Shalamar Hospital has grown to a 500-bed medical facility, offering medical services <br/> to the community and international standards, including the American Heart Association and the American College of Cardiology. Shalamar Hospital is committed to making healthcare <br/>accessible by ensuring that its services are patient-centered and delivered with excellence and empathy</p>
</div>
    </>
  );
}

export default App;
