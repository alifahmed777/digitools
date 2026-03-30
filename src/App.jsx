import { FaUser } from 'react-icons/fa'
import './App.css'
import { ToastContainer } from 'react-toastify'
import ProductCards from './components/ProductCards/ProductCards';
import { Suspense } from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';

const fetchData=async()=>{
  const res=await fetch('/data.json');
  return res.json();
}

function App() {

  const productCardsJson=fetchData();


  return (
    <>

    <NavBar></NavBar>

    <Banner></Banner>






    {/* <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
       <ProductCards productCardsJson={productCardsJson}></ProductCards>
    </Suspense> */}

   
   
     
        
        
          


        <ToastContainer></ToastContainer>
    </>
  )
}

export default App
