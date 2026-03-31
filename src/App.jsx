import { FaUser } from 'react-icons/fa'
import './App.css'
import { ToastContainer } from 'react-toastify'
import ProductCards from './components/ProductCards/ProductCards';
import { Suspense, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import ActiveUsers from './components/ActiveUsers/ActiveUsers';
import GetStarted from './components/GetStarted/GetStarted';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';

const fetchData=async()=>{
  const res=await fetch('/data.json');
  return res.json();
}

function App() {
  const [carts,setCarts]=useState([]);

  const productCardsJson=fetchData();


  return (
    <>

    <NavBar carts={carts}></NavBar>

    <Banner></Banner>

    <ActiveUsers></ActiveUsers>



    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
       <ProductCards carts={carts} setCarts={setCarts} productCardsJson={productCardsJson}></ProductCards>
    </Suspense>


    <GetStarted></GetStarted>

    <Pricing></Pricing>

    <Footer></Footer>



   
   
     
        
        
          


        <ToastContainer></ToastContainer>
    </>
  )
}

export default App
