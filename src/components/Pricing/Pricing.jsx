import React from 'react';

const Pricing = () => {
    return (
        <div className='  py-20 mt-15'>
            <div className='w-6/7 mx-auto space-y-2 text-center'>
                <h2 className='text-[#101727] font-bold text-4xl'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-6/7 mx-auto mt-10'>
                {/* card */}
                <div className=' p-4 shadow-sm rounded-2xl  bg-[#F9FAFC] flex flex-col justify-between'>
                    <div className='space-y-2'>
                        <div>
                            <h2 className='text-[#101727] font-bold text-2xl'>Starter</h2>
                            <p className='text-[#627382]'>Perfect for getting started</p>

                        </div>

                        <p className='font-bold text-2xl'>$<span>0</span><span className='text-[#627382] text-[16px]'>/month</span></p>

                        <div>
                            <p className='flex items-center text-[#627382]'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Access to 10 free tools</p>
                            <p className='flex items-center text-[#627382]'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Basic templates</p>
                            <p className='flex items-center text-[#627382]'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Community support</p>
                            <p className='flex items-center text-[#627382]'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>1 project per month</p>


                        </div>


                    </div>


                    <div>
                        <button className='btn btn-block text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Get Started Free</button>

                    </div>
                </div>

                {/* card */}
                {/* <div className='flex justify-center'>
                        <p className='text-[#BB4D00] inline-block px-2 rounded-full bg-[#FEF3C6]'>Most Popular</p>
                    </div> */}



                <div className=' p-4 shadow-sm rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex flex-col justify-between'>
                    <div className='flex justify-center -mt-7'>
                        <p className='text-[#BB4D00] inline-block px-2 rounded-full bg-[#FEF3C6]'>Most Popular</p>
                    </div>

                    <div className='space-y-2'>
                        <div>
                            <h2 className=' text-white font-bold text-2xl'>Pro</h2>
                            <p className='text-white'>Best for professionals</p>

                        </div>


                        <p className='font-bold text-2xl text-white'>$<span>29</span><span className=' text-[16px]'>/month</span></p>

                        <div>
                            <p className='flex items-center text-white'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Access to all premium tools</p>
                            <p className='flex items-center text-white'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Unlimited templates</p>
                            <p className='flex items-center text-white'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Priority support</p>
                            <p className='flex items-center text-white'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Unlimited projects</p>
                            <p className='flex items-center text-white'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Cloud sync</p>
                            <p className='flex items-center text-white'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Advanced analytics</p>


                        </div>

                    </div>


                    <div>
                        <button className='btn btn-block text-white rounded-full bg-white'><p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>Start Pro Trial</p></button>


                    </div>




                </div>


                <div className=' p-4 shadow-sm rounded-2xl space-y-2 bg-[#F9FAFC] flex flex-col justify-between'>
                    <div className='space-y-2'>
                            <div>
                        <h2 className='text-[#101727] font-bold text-2xl'>Enterprise</h2>
                        <p className='text-[#627382]'>For teams and businesses</p>

                    </div>


                    <p className='font-bold text-2xl'>$<span>99</span><span className='text-[#627382] text-[16px]'>/month</span></p>
                      
                      <div>
                        <p className='flex items-center text-[#627382]'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Everything in Pro</p>
                    <p className='flex items-center text-[#627382]'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Team collaboration</p>
                    <p className='flex items-center text-[#627382]'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Custom integrations</p>
                    <p className='flex items-center text-[#627382]'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Dedicated support</p>
                    <p className='flex items-center text-[#627382]'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>SLA guarantee</p>
                    <p className='flex items-center text-[#627382]'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Custom branding</p>


                      </div>

                    </div>


                   

                      <div>
                                            <button className='btn btn-block text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Contact Sales</button>


                      </div>
                    
                </div>






            </div>

        </div>


    );
};

export default Pricing;