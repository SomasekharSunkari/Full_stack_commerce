import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'

const BestSeller = () => {
    const { products } = useContext(ShopContext)
    const [bestSellers,setBestSelleres ] = useState([]);
    useEffect(()=>{
        const pro = products.filter(item => item.bestseller)
        setBestSelleres(pro.slice(0,5))
    },[])
    // const bestSellers = products.filter(item => item.bestseller === true)
    // console.log(bestSellers)
    return (
        <div className='sm:my-10'>


            <div className='text-center  text-3xl mb-8 '>
                <Title heading1={"Best"} heading2="Sellers" />
                <p className='text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni et animi tempore illo, porro est iusto voluptatum minus quis harum!</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 '>
                {
                    bestSellers.map((item,index )=> (
                        <ProductCard key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller

