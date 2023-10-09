import React from 'react'
import { RiShoppingCartFill } from 'react-icons/ri'
import { LiaBarsSolid } from 'react-icons/lia'
import { MdOutlineMobileScreenShare } from 'react-icons/md'


const Footer = () => {
    return (
        <>

            {/* overview section */}
            <div className='flex justify-evenly py-2 bg-gray-50 text-gray-500'>
                <div className='flex flex-col justify-center items-center'>
                    <LiaBarsSolid className='text-4xl' />
                    <h1 className='leading-tight text-sm font-bold'>Overview</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <MdOutlineMobileScreenShare className='text-4xl' />
                    <h1 className='leading-tight text-sm font-bold'>Airtime</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <RiShoppingCartFill className='text-4xl' />
                    <h1 className='leading-tight text-sm font-bold'>Transfer</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <RiShoppingCartFill className='text-4xl' />
                    <h1 className='leading-tight text-sm font-bold'>Bills</h1>
                </div>
            </div>
        </>

    )
}

export default Footer