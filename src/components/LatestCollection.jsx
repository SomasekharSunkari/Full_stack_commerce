import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductCard from './ProductCard';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
        setLatestProducts(products.slice(0, 10))
    },[])
    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title heading1={"LATEST"} heading2={"COLLECTIONS"} />
                <p className=' w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto laboriosam obcaecati culpa eveniet reprehenderit facere magnam itaque at aliquid!
                </p>
            </div>
            {/* Rendering the products Here */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                        latestProducts.map((item,index)=>(
                            <ProductCard key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                        ))
                }
            </div>


        </div>
    )
}

export default LatestCollection
