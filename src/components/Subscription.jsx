import React from 'react'

const Subscription = () => {
    const Submithandler = (e)=>{
        e.preventDefault()
    }
    return (
        <div className='text-center my-5'>
            <p className='font-semibold text-3xl mb-2'>Subscribe now & get 20% off</p>
            <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form className='w-full sm:w-1/2 mx-auto flex  gap-3 items-center my-6 border' onSubmit={Submithandler}>
                <input type="email"  className='w-full sm:flex-1 outline-none px-2' placeholder='Enter your email ' required/>
                <button  className='bg-black text-white text-sm px-10 py-4' >Submit</button>
            </form>

        </div>
    )
}

export default Subscription
