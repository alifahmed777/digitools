import React from 'react';
import bannerImg from '../../assets/banner.png';
import bannerIcon from '../../assets/products/Group_5.png'
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <div className='w-6/7 mx-auto '>

            {/* <div className='flex flex-col  md:justify-between items-center gap-25 py-6'> */}
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-25 py-6'>

                <div className='space-y-4'>
                    <div className='bg-[#E1E7FF] hover:cursor-pointer inline-flex items-center py-1 px-3 gap-2 rounded-full'>
                        <img src={bannerIcon}></img>
                        <h5 className='text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]'> New: AI-Powered Tools Available</h5>

                    </div>
                    <h1 className='font-extrabold text-5xl text-[#101727]'>Supercharge Your <br></br> Digital Workflow</h1>
                    <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products</p>
                    <div className='flex gap-2'>
                        <button className='hover:cursor-pointer py-2 px-4 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>

                        <button className='hover:cursor-pointer rounded-full pl-2 border border-[#4F39F6]  flex items-center gap-1 hover:bg-[#4F39F6]' ><CiPlay1 className='text-xl  text-[#4F39F6] hover:text-white '></CiPlay1> <p className='py-2 pr-4  text-transparent bg-clip-text  bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white'> Watch Demo</p></button>

                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={bannerImg}></img>

                </div>

            </div>



        </div>
    );
};

export default Banner;