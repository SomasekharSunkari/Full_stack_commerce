import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductCard from './ProductCard';

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.filter(item => item.category === category && item.subCategory === subCategory);
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products])
    return (
        <div className='my-24'>
            <div className='text-center py-2 text-3xl'>
                <Title heading1={"RELATED"} heading2={"PRODUCTS"} />
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {related.map(( item,index) => (
                        <ProductCard key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))}

                </div>

            </div>
        </div>
    )
}

export default RelatedProducts
