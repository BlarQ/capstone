import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function DiscoverMission() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-16 mx-4 md:mx-8 my-16 md:my-32 bg-gray-200 p-10 md:p-20'>
      <div>
        <h2 className='text-2xl md:text-6xl font-bold max-w-full md:max-w-96'>Discover our mission</h2>
        <p className='font-bold text-sm md:text-base text-gray-600 my-4 md:w-fit'>
          At TrendLuxe, our mission is to empower individuals through fashion, offering a curated selection of high-quality clothing, wristwatches, and shoes that inspire confidence and joy. We are committed to exceptional craftsmanship, sustainable practices, and innovative designs that reflect the unique style of our customers. Our goal is to create a shopping experience that not only enhances your wardrobe but also elevates your everyday life.
        </p>
        <Link href='/' className='flex bg-[#2e4053] mt-6 md:mt-10 py-3 md:py-4 px-4 md:px-5 max-w-36 items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>
            Shop Now <MdArrowOutward className='text-xl ml-1' />
        </Link>
      </div>
      <div className='w-full md:min-w-[50%]'>
        <Image src='/mission-img.jpg' alt='Models' width={500} height={500} layout='responsive' />
      </div>
    </div>
  );
}
