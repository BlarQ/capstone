"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import { RiCloseFill } from "react-icons/ri";
import Cart from './Cart'
import SearchBar from './SearchBar'


export const BottomNav = () => {
    const [hide, setHide] = useState(false)

    function showNav(){
        setHide(!hide)
    }

    return (
        <nav className='flex justify-between items-center px-10 h-24 text-[#2e4053]'>
            <div className='flex items-center justify-start gap-16'>
                <Link className='text-xl font-semibold' href='/'>
                    TrendLuxe
                </Link>

                <ul className={hide ? 'absolute font-bold flex sm:flex-row right-5 text-white sm:text-black flex-col h-[55vh] mt-[29rem] sm:flex pt-5 gap-y-10 bg-[#a0a0a0e7] sm:bg-transparent sm:mt-0 sm:h-0 sm:left-48 sm:font-semibold sm:gap-x-5 w-60 pr-10 rounded-md items-end' : 'sm:relative hidden sm:flex items-center justify-start font-medium gap-5' }>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link className='flex justify-center items-center' href='/'>Pages
                            <MdKeyboardArrowDown />
                        </Link>
                    </li>
                    <li>
                        <Link href='/product'>Product</Link>
                    </li>
                    
                    <div className='flex items-center justify-center space-x-7 sm:hidden'>

                        <Cart />
                        <Link className='bg-[#34c759] text-white py-3 px-4 rounded-full font-semibold hover:scale-95 hover:transition duration-500' href='/'>Get in touch</Link>
                    </div>
                </ul>
            </div>

            <div>
                <SearchBar />
            </div>
            <div className='justify-center items-center space-x-7 hidden sm:flex'>
                <Cart />
                <Link className='bg-[#34c759] text-white py-3 px-4 rounded-full font-semibold hover:scale-95 hover:transition duration-500' href='/'>Get in touch</Link>
            </div>


            <div className='sm:hidden cursor-pointer'>
                <ul onClick={showNav}>
                    <RxHamburgerMenu className={hide ? "hidden" : "block"}/>
                    <RiCloseFill className={!hide ? "hidden" : "block"}/>
                </ul>
            </div>
        </nav>
    )
}
