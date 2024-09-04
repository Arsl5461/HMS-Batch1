import './App.css';
import Login from "./component/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/doctors/Doctors';
import Contact from './pages/contact/Contact';
import Services from './pages/services/Services';
import Timing from './pages/timing/Timing';
import SideBar from './component/SideBar';

function App() {
  return (
   <>
   <SideBar/>
   <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/doctors' element={<Doctors/>}></Route>
    <Route path='/timing' element={<Timing/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>

    </Routes>

   <ToastContainer/>
   {/* <h1>Hello From Admin</h1>
   <h1>Hello From Admin sana</h1> */}
   </>
  );
}

export default App;
