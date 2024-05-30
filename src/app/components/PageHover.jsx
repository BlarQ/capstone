import Link from 'next/link'
import React from 'react'

export default function PageHover() {
  return (
    <div>
        <section className='absolute shadow-md top-24 left-20  px-8 bg-[#2e4053] py-8 w-[50%] text-white grid sm:grid-cols-4 grid-rows-1 sm:gap-32 gap-10'>
              <section>
                <section>
                  <div className='flex flex-col gap-4'>
                    <p className='text-lg font-bold'>Pages</p>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Home</Link>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/about'>About</Link>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Pages</Link>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/product'>Products</Link>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Contact</Link>
                  </div>
                </section>
              </section>

              <section>
                <section>
                  <div className='flex flex-col gap-4'>
                    <p className='text-lg font-bold'>Category</p>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/shoecategory'>Shoes</Link>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/shirtcategory'>Shirts</Link>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/watchcategory'>WristWatch</Link>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Bags</Link>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Breifcase</Link>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Wallets</Link>
                  </div>
                </section>
              </section>

              <section>
                <section>
                  <div className='flex flex-col gap-4'>
                    <p className='mb-6'></p>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>FAQs</Link>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Terms of Service</Link>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Shipping Information</Link>
                    <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Reviews and Testimonials</Link>
                  </div>
                </section>
              </section>
            </section>
    </div>
  )
}
