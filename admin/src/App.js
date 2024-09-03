import './App.css';
import Login from "./component/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>

    </Routes>

   <ToastContainer/>
   {/* <h1>Hello From Admin</h1>
   <h1>Hello From Admin sana</h1> */}
   </>
  );
}

export default App;
