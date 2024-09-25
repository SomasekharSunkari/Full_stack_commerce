import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import Title from "../components/Title"
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { products, currency,addtoCart } = useContext(ShopContext);

  const { productId } = useParams();
  const [productData, setproductData] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setproductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }
  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (

    <div className=' border-t-2 pt-10  transition-opacity duration-500 opacity-100'>
      <div className='flex flex-col gap-12 sm:gap-12 sm:flex-row'>
        {/* Product Images Rendering */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%]'>
            {
              productData.image.map((item, index) => (
                <img src={item} onClick={() => setImage(item)} key={index} alt="Image" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="Main Image" className='w-full h-auto' />

          </div>
        </div>
        {/* Product Info   */}

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="star rating icon" className='w-3 ' />
            <img src={assets.star_icon} alt="star rating icon" className='w-3 ' />
            <img src={assets.star_icon} alt="star rating icon" className='w-3 ' />
            <img src={assets.star_icon} alt="star rating icon" className='w-3 ' />
            <img src={assets.star_dull_icon} alt="star rating icon" className='w-3 ' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button key={index} onClick={() => setSize(item)} className={`border-2 px-4 py-2 bg-gray-100 ${item === size ? "border-orange-500" : ""}`}>{item}</button>

                ))
              }

            </div>

          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700' onClick={()=> addtoCart(productData._id,size)}> Add to Cart</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='flex flex-col gap-1 mt-5 text-sm text-gray-500'>
            <p>Original Product</p>
            <p>Cash on Delivery Avaialble</p>
            <p> Easy return  exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='flex'>
          <b className='text-sm border px-5 py-3'>Description</b>
          <b className='text-sm border px-5 py-3'>Reviews</b>
        </div>
        <div className='flex flex-col border gap-4 text-gray-500 px-6 py-6 '>
          < p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint illo optio magni minus eum molestias omnis nostrum id possimus.lorem20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur laborum, praesentium ad aliquam temporibus cumque in ex veniam mollitia corrupti?</p>
          < p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio corporis mollitia deserunt ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptates placeat culpa soluta, earum ipsum quas veniam? Quia necessitatibus doloribus laboriosam officiis, itaque qui neque commodi, error pariatur quidem possimus.</p>
        </div>

      </div>
      {/* Related Products */}
      <div>
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

      </div>
    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product
