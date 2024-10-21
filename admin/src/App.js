import './App.css';
import Login from "./component/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/doctors/Doctors';
import Contact from './pages/contact/Contact';
import Services from './pages/services/Services';
import Timing from './pages/timing/Timing';
import SideBar from './component/SideBar';
import './pages/services.css';
import './component/Login.css';
import './pages/services/AddServices.css';
import AddServices from './pages/services/AddServices';
import Adddoctors from './pages/doctors/Adddoctors';
import './pages/contact/Contactbutton.css';
import AddContact from './pages/contact/AddContact';
import UpdateDoctor from './pages/doctors/UpdateDoctor';
import UpdateService from './pages/services/UpdateService';
import ForgotPassword from './pages/forgot/ForgotPassword';


// import '.pages/img.jpg.jpg';

function App() {
  const location = useLocation();
  const showSidebar = location.pathname !== '/' && location.pathname !=="/forgot";

  return (
    <>
      {showSidebar && <SideBar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/timing' element={<Timing />} />
        <Route path='/services' element={<Services />} />
        <Route path="/add-service" element={<AddServices/>}></Route>
        <Route path="/add-doctor" element={<Adddoctors/>}></Route>
        <Route path="/update-doctor/:id" element={<UpdateDoctor/>}></Route>
        <Route path="/update-service/:id" element={<UpdateService/>}></Route>
        <Route path='/contact' element={<Contact />} />
        <Route path="/add-contact" element={<AddContact/>}></Route>
        <Route path="/forgot" element={<ForgotPassword/>}></Route>

      </Routes>
      <ToastContainer />
    

    </>
  );
}

export default App;
