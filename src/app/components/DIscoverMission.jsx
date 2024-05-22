import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function DIscoverMission() {
  return (
    <div className='flex justify-between items-center space-x-16 mx-8 my-32 bg-gray-200 p-20'> 
        <div>
            <h2 className='text-6xl font-bold max-w-96'>Discover our mission</h2>

            <p className='font-bold text-[gray] my-4 w-fit'>At TrendLuxe, our mission is to empower individuals through fashion, offering a curated selection of high-quality clothing, wristwatches, and shoes that inspire confidence and joy. We are committed to exceptional craftsmanship, sustainable practices, and innovative designs that reflect the unique style of our customers. Our goal is to create a shopping experience that not only enhances your wardrobe but also elevates your everyday life.</p>

            <Link href='/' className='flex bg-[#2e4053] mt-10 py-4 px-5 max-w-36 items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>Shop Now <MdArrowOutward className='text-xl ml-1'/> </Link>
        </div>

        <div className='min-w-max min-h-max'>
            <Image src='/mission-img.jpg' alt='Models' width={500} height={500} />
        </div>
    </div>
  )
}
