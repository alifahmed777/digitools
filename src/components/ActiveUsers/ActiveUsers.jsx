import React from 'react';

const ActiveUsers = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-8'>
            <div className='w-6/7 mx-auto text-white flex justify-around'>
                <div>
                    <h1 className='font-bold text-2xl md:text-6xl'>50K+</h1>
                    <p>Active Users</p>
                </div>
                  
                    <hr className='text-[#E1E7FF] w-15 h-2 rotate-90 mt-6 md:mt-10'></hr>

                

                <div>
                    <h1 className='font-bold ext-2xl md:text-6xl'>200+</h1>
                    <p>Premium Tools</p>
                </div>


                
                    <hr className='text-[#E1E7FF] w-15 h-2 rotate-90 mt-6 md:mt-10'></hr>

            
               
                  
                <div>
                    <div>
                        <h1 className='font-bold ext-2xl md:text-6xl'>4.9</h1>
                        <p>Rating</p>
                    </div>
                </div>

            </div>
           

        </div>
    );
};

export default ActiveUsers;