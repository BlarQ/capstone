import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { HiMail } from "react-icons/hi";
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { MdEmojiEmotions } from 'react-icons/md';
import { PiChatTextFill, PiHandbagSimpleFill, PiTagFill } from "react-icons/pi";

export default function page() {
  return (
    <div>
        <section className='flex w-full justify-center items-start px-10 my-10 space-x-10'>
            <div className='w-1/2'>
                <h1 className='text-7xl font-extrabold w-[80%]'>Get in touch with us today!</h1>

                <p className='py-5 font-semibold text-[gray]'>Discover the latest trends and exclusive styles at our fashion store. Whether you&apos;re looking for chic everyday wear, elegant evening outfits, or the perfect accessories to complete your look, we have it all. Our friendly and knowledgeable team is here to help you find exactly what you need. Visit us in-store or reach out to us online for personalized fashion advice and customer service. Elevate your wardrobe with our carefully curated collections and enjoy a shopping experience like no other.</p>

                <section className='space-y-10'>
                  <div className='flex space-x-4 group cursor-pointer w-fit hover:translate-x-2 duration-500'>
                    <div className='bg-green-50 w-fit p-5 rounded-full'>
                      <HiMail className='text-4xl text-green-400'/>
                    </div>
                    <div className='font-bold text-2xl flex flex-col justify-between py-1'>
                      <h2 className='text-[gray] text-xl'>EMAIL US</h2>
                      <Link href="mailto:collinsogunlala@gmail.com" className='group-hover:text-green-400 duration-500 transition-all'>contact@trendluxe.com</Link>
                    </div>
                  </div>
                  
                  <div className='flex space-x-4 group cursor-pointer w-fit hover:translate-x-2 duration-500'>
                    <div className='bg-blue-50 w-fit p-5 rounded-full'>
                      <MdEmojiEmotions className='text-4xl text-blue-400'/>
                    </div>
                    <div className='font-bold text-2xl flex flex-col justify-between py-1'>
                      <h2 className='text-[gray] text-xl'>CALL US</h2>
                      <Link href="tel:+2348174726892" className='group-hover:text-blue-400 duration-500 transition-all'>(234) 817 4726 892</Link>
                    </div>
                  </div>
                </section>
            </div>

            <div className='w-1/2'>
              <form className='border-[1px] py-20 px-12 space-y-10'>
                <div className='grid grid-cols-2 grid-rows-2 gap-7'>
                  <input className='h-11 rounded-full px-5 outline-none border-[1px] shadow-md placeholder:font-medium' type="text" name="name" placeholder='Enter your name' />
                  <input className='h-11 rounded-full px-5 outline-none border-[1px] shadow-md placeholder:font-medium' type="email" name="email" placeholder='example@email.com' />
                  <input className='h-11 rounded-full px-5 outline-none border-[1px] shadow-md placeholder:font-medium' type="text" name="mobile" placeholder='(+234) 817 4726 892' />
                  <input className='h-11 rounded-full px-5 outline-none border-[1px] shadow-md placeholder:font-medium' type="text" name="service" placeholder='ex. Services' />
                </div>

                <div className='flex flex-col items-start space-y-10'>
                  <textarea className='outline-none shadow-md border-[1px] rounded-xl min-h-48 px-5 py-3 w-full' name="text" id="text" placeholder='Leave us a message...'></textarea>
                  <button className='bg-[#34c759] hover:scale-95 transition-all duration-300 py-3 px-5 rounded-full shadow-sm shadow-[#34c759] text-white font-semibold flex items-center justify-center'>Send Message
                    <FiArrowUpRight className='text-xl'/>
                  </button>
                </div>
              </form>
            </div>
        </section>

        <section className='my-40'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-6xl font-bold my-4'>Reach us directly</h2>
            <p className='w-1/2 text-center font-semibold text-[gray]'>At TrendLuxe, we are dedicated to providing you with the best in fashion and customer service. Whether you have a question about our products, need assistance with your order, or have any other inquiries, our team is here to help.</p>

          </div>
          <div className='flex gap-6 px-10 my-12'>
            <Link href="mailto:collinsogunlala@gmail.com" className='bg-orange-100 w-2/3 p-10 hover:scale-95 duration-300'>
              <div className='pb-20'>
                <div className='p-5 w-fit bg-white rounded-full'>
                  <PiHandbagSimpleFill className='text-5xl text-orange-400'/>
                </div>

                <h2 className='py-5 text-2xl font-bold'>Help & Support</h2>

                <p className='font-semibold text-[gray]'>For any general questions, order status, or assistance with our website, please reach out to our support team. We&#39;re here to ensure your shopping experience is seamless and enjoyable.</p>
              </div>

              <div className='flex justify-start items-center space-x-2'>
                <p className='font-medium'>help@trendluxe.com</p>

                <IoArrowForwardCircleOutline className='text-3xl'/>

              </div>
            </Link>

            <Link href="mailto:collinsogunlala@gmail.com" className='bg-pink-100 w-2/3 p-10 hover:scale-95 duration-300'>
              <div className='pb-20'>
                <div className='p-5 w-fit bg-white rounded-full'>
                  <PiTagFill className='text-5xl text-pink-400'/>
                </div>

                <h2 className='py-5 text-2xl font-bold'>Sales</h2>

                <p className='font-semibold text-[gray]'>Interested in bulk orders, partnership opportunities, or have questions about our latest collections? Contact our sales team for more information.</p>
              </div>

              <div className='flex justify-start items-center space-x-2'>
                <p className='font-medium'>sales@trendluxe.com</p>

                <IoArrowForwardCircleOutline className='text-3xl'/>

              </div>
            </Link>

            <Link href="mailto:collinsogunlala@gmail.com" className='bg-green-100 w-2/3 p-10 hover:scale-95 duration-300'>
              <div className='pb-20'>
                <div className='p-5 w-fit bg-white rounded-full'>
                  <PiChatTextFill className='text-5xl text-green-400'/>
                </div>

                <h2 className='py-5 text-2xl font-bold'>Technical Support</h2>

                <p className='font-semibold text-[gray]'>Experiencing technical issues with our website or need help with your online account? Our technical support team is ready to assist you.</p>
              </div>

              <div className='flex justify-start items-center space-x-2'>
                <p className='font-medium'>Chat with us</p>

                <IoArrowForwardCircleOutline className='text-3xl'/>

              </div>
            </Link>
            
          </div>
        </section>
    </div>
  )
}
