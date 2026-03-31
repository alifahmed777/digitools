import React, { use, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import AllCart from '../AllCart/AllCart';

const ProductCards = ({ productCardsJson,carts,setCarts }) => {
    const productCardsData = use(productCardsJson);
    const [btnClick, setBtnClick] = useState(true);

    const [total,setTotal]=useState(0);


    // const [carts,setCarts]=useState([]);




    return (
        <div className='w-6/7 mx-auto '>
            <div className='text-center mt-15 space-y-5'>
                <h2 className='text-[#101727] font-bold text-4xl'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>

                <div className='space-x-2'>
                    <button onClick={() => setBtnClick(true)} className={btnClick ? 'btn text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : 'btn rounded-full'}>Products</button>
                    <button onClick={() => setBtnClick(false)} className={btnClick ? 'btn rounded-full' : 'btn text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}>Cart ({carts.length})</button>
                </div>

            </div>

            {
                btnClick?<AllProduct total={total} setTotal={setTotal} carts={carts} setCarts={setCarts} productCardsData={productCardsData}></AllProduct>:<AllCart total={total} setTotal={setTotal} carts={carts} setCarts={setCarts} ></AllCart>

            }


        </div>
    );
};

export default ProductCards;