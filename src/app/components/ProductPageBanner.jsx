import Link from 'next/link';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


export default function ProductPageBanner() {
  return (
    <div className='bg-[url(/product-banner.jpg)] h-[80vh] bg-cover mx-4 mb:mx-8 mb-10 md:mb-24 bg-opacity-90'>
          <div className='flex flex-col items-center justify-center h-full backdrop-blur-sm gap-y-4'>
              <h1 className='text-3xl md:text-7xl text-[#f7f7f7] font-bold'>All Products</h1>
              <p className='text-lg w-[90%] md:w-[50%] text-[#10181b] text-center font-semibold'>Discover our curated collection of stylish shoes, bags, clothes, and wristwatches. Each piece combines quality and design to elevate your look. Enjoy exceptional customer service and fast delivery. Upgrade your wardrobe today!</p>

              <Link href='#explore' className='px-4 py-3 bg-slate-600 rounded-full flex items-center justify-center gap-1 text-[#f7f7f7] font-semibold hover:scale-95 duration-300 group'>
                  <p>
                      Explore products
                  </p>

                  <MdArrowOutward className='group-hover:text-xl duration-300'/>

              </Link>
          </div>

    </div>
  )
}
