import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  my-10 mt-40 text-sm'>
                <div >
                    <img src={assets.logo} className='w-36' alt="Assets Logo" />
                    <p className='w-full sm:w-2/3 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ea, cupiditate iure assumenda obcaecati repellat quam doloremque laudantium illum pariatur.</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='xs:text-center'>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-000-000-0000</li>
                        <li>fake@gmail.com</li>
                        <li>Instagram</li>
                        {/* <li>Privacy Policy</li> */}
                    </ul>
                </div>

            </div>
            <div>
                <hr />
                <p className='text-center text-xs mt-2'>Copyright 2024@ greatstack.dev - All Right Reserved.</p>

            </div>
        </div>
    )
}

export default Footer
