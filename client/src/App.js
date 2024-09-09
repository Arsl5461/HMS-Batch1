
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import "./styles.css"
import Card from './components/Card';
import Card1 from './components/Card1';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </>
  );
}

export default App;
