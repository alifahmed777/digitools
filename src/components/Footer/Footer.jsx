import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>


            <div className='w-6/7 mx-auto text-white'>
                <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 py-16'>
                    <div className='space-y-2'>
                        <h1 className='font-bold text-2xl'>DigiTools</h1>
                        <p className='opacity-80'>Premium digital tools for creators,<br></br>professionals, and businesses. Work smarter<br></br>with our suite of powerful tools.</p>

                    </div>
                    <div className='space-y-2'>
                        <h3 className='text-xl'>Product</h3>
                        <ul className='opacity-80'>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div className='space-y-2'>
                        <h3 className='text-xl'>Company</h3>
                        <ul className='opacity-80'>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>

                        </ul>

                    </div>
                    <div className='space-y-2'>
                        <h3 className='text-xl'>Resources</h3>
                        <ul className='opacity-80'>
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='space-y-2'>
                        <h3 className='text-xl'>Social Links</h3>
                        <div className='space-x-4'>
                            <div className='p-1 cursor-pointer text-black inline-block rounded-full bg-white'><TbBrandInstagramFilled></TbBrandInstagramFilled></div>
                            <div className='p-1 cursor-pointer text-black inline-block rounded-full bg-white'><FaFacebookSquare></FaFacebookSquare></div>
                            <div className='p-1 cursor-pointer text-black inline-block rounded-full bg-white'> <FaXTwitter></FaXTwitter></div>
                        </div>
                    </div>

                </div>

                <hr className='opacity-50'></hr>



                <div className='flex justify-between py-5 opacity-50'>
                    <div>
                        <p >© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p> Cookies</p>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Footer;