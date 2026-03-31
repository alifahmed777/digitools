import React from 'react';
import Carts from './Carts/Carts';
import { toast } from 'react-toastify';

const ShowCart = ({carts,setCarts,total,setTotal}) => {
    const handleProceed=()=>{
        toast.info("Clears all cart items");
        setCarts([]);
        setTotal(0);
    
    }
    return (
        <div className='space-y-2'>
            <Carts carts={carts} setCarts={setCarts} total={total} setTotal={setTotal}></Carts>

            <div className='flex justify-between'>
                <p className='text-[#627382]'>Total:</p>
                <h3 className='font-bold'>{total}</h3>
            </div>
            <button onClick={()=>handleProceed()} className='btn btn-block text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Proceed to Checkout</button>

            
        </div>
    );
};

export default ShowCart;