import React from 'react';
import { toast } from 'react-toastify';
const ProductCard = ({ card, carts, setCarts, total, setTotal }) => {
    const { features } = card;
    // console.log(carts.length);
    const handleCarts = () => {
        toast.success('add cart');
        const ab = [...carts, card];
        setCarts(ab);

        setTotal(total + card.price);
        // console.log(carts);

    }

    return (
        <div>

            <div className=' p-4 shadow-sm rounded-2xl space-y-2 flex flex-col justify-between h-full'>
                <div>
                    <div className='flex justify-end'>
                        <h5 className='bg-[#FEF3C6] text-[#BB4D00] inline-block px-2 rounded-full' >{card.tagType}</h5>
                    </div>
                    <div className='border inline-block p-4 border-[#F2F2F2] rounded-full'>
                        <img src={card.icon}></img>

                    </div>

                    <h2 className='text-[#101727] font-bold text-2xl'>{card.name}</h2>
                    <p className='text-[#627382]'>{card.description}</p>
                    <p className='font-bold text-2xl'>$<span>{card.price}</span><span className='text-[#627382] text-[16px]'>/{card.period}</span></p>
                    {
                        // features.map(feature=><p className='flex gap-2 '> <img src={checkImg}></img> {feature}</p>)
                        features.map((feature, index) => <p key={index} className='flex items-center text-[#627382]'>         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> {feature}</p>)
                    }

                </div>

                <button onClick={handleCarts} className='btn btn-block text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Buy Now</button>


            </div>
        </div>
    );
};

export default ProductCard;