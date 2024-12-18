
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import "./styles.css"
import Doctors from './components/Doctors';
import Card from './components/Card';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import ApplyOnline from './pages/ApplyOnline';
import Home from './pages/Home';
import H from './pages/H';
import HF from './components/HF';
import Services from './components/Services';
import Donate from './pages/Donate';
import About from './pages/About';
import Appointment from './pages/Appointment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Parent from './components/Parent';
import Aboutus from './components/Aboutus';
import Vacent from './components/Vacent';
import Program from './components/Program';
import Counter from './components/Counter';
import BokAppointment from './components/BokAppointment';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Donate' element={<Donate/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/H' element={<H/>}></Route>
        <Route path='/Parent' element={<Parent/>}></Route>
        <Route path='/Vacent' element={<Vacent/>}></Route>
        <Route path='/Appointment' element={<Appointment/>}></Route>
        <Route path='/Program' element={<Program/>}></Route>
        <Route path='/ApplyOnline' element={<ApplyOnline/>}></Route>
      </Routes>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
