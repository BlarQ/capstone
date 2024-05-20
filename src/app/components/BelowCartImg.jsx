import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function BelowCartImg() {
  return (
      <div className='mx-8 flex items-start justify-between gap-10'>
        <Image src="/homeimg4.jpg" alt='Man on black jacket' width={650} height={400} className='w-[650px]' />

        <div className='mt-20'>
          <div>
            <h2 className='text-7xl font-bold text-[#2e4053]'>Discover Our Mission for Fashion Trends</h2>
            <p className='my-5 font-bold text-[#2e4053]'>Stay ahead of the curve with our curated selection of stylish shirts, trendy shoes, chic bags, and sleek wallets. We bring you the latest fashion trends, ensuring you always look your best. Shop now and be a trendsetter!</p>

            <Link href='/' className='flex bg-[#2e4053] py-4 px-5 sm:max-w-36 items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>Shop Now <MdArrowOutward className='text-xl ml-1' /> </Link>
          </div>

          <div className='flex -ml-[26%] sm:mt-12'>
            <Image src="/bci1.jpg" alt='Stylish lady with a trendy wears' width={250} height={250} />
            <Image src="/bci2.jpg" alt='Stylish lady with a trendy wears' width={250} height={250} />
            <Image src="/bci3.jpg" alt='Stylish lady with a trendy wears' width={250} height={250} />
          </div>
        </div>
      </div>
  )
}
