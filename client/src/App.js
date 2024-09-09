
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import "./styles.css"
import Footer from './components/Footer';
import Doctors from './components/Doctors';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <Carousel />
      <Doctors/>
      <Footer />
    </>
  );
}

export default App;
