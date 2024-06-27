"use client";
import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { MdClose, MdKeyboardArrowUp } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import Cart from './Cart';
import SearchBar from './SearchBar';
import PageHover from './PageHover';
import { GiHamburgerMenu } from "react-icons/gi";
import { SideBarContext } from '../providers';
import CartPage from './CartPage';

export const BottomNav = () => {
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    const [hide, setHide] = useState(false);
    const [page, setPage] = useState(false);
    const suggestionBoxRef = useRef(null);

    function showNav() {
        setHide(!hide);
    }

    // Click outside handler
    useEffect(() => {
        function handleClickOutside(event) {
            if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(event.target)) {
                setFilteredItems([]);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [suggestionBoxRef]);

    return (
        <div className='relative'>
            <nav className='flex justify-between items-center px-4 md:px-10 h-24 text-[#2e4053]'>
                <div className='flex items-center justify-start gap-16'>
                    <Link className='text-xl font-bold' href='/'>
                        TrendLuxe
                    </Link>

                    <ul className={hide ? 'fixed font-semibold flex sm:flex-row text-[#2e4053] left-0 w-full sm:text-black flex-col h-[40vh] mt-[22rem] sm:flex px-5 pt-5 gap-y-5 bg-white shadow-md sm:bg-transparent sm:mt-0 sm:h-0 sm:left-48 sm:font-semibold sm:gap-x-5 items-start' : 'sm:relative hidden sm:flex items-center justify-start gap-5 font-semibold'}>
                        <li >
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                        <li className='relative group'>
                            <Link className='group flex justify-center items-center' href='/'>
                                Pages
                                <MdKeyboardArrowUp className='group-hover:rotate-180 text-xl duration-300' />
                            </Link>
                            <div className={`sm:absolute hidden group-hover:block bg-white shadow-lg mt-2`}>
                                <li className='flex flex-col space-y-4 py-2'>
                                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/'>Home</Link>
                                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/about'>About</Link>
                                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/product'>Products</Link>
                                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/contact'>Contact</Link>
                                </li>
                            </div>
                        </li>
                        <li>
                            <Link href='/product'>Product</Link>
                        </li>

                        <div className='flex sm:hidden w-full'>
                            <Link className='bg-[#34c759] text-center text-white py-3 min-w-[100%] rounded-full font-semibold hover:scale-95 hover:transition duration-500' href='/contact'>Buzz!</Link>
                        </div>
                    </ul>
                </div>

                <div className='hidden sm:block'>
                    <SearchBar />
                </div>

                <div className='justify-center items-center space-x-7 hidden sm:flex'>
                    <Cart className='cursor-pointer' />
                    <Link className='bg-[#34c759] text-white py-3 px-6 rounded-full font-semibold hover:scale-95 hover:transition duration-500 capitalize' href='/contact'>Buzz!</Link>
                </div>

                <div className='sm:hidden cursor-pointer flex justify-center items-center space-x-8'>
                    <Cart className='cursor-pointer' />
                    <ul onClick={showNav} className='p-2 bg-[#34c759] rounded-md shadow-md text-white'>
                        <GiHamburgerMenu className={hide ? "hidden" : "block text-2xl"} />
                        <RiCloseFill className={`${!hide ? "hidden" : "block text-2xl font-bold"}`} />
                    </ul>
                </div>
            </nav>

            {page && <PageHover />}

            {isOpen && <CartPage />}
        </div>
    );
}
