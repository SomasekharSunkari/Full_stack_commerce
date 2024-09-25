import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from "../components/Title"
import ProductCard from "../components/ProductCard"
import { assets } from '../assets/frontend_assets/assets';
const Collection = () => {
  const { products } = useContext(ShopContext)
  const [showFilters, setShowFilters] = useState(false);
  const [filterproducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sortType,setSortType] = useState("relevent");
  const {search,showSearch} = useContext(ShopContext);
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const sortProducts = ()=>{
    const fpProducts = filterproducts.slice();
    switch(sortType){
      case "low-high":
        setFilterProducts(fpProducts.sort((a,b)=>a.price - b.price))
        break;
      case "high-low":
        setFilterProducts(fpProducts.sort((a,b)=> b.price - a.price))
        break;
      default:
        applyFilterstoProducts();
    }
  }

  const applyFilterstoProducts = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category
      ))
    }
      if (subcategory.length > 0) {
        productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory
        ))

      }
      setFilterProducts(productsCopy);
    
  }
  const toggleSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }
  
  useEffect(() => {
    applyFilterstoProducts()
  }, [category, subcategory,search,showSearch])
  useEffect(()=>{
    sortProducts();
  },[sortType]);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={() => setShowFilters(!showFilters)} className='flex items-center cursor-pointer gap-2 my-2 text-xl '>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""}`} alt="Drop Image" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? "" : "hidden"} sm:block`}>
          <p className='text-sm font-medium mb-3'>CATEGORIES</p>
          <div className='flex  flex-col gap-2 text-sm font-light'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Men"} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Women"} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Kids"} onChange={toggleCategory} /> Kids
            </p>
          </div>

        </div>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? "" : "hidden"} sm:block`}>
          <p className='text-sm font-medium mb-3'>TYPE</p>
          <div className='flex  flex-col gap-2 text-sm font-light'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Topwear"} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Bottomwear"} onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Winterwear"} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>

        </div>

      </div>
      {/* Right side */}
      <div className='flex-1 flex flex-col justify-between items-start mt-3 text-base sm:text-2xl'>
        <div className='flex w-full justify-between text-base sm:text-2xl mb-4'>


          <Title heading1={"ALL"} heading2={"COLLECTIONS"} />
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-600 p-2 font-light text-sm'>
            <option value="relevent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>


        {/* Map Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2'>
          {
            filterproducts.map((item, index) => (
              <ProductCard key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection
