import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function BelowCartImg() {
  return (
    <div className='w-[90%] md:w-[90%] mx-4 md:mx-8 flex flex-col-reverse lg:flex-row items-start justify-between md:gap-10'>
      <Image 
        src="/homeimg4.jpg" 
        alt='Man on black jacket' 
        width={650} 
        height={400} 
        className='w-full lg:w-[650px]' 
      />
      <div className='mt-10 flex flex-col items-center lg:items-start'>
        <div className='flex flex-col items-center md:justify-start md:mb-2 md:items-start justify-center text-center lg:text-left lg:my-6'>
          <h2 className='text-3xl sm:text-5xl lg:text-7xl font-bold text-[#2e4053]'>
            Discover Our Mission for Fashion Trends
          </h2>
          <p className='my-5 font-bold text-[#2e4053] text-sm sm:text-base lg:text-lg'>
            Stay ahead of the curve with our curated selection of stylish shirts, trendy shoes, chic bags, and sleek wallets. We bring you the latest fashion trends, ensuring you always look your best. Shop now and be a trendsetter!
          </p>
          <Link href='/' className='flex bg-[#2e4053] py-3 sm:py-4 px-4 sm:px-5 md:max-w-36 w-full items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>
              Shop Now <MdArrowOutward className='text-xl ml-1' />
          </Link>
        </div>
        <div className='flex flex-row mt-10 sm:mt-12 md:gap-4 lg:gap-0 lg:-mt-2 lg:-ml-44'>
          <Image 
            src="/bci1.jpg" 
            alt='Stylish lady with trendy wears' 
            width={250} 
            height={250} 
            className='w-[6.74rem] sm:w-64' 
          />
          <Image 
            src="/bci2.jpg" 
            alt='Man on black suit' 
            width={250} 
            height={250} 
            className='w-[6.74rem] sm:w-64' 
          />
          <Image 
            src="/bci3.jpg" 
            alt='Pair of black nike shoes' 
            width={250} 
            height={250} 
            className='w-[6.74rem] sm:w-64' 
          />
        </div>
      </div>
    </div>
  );
}
