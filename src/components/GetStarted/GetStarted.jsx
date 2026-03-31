import React from 'react';
import userImg from '../../assets/user.png'
import packageImg from '../../assets/package.png'
import rocketImag from '../../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] text-center py-20 mt-15 space-y-4'>
            <div className='w-6/7 mx-auto space-y-2'>
                <h2 className='text-[#101727] font-bold text-4xl'>Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-6/7 mx-auto gap-4'>
                <div className='p-4 shadow-sm rounded-2xl space-y-2 bg-white'>
                
                    <div className='flex justify-end'>
                        <p className='px-2 py-1 rounded-full inline-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>01</p>
                        </div>
                    <div className='flex bg-[#E1E7FF] p-4 inline-block rounded-full justify-center'>
                        <img src={userImg}></img>
                    </div>
                    <h1 className='font-bold text-2xl'>Create Account</h1>
                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>

                </div>

                <div className='p-4 shadow-sm rounded-2xl  space-y-2 bg-white'>
                    <div className='flex justify-end'>
                        <p className='px-2 py-1 rounded-full inline-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>02</p>
                        </div>
                    <div className='flex bg-[#E1E7FF] p-4 inline-block rounded-full justify-center '>
                        <img src={packageImg}></img>
                    </div>
                    <h1 className='font-bold text-2xl'>Choose Products</h1>
                    <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>

                </div>

                <div className='p-4 shadow-sm rounded-2xl space-y-2 bg-white'>
                    <div className='flex justify-end'>
                        <p className='px-2 py-1 rounded-full inline-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>03</p>
                        </div>
                    <div className='flex bg-[#E1E7FF] p-4 inline-block rounded-full justify-center'>
                        <img src={rocketImag}></img>
                    </div>
                    <h1 className='font-bold text-2xl'>Start Creating</h1>
                    <p className='text-[#627382]'>Download and start using your premium  tools immediately.</p>

                </div>

            </div>

        </div>
    );
};

export default GetStarted;