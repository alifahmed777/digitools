import React from 'react';
import CartEmpty from './CartEmpty/CartEmpty';
import ShowCart from './ShowCart/ShowCart';

const AllCart = ({carts,setCarts,total,setTotal}) => {
    return (
        <div className='border-2 my-10 p-4 rounded-xl border-[#F2F2F2]'>
            <h5 className='text-[#101727] font-bold text-2xl'>Your Cart</h5>
            {carts.length===0?<CartEmpty></CartEmpty>:<ShowCart total={total} setTotal={setTotal} carts={carts} setCarts={setCarts}></ShowCart>}
            
        </div>
    );
};

export default AllCart;