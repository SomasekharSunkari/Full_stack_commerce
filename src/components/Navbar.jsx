import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from "../assets/frontend_assets/assets"
import Searchbar from './Searchbar'
import { ShopContext } from '../context/ShopContext'
const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const {setShowSearch,getCartCount} = useContext(ShopContext);

    return (

        <div className='flex items-center justify-between font-medium py-5'>
            <Link to="/">
                <img src={assets.logo} className='w-36' />
            </Link>
            <ul className='hidden sm:flex items-center gap-5 text-sm text-gray-700'>
                <NavLink to="/" className="flex flex-col items-center">
                    <p>HOME</p>
                    <hr className='w-2/4 h-[1.5px] border-none bg-gray-700 hidden' />
                </NavLink>
                <NavLink to="/collection" className="flex flex-col items-center">
                    <p>COLLECTION</p>
                    <hr className='w-2/4 h-[1.5px] border-none bg-gray-700 hidden' />
                </NavLink>
                <NavLink to="/about" className="flex flex-col items-center">
                    <p>ABOUT</p>
                    <hr className='w-2/4 h-[1.5px] border-none bg-gray-700 hidden' />
                </NavLink>
                <NavLink to="/contact" className="flex flex-col items-center">
                    <p>CONTACT</p>
                    <hr className='w-2/4 h-[1.5px] border-none bg-gray-700 hidden rounded' />
                </NavLink>

            </ul>
            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer' />
                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5  cursor-pointer' />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='hover:cursor-pointer hover:text-black'>Profile</p>
                            <p className='hover:cursor-pointer hover:text-black'>Orders</p>
                            <p className='hover:cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link className='relative' to="/cart">
                    <img src={assets.cart_icon} className='w-5 cursor-pointer' />
                   { getCartCount() > 0 ? <p className='absolute bg-black   w-4 text-white right-[-5px] text-sm text-center bottom-[-5px] leading-4  aspect-square rounded-full text-[8px]'>{getCartCount()}</p>:""}
                </Link>
                <img src={assets.menu_icon} onClick={() => setVisible(true)} className='w-5 sm:hidden cursor-pointer' />
                {/* Sidebar For Smaller divces */}
                <div className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all ${visible ? "w-full" : "w-0"}`}>
                    <div className='flex flex-col text-gray-500'>
                        <div className='flex items-center gap-4 p-4 cursor-pointer' onClick={()=>setVisible(false)}>
                            <img src={assets.dropdown_icon} className='rotate-180 h-4 cursor-pointer' alt='back Icon'/>
                            <p>Back</p>
                        </div>
                        <NavLink className="py-2 pl-6 border" to="/" onClick={() => setVisible(false)}>HOME</NavLink>
                        <NavLink className="py-2 pl-6 border" to="/collection" onClick={() => setVisible(false)}>COLLECTION</NavLink>
                        <NavLink className="py-2 pl-6 border" to="/about" onClick={() => setVisible(false)}>ABOUT</NavLink>
                        <NavLink className="py-2 pl-6 border" to="/contact" onClick={() => setVisible(false)}>CONTACT</NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
