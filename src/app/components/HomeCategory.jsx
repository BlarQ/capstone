import React from 'react'
import styles from './homebanner.module.css'
import Link from 'next/link'
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import { MdArrowOutward } from 'react-icons/md'

export default function HomeCategory() {
  return (
    <div className='flex flex-col bg-[url(/homeimg2.jpg)] h-fit pb-10 md:h-[100vh] mx-4 md:mx-8'>
      <div className='flex flex-col pt-[10%] items-center md:mx-16 w-full md:w-[60%] lg:w-[50%] text-center md:text-left'>
        <h2 className='text-4xl px-5 sm:text-5xl md:text-6xl my-5 text-white font-bold'>
          Sustainable Swag for Trendsetters
        </h2>
        <p className='text-[#f7f7f7] text-sm px-5 text-left sm:text-base md:text-lg'>
          Discover eco-conscious fashion that doesn&apos;t compromise on style! Our e-commerce site offers a curated selection of stylish shirts, chic wristwatches, trendy shoes, and versatile bags, all crafted with sustainability in mind.
        </p>
      </div>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 mt-10 mx-4 md:mx-20 items-center'>
        <Link href='/product' className='flex bg-white hover:shadow-[#34c759] shadow-sm shadow-white py-3 md:py-4 px-4 md:px-5 md:max-w-36 w-full items-center justify-center rounded-full text-[#2e4053] font-bold hover:bg-[#34c759] hover:text-white hover:scale-95 duration-300'>
            Shop Now <MdArrowOutward className='text-xl ml-1' />
        </Link>
        <Link href='/about' className='flex gap-2 hover:gap-3 duration-300 items-center justify-center text-white font-bold hover:text-[#34c759]'>
            Learn more <IoArrowForwardCircleOutline className='text-2xl' />
        </Link>
      </div>
    </div>
  );
}
