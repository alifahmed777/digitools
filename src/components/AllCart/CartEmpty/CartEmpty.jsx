import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const CartEmpty = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <CiShoppingCart className='h-20 w-20'></CiShoppingCart>

            <h3>Your cart is empty</h3>
            
        </div>
    );
};

export default CartEmpty;