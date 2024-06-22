'use client'
import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion'



export default function Footer() {
  const flowInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <footer>
      {/* <h2 className={styles.fhead}>TrendLuxe</h2> */}
      <div className='bg-[#2e4053] text-white md:p-10 p-5'>
        <div className='flex justify-center items-center md:my-10 my-5'>
          <form className='flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:justify-center sm:items-center rounded-full sm:bg-[#f7f7f7] md:w-[70%]'>
            <input type="email" name="email" placeholder='Enter your email' id="email" className='w-full rounded-full sm:rounded-l-full py-4 bg-inherit focus:outline-none px-8 text-black text-base font-bold bg-white sm:bg-transparent' />
            <button type="submit" className='flex items-center justify-center gap-x-2 py-3 px-6 rounded-full bg-[#34c759] mr-1 w-full sm:w-[20%] hover:scale-95 hover:transition ease-in-out duration-500'>Subscribe
              <FaArrowRight className='text-sm' />
            </button>
          </form>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={flowInVariants}

        >
          <section className='grid sm:grid-cols-4 sm:gap-32 md:gap-10 gap-8'>
            <div className='md:text-5xl text-3xl md:text-left text-center'>
              <p className='sm:mb-10 mb-5 sm:mt-0 mt-5 font-extrabold'>Discover Your Style... </p>
              <p className='sm:text-3xl font-extrabold text-2xl'>@TrendLuxe</p>
            </div>

            <section>
              <section>
                <div className='flex flex-col md:gap-4 gap-2 sm:items-start'>
                  <p className='text-xl font-bold'>Pages</p>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Home</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/about'>About</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/product'>Products</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/contact'>Contact</Link>
                </div>
              </section>
            </section>

            <section>
              <section>
                <div className='flex flex-col md:gap-4 gap-2 sm:items-start'>
                  <p className='text-xl font-bold'>Category</p>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/shoecategory'>Shoes</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/shirtcategory'>Shirts</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/watchcategory'>WristWatch</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Bag & Purse for Women</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Breifcase</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Wallets</Link>
                </div>
              </section>
            </section>

            <section className='grid-flow-row'>
              <section>
                <div className='flex flex-col md:gap-4 gap-2 sm:items-start'>
                  <p className='sm:mb-6'></p>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>FAQs</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Vendors</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Affiliate</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Terms of Service</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Shipping Information</Link>
                  <Link className='hover:translate-x-1 duration-300 w-fit hover:text-[#e7e7e7]' href='/'>Reviews and Testimonials</Link>
                </div>
              </section>
            </section>
          </section>

        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={flowInVariants}

        >


          <section className='flex justify-center items-center my-10'>
            <div className='text-center'>
              <h2>TrendLuxe</h2>
              <p>Copyright &copy; {new Date().getFullYear()} TrendLuxe | Designed by ColliBits/BlarQ</p>
            </div>
          </section>
        </motion.div>
      </div>
    </footer>
  )
}
