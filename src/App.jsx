import { FaUser } from 'react-icons/fa'
import './App.css'
import { toast, ToastContainer } from 'react-toastify'

function App() {

  const ab=()=>{
     toast("Wow so easy!")

  }
  ab();
  


  return (
    <>
    <FaUser></FaUser>
     
          <button className="btn">Default</button>
          <h1 className='text-5xl'>Get started</h1>
        
          


        <ToastContainer></ToastContainer>
    </>
  )
}

export default App
