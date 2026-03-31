import React from 'react';
import { toast } from 'react-toastify';

const Carts = ({ carts,setCarts,total,setTotal}) => {
    const handleRemove=(cart)=>{
        toast.warning("remove cart");
        const filterCart=carts.filter(crt=>crt.name!=cart.name);
        setCarts(filterCart);
        setTotal(total-cart.price);

    }
    return (
        <div className='space-y-2'>
            {carts.map(cart => {
                return (
                    <div className='bg-[#F9FAFC] flex justify-between items-center p-4 rounded-xl'>
                        <div className='flex'>
                            <div className='p-3 bg-white rounded-full'>
                                <img src={cart.icon}></img>
                            </div>
                            <div>
                                <h5 className='text-[#101727] font-semibold'>{cart.name}</h5>
                                <p className='text-[#627382]'>${cart.price}</p>

                            </div>
                        </div>

                        <div onClick={()=>handleRemove(cart)} className='text-[#FF3980] font-bold cursor-pointer'>Remove</div>
                    </div>
                )
            })}
        </div>
    );
};

export default Carts;