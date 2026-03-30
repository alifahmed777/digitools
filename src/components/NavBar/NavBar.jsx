import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

const NavBar = () => {
    return (
        <div className='w-6/7 mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <h1 className='hover:cursor-pointer font-bold text-3xl text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>DigiTools</h1>
                </div>
                <div className="navbar-center">
                    <ul className='flex gap-3'>
                        <li><a href=''>Products</a></li>
                        <li><a href=''>Features</a></li>
                        <li><a href=''>Pricing</a></li>
                        <li><a href=''>Testimonials</a></li>
                        <li><a href=''>FAQ</a></li>
                        
                    </ul>
                
                </div>
                <div className="navbar-end space-x-2">
                  
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <MdOutlineShoppingCart className='text-2xl'></MdOutlineShoppingCart>
                            <span className="badge badge-xs badge-primary indicator-item">1</span>
                        </div>
                    </button>
                    <p><a href=''>Login</a></p>
                    <button className='btn text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Get Started</button>
                </div>
            </div>

        </div>
    );
};

export default NavBar;