import React from 'react'
import { BsThreeDots, BsToggle2Off, BsToggle2On } from 'react-icons/bs'
import { FaCalendarDays } from 'react-icons/fa6'
import { PiTelevisionLight } from 'react-icons/pi'
import { MdFlightTakeoff } from 'react-icons/md'
import { ImCreditCard } from 'react-icons/im'
import { BsQrCodeScan } from 'react-icons/bs'
import { IoFingerPrint, IoSettingsOutline } from 'react-icons/io5'
import { CgData } from 'react-icons/cg'
import { RiShoppingCartFill} from 'react-icons/ri'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <div className='bg-red-500 h-screen w-screen pt-5'>
                <div className='mx-5 mb-2  flex justify-between '>
                    <div className='flex justify-between gap-2 text-white'>
                        <BsThreeDots className=' cursor-pointer text-2xl' />
                        <h1 className='font-bold'>Overview</h1>
                    </div>
                    <div>
                        <h1 className='font-bold'>logo</h1>
                    </div>
                </div>

                {/* THE preview Amount section */}
                <div className='bg-white h-28 w-auto px-5 py-2 mx-5 rounded-md'>
                    <h1 className='text-red-500 font-bold'>1223551133</h1>
                    <hr />
                    <h1 className='font-bold text-gray-400'>GOODYMAN EAGLE</h1>
                    <div className='flex justify-between'>
                        <div className='flex text-2xl font-bold'>
                            <h1>N</h1>
                            <h1>*****</h1>
                        </div>


                        {/* the Toggle button section */}
                        <div className='flex justify-between items-center gap-2'>
                            <h1 className='text-gray-600'>Show balance</h1>
                            <BsToggle2Off className=' text-3xl text-gray-500' />
                            <BsToggle2On className=' hidden' />
                        </div>

                    </div>
                </div>

                {/* the ledger and History section */}
                <div className='px-5 py-3 mt-3 flex justify-between font-bold text-white bg-gray-600'>
                    <h1>Ledger Balance: <span>Hidden</span></h1>

                    <div className='flex justify-between items-center gap-1'>
                        <FaCalendarDays />
                        <h1>History</h1>
                    </div>

                </div>


                {/*  the links section*/}

                <div className='px-5 py-3  bg-white h-96'>
                    <h1>invest-Links</h1>
                    <hr />

                    <div className='my-5 flex justify-evenly  items-center font-bold'>

                        <div className='flex flex-col justify-center items-center '>
                            <ImCreditCard className='text-3xl' />
                            <h1 className='text-sm'>Cards</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <PiTelevisionLight className='text-4xl' />
                            <h1 className='text-sm'>Cable Tv</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <MdFlightTakeoff className='text-4xl' />
                            <h1 className='leading-tight text-sm'>Travel & <br /> Leisure</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <BsQrCodeScan className='text-3xl' />
                            <h1 className='text-sm'>QR Payments</h1>
                        </div>

                    </div>


                    {/* second section */}
                    <hr />
                    <div className='my-5 flex justify-evenly  items-center font-bold'>

                        <div className='flex flex-col justify-center items-center '>
                            <IoFingerPrint className='text-3xl' />
                            <h1 className='text-sm'>myBVN</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <CgData className='text-4xl' />
                            <h1 className='text-sm'>Data</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <RiShoppingCartFill className='text-4xl' />
                            <h1 className='leading-tight text-sm'>Shopping</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <IoSettingsOutline className='text-3xl' />
                            <h1 className='text-sm'>Settings</h1>
                        </div>

                    </div>

                    <hr />

                </div>

                <Footer />
            </div>
        </>

    )
}

export default Home