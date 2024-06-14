import Link from 'next/link'
import React from 'react'

export default function PageHover() {
  return (
    <div className='sm:h-screen sm:w-full sm:backdrop-blur-[2px] absolute'>
        <section className='relative shadow-lg top-0 left-[23%] px-8 bg-[whitesmoke] py-8 w-[40%] text-[#2e5043] grid sm:grid-cols-4 grid-rows-1 sm:gap-32 gap-10 rounded-md'>
              <section>
                <section>
                  <div className='flex flex-col gap-4'>
                    <p className='text-lg font-bold'>Pages</p>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/'>Home</Link>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/about'>About</Link>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/'>Pages</Link>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/product'>Products</Link>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/'>Contact</Link>
                  </div>
                </section>
              </section>

              <section>
                <section>
                  <div className='flex flex-col gap-4'>
                    <p className='text-lg font-bold'>Category</p>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/shoecategory'>Shoes</Link>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/shirtcategory'>Shirts</Link>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/watchcategory'>WristWatch</Link>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/'>Bags</Link>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/'>Breifcase</Link>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/'>Wallets</Link>
                  </div>
                </section>
              </section>

              <section>
                <section>
                  <div className='flex flex-col gap-4 w-full'>
                    <p className='mb-6'></p>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/'>FAQs</Link>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/'>Terms</Link>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/'>Shipping Information</Link>
                    <Link className='hover:text-[#34c759] duration-300 w-fit' href='/'>Reviews</Link>
                  </div>
                </section>
              </section>
            </section>
    </div>
  )
}
