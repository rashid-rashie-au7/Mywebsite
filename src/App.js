import React , {useState,useEffect} from 'react'
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from './Components/Navbar';
import Header from './Components/Header';
import Particle from './Components/Particle';
import Loader from 'react-spinners/RiseLoader';
import About from './Components/About';
import Services from './Components/Services';
import logo from './assets/Mylogo.png' 
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
function App() {

 const [loading, setLoading] = useState(false);

 useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);
 },[]);

  return (
    <div className="App">
      { 
      loading ? 
      <div className='loader'>
        <img src={logo} alt="" />
        <div className="Header" >Abdul Rashid A
        </div>
        <Loader size={15} color={'#fff'} loading={loading} />
      </div>
        :
      <>
      <Particle />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      </>
      } 
    </div>
  );
}

export default App;
