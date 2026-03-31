import React from 'react';
import ProductCard from './ProductCard';

const AllProduct = ({productCardsData,carts,setCarts,total,setTotal}) => {
    // const {features}=productCardsData;
    // console.log(features);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
            {
                productCardsData.map((card,index)=><ProductCard key={index} total={total} setTotal={setTotal} card={card} carts={carts} setCarts={setCarts}></ProductCard>)
            }
            
        </div>
    );
};

export default AllProduct;
