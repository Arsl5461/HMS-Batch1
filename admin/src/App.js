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
import './pages/AddServices.css';
import AddServices from './pages/services/AddServices';
import Adddoctors from './pages/doctors/Adddoctors';
// import '.pages/img.jpg.jpg';

function App() {
  const location = useLocation();
  const showSidebar = location.pathname !== '/';

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
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <img.jpg.jpg/> */}
      <ToastContainer />
    

    </>
  );
}

export default App;
