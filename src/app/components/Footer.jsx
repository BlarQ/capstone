import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer>
        <h2 className='text-[17.7rem] text-[#2e4053] w-[100%] font-bold -mb-32'>TrendLuxe</h2>
        <div className='bg-[#2e4053] text-white p-10'>
            <div className='flex justify-center items-center my-10'>
              <form className='flex justify-center items-center rounded-full bg-[#f7f7f7] w-[70%]'>
                <input type="email" name="email" id="email" className='w-[100%] rounded-l-full py-4 bg-inherit focus:outline-none px-8 text-black text-base font-bold' />
                <button type="submit" className='py-3 px-6 rounded-full bg-[#34c759] mr-1 hover:scale-95 hover:transition ease-in-out duration-500'>Subscribe</button>
              </form>
            </div>

            <section className='grid grid-cols-4 gap-32'>
              <div className='text-5xl'>
                <p className='mb-10'>Discover Your Style... </p>
                <p className='text-4xl'>@TrendLuxe</p>
              </div>

              <section>
                <section>
                  <div className='flex flex-col gap-4'>
                    <p>Pages</p>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Home</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>About</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Pages</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Products</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Contact</Link>
                  </div>
                </section>
              </section>

              <section>
                <section>
                  <div className='flex flex-col gap-4'>
                    <p>Category</p>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Shoes</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Shirts</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>WristWatch</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Bag & Purse for Women</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Breifcase</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Wallets</Link>
                  </div>
                </section>
              </section>

              <section>
                <section>
                  <div className='flex flex-col gap-4'>
                    <p className='mb-6'></p>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>FAQs</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>About Us</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Vendors</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Affiliate</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Terms of Service</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Shipping Information</Link>
                    <Link className='hover:translate-x-1 duration-300  hover:text-[#e7e7e7]' href='/'>Reviews and Testimonials</Link>
                  </div>
                </section>
              </section>
            </section>

            <section className='flex justify-center items-center my-10'>
              <div className='text-center'>
                <h2>TrendLuxe</h2>
                <p>Copyright &copy; {new Date().getFullYear()} TrendLuxe | Designed by ColliBits</p>
              </div>
            </section>
        </div>
    </footer>
  )
}
