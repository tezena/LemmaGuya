import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Gallery from './pages/gallery';
import Education from './pages/educationpage';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/contact';
import Payment from './pages/EduPayment';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/gallery' element={<Gallery />} />
          <Route  path='/blog' element={<Blog />} />
          <Route  path='/education' element={<Education /> }/>
          <Route path='/about' element={<About />} />
          <Route  path='/contact' element={<Contact /> }/>
          <Route path="/payment" element={<Payment/>}/>
        </Routes> 
        <Footer />   
      </BrowserRouter>
    </div>
  );
}

export default App;
