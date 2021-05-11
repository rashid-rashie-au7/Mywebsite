import React , {useState,useEffect} from 'react'
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import{Navbar} from './Components/Navbar';
import Header from './Components/Header';
import Particle from './Components/Particle';
import Loader from 'react-spinners/RiseLoader';

function App() {

 const [loading, setLoading] = useState(false);

 useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 4000);
 },[]);

  return (
    <div className="App">
      { 
      loading ? 
      <div className='loader'>
        <div className="Header">Abdul Rashid A</div>
      <Loader size={20} color={'#fff'} loading={loading} />
      </div>
        :
      <>
      <Particle />
      <Navbar />
      <Header />
      </>
      } 
    </div>
  );
}

export default App;
