import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
const ProductCard = ({id,name,price,image}) => {
    const {currency} = useContext(ShopContext);
  return (
    <Link className='cursor-pointer text-gray-700' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="Product Image" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{price}{currency}</p>
      
    </Link>
  )
}

export default ProductCard
