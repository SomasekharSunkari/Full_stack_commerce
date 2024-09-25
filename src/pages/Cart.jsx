import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const Cart = () => {
  const { products, cartItems, currency ,updateQuanity} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div>
      <hr />
      <div className="mt-10">
        <div className="font-medium text-3xl mb-3">
          <Title heading1="YOUR" heading2="CART" />
        </div>
        <div className="flex flex-col">
          {cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            {console.log(productData)}

            if (!productData) {
              return null; // or handle the error case
            }

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-4">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]}
                    alt="Product"
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=> e.target.value = "" || e.target.value === "0" ? null:updateQuanity(item._id,item.size,Number(e.target.value))} type="number" defaultValue={item.quantity} min={1} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
                <img src={assets.bin_icon} alt="Bin" className='w-4 sm:w-5 cursor-pointer mr-4' onClick={()=> updateQuanity(item._id,item.size,0)}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
