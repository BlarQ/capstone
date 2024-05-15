import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md"
import { FiShoppingCart } from "react-icons/fi"


export const BottomNav = () => {
    return (
        <nav className='flex justify-between items-center px-10 h-24'>
            <div className='flex items-center justify-start gap-16'>
                <Link className='text-xl font-semibold' href='/'>
                    TrendLuxe
                </Link>

                <ul className='flex items-center justify-start font-medium gap-5'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/'>About</Link>
                    </li>
                    <li>
                        <Link className='flex justify-center items-center' href='/'>Pages
                            <MdKeyboardArrowDown />
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>Product</Link>
                    </li>
                </ul>
            </div>

            <div className='flex justify-center items-center gap-5'>
                <FiShoppingCart className='text-3xl'/>
                <Link className='bg-[#34c759] text-white py-3 px-4 rounded-full font-semibold hover:scale-95 hover:transition duration-500' href='/'>Get in touch</Link>
            </div>
        </nav>
    )
}
